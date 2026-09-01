import React from 'react';
import { X, Trophy, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { UserStats } from './types';
import { Button } from './Button';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: UserStats;
}

export const StatsModal: React.FC<StatsModalProps> = ({ isOpen, onClose, stats }) => {
  if (!isOpen) return null;

  // Prepare data for chart (last 7 sessions)
  const data = stats.sessions.slice(0, 7).map((s, i) => ({
    name: `Sesión ${i + 1}`,
    minutos: parseFloat((s.durationSeconds / 60).toFixed(1)),
    completed: s.completed
  }));

  const hasData = data.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X size={20} />
        </button>

        <div className="mb-6 flex items-center gap-3">
          <div className="p-2 bg-brand-100 text-brand-600 rounded-lg">
            <Activity size={24} />
          </div>
          <h2 className="text-xl font-bold text-slate-800">Tu Progreso</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Total Sesiones</p>
                <p className="text-3xl font-bold text-brand-600 mt-1">{stats.totalSessions}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Minutos de Calma</p>
                <p className="text-3xl font-bold text-calm-600 mt-1">{Math.round(stats.totalMinutes)}</p>
            </div>
        </div>

        {hasData ? (
          <div className="h-64 w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" hide />
                <Tooltip 
                    cursor={{fill: '#f1f5f9'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="minutos" radius={[4, 4, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.completed ? '#0ea5e9' : '#94a3b8'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center text-xs text-slate-400 mt-2">Últimas sesiones</p>
          </div>
        ) : (
          <div className="h-40 flex flex-col items-center justify-center text-slate-400 bg-slate-50 rounded-xl mb-6">
            <Trophy size={32} className="mb-2 opacity-50" />
            <p>Completa un ejercicio para ver tus estadísticas</p>
          </div>
        )}

        <Button variant="outline" fullWidth onClick={onClose}>Cerrar</Button>
      </div>
    </div>
  );
};export default StatsModal;
