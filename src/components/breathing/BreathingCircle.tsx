import React, { useEffect, useState, useRef, useCallback } from 'react';
import { animate } from 'animejs';
import { useTranslation } from 'react-i18next';
import { BreathingPhase, BreathingConfig } from '../types';

interface BreathingCircleProps {
  isPlaying: boolean;
  config: BreathingConfig;
  onComplete: () => void;
}

// Type for anime.js animation instance
type AnimeInstance = ReturnType<typeof animate>;

export const BreathingCircle: React.FC<BreathingCircleProps> = ({ isPlaying, config, onComplete }) => {
  const { t } = useTranslation();
  const [phase, setPhase] = useState<BreathingPhase>(BreathingPhase.IDLE);
  const [secondsRemaining, setSecondsRemaining] = useState(config.totalTime * 60);
  const [instructionKey, setInstructionKey] = useState('exercise.idle');

  // Refs for DOM elements
  const orbRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<SVGCircleElement>(null);
  const cometRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // Refs for animation instances (for pause/resume)
  const activeAnimationsRef = useRef<AnimeInstance[]>([]);
  const cycleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const phaseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track if we were previously playing (to detect pause vs initial stop)
  const wasPlayingRef = useRef(false);
  // Track if animations are currently paused
  const isPausedRef = useRef(false);

  // Circle constants
  const CIRCLE_RADIUS = 176;
  const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

  // Pause all active animations
  const pauseAllAnimations = useCallback(() => {
    activeAnimationsRef.current.forEach(anim => {
      if (anim && typeof anim.pause === 'function') {
        anim.pause();
      }
    });
    if (cycleTimeoutRef.current) {
      clearTimeout(cycleTimeoutRef.current);
    }
    if (phaseTimeoutRef.current) {
      clearTimeout(phaseTimeoutRef.current);
    }
    isPausedRef.current = true;
  }, []);

  // Resume all paused animations
  const resumeAllAnimations = useCallback(() => {
    activeAnimationsRef.current.forEach(anim => {
      if (anim && typeof anim.play === 'function') {
        anim.play();
      }
    });
    isPausedRef.current = false;
  }, []);

  // Cleanup all animations (for complete stop, not pause)
  const cleanupAnimations = useCallback(() => {
    activeAnimationsRef.current.forEach(anim => {
      if (anim && typeof anim.pause === 'function') {
        anim.pause();
      }
    });
    activeAnimationsRef.current = [];
    if (cycleTimeoutRef.current) {
      clearTimeout(cycleTimeoutRef.current);
      cycleTimeoutRef.current = null;
    }
    if (phaseTimeoutRef.current) {
      clearTimeout(phaseTimeoutRef.current);
      phaseTimeoutRef.current = null;
    }
    isPausedRef.current = false;
  }, []);

  // Reset visual state to initial
  const resetVisuals = useCallback(() => {
    if (orbRef.current) {
      orbRef.current.style.transform = 'scale(1)';
      orbRef.current.style.opacity = '0.8';
    }
    if (progressRef.current) {
      progressRef.current.style.strokeDashoffset = String(CIRCUMFERENCE);
    }
    if (cometRef.current) {
      cometRef.current.style.transform = 'rotate(0deg)';
    }
    if (glowRef.current) {
      glowRef.current.style.transform = 'scale(1)';
      glowRef.current.style.opacity = '0.3';
    }
  }, [CIRCUMFERENCE]);

  // Animate a single phase using Anime.js v4
  const animatePhase = useCallback((
    targetScale: number,
    targetOpacity: number,
    progressPercent: number,
    durationMs: number,
    phaseType: BreathingPhase
  ): Promise<void> => {
    return new Promise((resolve) => {
      // Clear previous animations
      activeAnimationsRef.current = [];

      // Use LINEAR easing for gradual, natural breathing
      // Inhale: gradual expansion (like lungs filling)
      // Hold: no scale change, just maintain
      // Exhale: gradual contraction (like lungs emptying)
      const scaleEase = 'linear';

      // Orb animation (scale + opacity) - ORGANIC SINE
      if (orbRef.current) {
        const orbAnim = animate(orbRef.current, {
          scale: targetScale,
          opacity: targetOpacity,
          duration: durationMs,
          ease: 'easeInOutSine',
        });
        activeAnimationsRef.current.push(orbAnim);
      }

      // Progress ring animation - LINEAR
      if (progressRef.current) {
        const progressAnim = animate(progressRef.current, {
          strokeDashoffset: CIRCUMFERENCE * (1 - progressPercent / 100),
          duration: durationMs,
          ease: 'linear',
        });
        activeAnimationsRef.current.push(progressAnim);
      }

      // Comet head rotation - LINEAR
      if (cometRef.current) {
        const cometAnim = animate(cometRef.current, {
          rotate: `${progressPercent * 3.6}deg`,
          duration: durationMs,
          ease: 'linear',
        });
        activeAnimationsRef.current.push(cometAnim);
      }

      // Glow pulse
      if (glowRef.current) {
        const glowAnim = animate(glowRef.current, {
          scale: phaseType === BreathingPhase.INHALE ? 1.15 : 1,
          opacity: phaseType === BreathingPhase.INHALE ? 0.6 : 0.3,
          duration: durationMs,
          ease: 'easeInOutSine',
        });
        activeAnimationsRef.current.push(glowAnim);
      }

      // Resolve after duration (store timeout ref for pause capability)
      phaseTimeoutRef.current = setTimeout(resolve, durationMs);
    });
  }, [CIRCUMFERENCE]);

  // Main breathing cycle effect
  useEffect(() => {
    // Handle pause/resume transitions
    if (!isPlaying && wasPlayingRef.current) {
      // Transitioned from playing to paused - PAUSE animations
      pauseAllAnimations();
      setInstructionKey('exercise.pause');
      wasPlayingRef.current = false;
      return;
    }

    if (isPlaying && isPausedRef.current) {
      // Transitioned from paused to playing - RESUME animations
      resumeAllAnimations();
      wasPlayingRef.current = true;
      // Note: We don't restart the cycle, the animations will continue
      return;
    }

    if (!isPlaying) {
      // Not playing and wasn't playing before - initial idle state
      cleanupAnimations();
      resetVisuals();
      setPhase(BreathingPhase.IDLE);
      setInstructionKey('exercise.idle');
      wasPlayingRef.current = false;
      return;
    }

    // Starting fresh (isPlaying = true, no pause state)
    wasPlayingRef.current = true;

    const runCycle = async () => {
      if (!isPlaying) return;

      const totalCycleTime = config.inhale + config.hold + config.exhale + (config.holdEmpty || 0);
      let accumulatedTime = 0;

      // Only reset visuals on first start, not on cycle loop
      // Check if we're at the very beginning (progress is 0)
      if (progressRef.current) {
        const currentOffset = parseFloat(progressRef.current.style.strokeDashoffset || String(CIRCUMFERENCE));
        if (currentOffset >= CIRCUMFERENCE * 0.99) {
          // At or near start, do a quick reset
          resetVisuals();
          await new Promise(r => setTimeout(r, 50));
        }
      }

      if (!isPlaying || isPausedRef.current) return;

      // 1. INHALE - Circle grows gradually
      setPhase(BreathingPhase.INHALE);
      setInstructionKey('exercise.inhale');
      accumulatedTime += config.inhale;
      const inhaleProgress = (accumulatedTime / totalCycleTime) * 100;
      await animatePhase(1.7, 1, inhaleProgress, config.inhale * 1000, BreathingPhase.INHALE);
      if (!isPlaying || isPausedRef.current) return;

      // 2. HOLD (Full) - Circle stays expanded
      if (config.hold > 0) {
        setPhase(BreathingPhase.HOLD);
        setInstructionKey('exercise.hold');
        accumulatedTime += config.hold;
        const holdProgress = (accumulatedTime / totalCycleTime) * 100;
        await animatePhase(1.7, 0.9, holdProgress, config.hold * 1000, BreathingPhase.HOLD);
        if (!isPlaying || isPausedRef.current) return;
      }

      // 3. EXHALE - Circle shrinks gradually
      setPhase(BreathingPhase.EXHALE);
      setInstructionKey('exercise.exhale');
      accumulatedTime += config.exhale;
      const exhaleProgress = (accumulatedTime / totalCycleTime) * 100;
      await animatePhase(1.0, 0.8, exhaleProgress, config.exhale * 1000, BreathingPhase.EXHALE);
      if (!isPlaying || isPausedRef.current) return;

      // 4. HOLD (Empty) - Box Breathing
      if (config.holdEmpty && config.holdEmpty > 0) {
        setPhase(BreathingPhase.HOLD_EMPTY);
        setInstructionKey('exercise.holdEmpty');
        accumulatedTime += config.holdEmpty;
        const holdEmptyProgress = (accumulatedTime / totalCycleTime) * 100;
        await animatePhase(1.0, 0.7, holdEmptyProgress, config.holdEmpty * 1000, BreathingPhase.HOLD_EMPTY);
        if (!isPlaying || isPausedRef.current) return;
      }

      // Loop - start next cycle
      cycleTimeoutRef.current = setTimeout(() => {
        // Reset for new cycle
        resetVisuals();
        setTimeout(() => runCycle(), 50);
      }, 50);
    };

    runCycle();

    return () => {
      // Cleanup on unmount
      cleanupAnimations();
    };
  }, [isPlaying, config, animatePhase, cleanupAnimations, pauseAllAnimations, resumeAllAnimations, resetVisuals]);

  // Reset timer when starting playback with timer at 0
  useEffect(() => {
    if (isPlaying && secondsRemaining === 0) {
      // Reset to full duration when restarting after completion
      setSecondsRemaining(config.totalTime * 60);
    }
  }, [isPlaying, config.totalTime]);

  // Global Countdown Timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining(prev => {
          if (prev <= 1) {
            onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, secondsRemaining, onComplete]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Dynamic classes based on phase - ALWAYS BLUE VARIANTS
  const getCircleColor = () => {
    switch (phase) {
      case BreathingPhase.INHALE: return 'bg-brand-400';
      case BreathingPhase.HOLD: return 'bg-brand-500';
      case BreathingPhase.EXHALE: return 'bg-brand-300';
      case BreathingPhase.HOLD_EMPTY: return 'bg-brand-200';
      default: return 'bg-brand-200';
    }
  };

  return (
    <div ref={rootRef} className="flex flex-col items-center justify-center w-full py-12">
      {/* Timer Display */}
      <div className="mb-8 text-3xl font-light text-slate-400 tabular-nums tracking-widest">
        {formatTime(secondsRemaining)}
      </div>

      {/* Main Visual */}
      <div className="relative w-80 h-80 flex items-center justify-center">
        {/* Ambient Glow */}
        <div
          ref={glowRef}
          className="absolute w-64 h-64 rounded-full bg-brand-400 blur-3xl opacity-30"
        />

        {/* Outer Guide Rings */}
        <div className="absolute w-full h-full rounded-full border border-slate-200 opacity-50 transform scale-150" />
        <div className="absolute w-full h-full rounded-full border border-slate-200 opacity-30 transform scale-100" />

        {/* Progress Ring SVG */}
        <div className="absolute w-[360px] h-[360px] pointer-events-none z-0">
          <svg className="w-full h-full transform -rotate-90">
            {/* Background track */}
            <circle
              cx="180"
              cy="180"
              r={CIRCLE_RADIUS}
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              className="text-slate-100"
            />
            {/* Animated progress */}
            <circle
              ref={progressRef}
              cx="180"
              cy="180"
              r={CIRCLE_RADIUS}
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-brand-400"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={CIRCUMFERENCE}
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Comet Head (Glowing Tip) */}
        <div
          ref={cometRef}
          className="absolute w-[352px] h-[352px] pointer-events-none z-10 rounded-full"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_4px_rgba(255,255,255,0.9),0_0_40px_8px_rgba(14,165,233,0.6)]"></div>
        </div>

        {/* The Breathing Orb */}
        <div
          ref={orbRef}
          className={`w-48 h-48 rounded-full ${getCircleColor()} z-10 shadow-[0_0_60px_rgba(14,165,233,0.5)]`}
        >
          <div className="w-full h-full flex items-center justify-center text-white text-lg font-medium opacity-90">
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-12 h-20 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 transition-all duration-500 ease-in-out">
          {t(instructionKey)}
        </h2>
        <p className="text-slate-500 mt-2 text-sm font-medium uppercase tracking-widest opacity-70">
          {phase === BreathingPhase.IDLE ? 'Toca iniciar' :
            phase === BreathingPhase.INHALE ? 'Por la nariz' :
              phase === BreathingPhase.EXHALE ? 'Por la boca' :
                phase === BreathingPhase.HOLD ? 'Pausa' :
                  phase === BreathingPhase.HOLD_EMPTY ? 'Espera' : '...'}
        </p>
      </div>
    </div>
  );
};export default BreathingCircle;
