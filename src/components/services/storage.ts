import { SessionData, UserStats } from "../types";

const STORAGE_KEY = 'breathcalm_stats';

export const getStats = (): UserStats => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return { totalSessions: 0, totalMinutes: 0, sessions: [] };
    }
    return JSON.parse(stored);
  } catch (e) {
    console.error("Error reading stats", e);
    return { totalSessions: 0, totalMinutes: 0, sessions: [] };
  }
};

export const saveSession = (durationSeconds: number, completed: boolean) => {
  try {
    const currentStats = getStats();
    const newSession: SessionData = {
      date: new Date().toISOString(),
      durationSeconds,
      completed
    };
    
    const newStats: UserStats = {
      totalSessions: currentStats.totalSessions + 1,
      totalMinutes: currentStats.totalMinutes + (durationSeconds / 60),
      sessions: [newSession, ...currentStats.sessions].slice(0, 50) // Keep last 50
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newStats));
    return newStats;
  } catch (e) {
    console.error("Error saving session", e);
    return null;
  }
};