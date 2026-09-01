import React, { useState } from 'react';
import { TEXTS } from '../../data/constants';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { X, Check, RefreshCw, Loader2 } from 'lucide-react';
import { subscribeToLoops } from '../../lib/loopsService';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRepeat: () => void; // New prop for repeating the exercise
}

export const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose, onRepeat }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const { t } = useTranslation();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const result = await subscribeToLoops(email);

    setIsLoading(false);

    if (result.success) {
      setSubmitted(true);
      // Auto close after success message
      setTimeout(onClose, 2500);
    } else {
      setError(result.message);
    }
  };

  const handleRepeat = () => {
    onRepeat();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 md:p-8 relative animate-in fade-in zoom-in duration-300">

        <button
          onClick={onClose}
          title="Cerrar"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
                <Check size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{TEXTS.modal.title}</h3>
              <p className="text-slate-600">{TEXTS.modal.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {TEXTS.modal.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  placeholder={TEXTS.modal.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy-consent"
                  required
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                  checked={acceptedPrivacy}
                  onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                />
                <label htmlFor="privacy-consent" className="text-xs text-slate-500 leading-relaxed">
                  {t('legal.privacyConsent')} <Link to="/privacidad" target="_blank" className="text-brand-500 hover:underline">{t('footer.privacy')}</Link>
                </label>
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <Button type="submit" fullWidth size="lg" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 size={20} className="animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  TEXTS.modal.submit
                )}
              </Button>
            </form>

            {/* Repeat Exercise Button (instead of "Skip") */}
            <button
              onClick={handleRepeat}
              className="w-full mt-4 flex items-center justify-center gap-2 text-sm text-brand-500 hover:text-brand-600 font-medium transition-colors"
            >
              <RefreshCw size={16} />
              {TEXTS.modal.repeat}
            </button>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
              <Check size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">¡Suscrito!</h3>
            <p className="text-slate-600">Revisa tu bandeja de entrada para más técnicas de calma.</p>
          </div>
        )}
      </div>
    </div>
  );
};export default EmailModal;
