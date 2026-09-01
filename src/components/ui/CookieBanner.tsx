import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, X } from 'lucide-react';

export const CookieBanner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-calm-100 text-calm-600 rounded-lg shrink-0">
            <Shield size={24} />
          </div>
          <div className="flex-1">
            <h4 className="text-slate-900 font-bold mb-1">
              {t('legal.cookieTitle', 'Respetamos tu privacidad')}
            </h4>
            <p className="text-sm text-slate-600 mb-4">
              {t('legal.cookieBody', 'Usamos almacenamiento local para guardar tu progreso y cookies anónimas para mejorar tu experiencia.')}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={accept}
                className="flex-1 bg-calm-600 hover:bg-calm-700 text-white font-bold py-2 rounded-xl transition-colors text-sm"
              >
                {t('common.accept', 'Aceptar')}
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="px-4 py-2 text-slate-400 hover:text-slate-600 transition-colors text-sm font-medium"
                aria-label={t('common.close', 'Cerrar')}
                title={t('common.close', 'Cerrar')}
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CookieBanner;
