import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from './Button';

export const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-emerald-100 p-2 rounded-full">
          <CheckCircle2 className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h4 className="font-semibold text-emerald-900">Sie sind auf der Liste!</h4>
          <p className="text-emerald-700 text-sm">Wir melden uns, sobald der Early Access startet.</p>
        </div>
        <button 
          onClick={() => setStatus('idle')}
          className="ml-auto text-sm text-emerald-600 hover:text-emerald-800 underline"
        >
          Zurück
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <div className="relative flex-grow">
        <input
          type="email"
          required
          placeholder="ihre@email.de"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all disabled:opacity-50"
          disabled={status === 'loading'}
        />
      </div>
      <Button type="submit" disabled={status === 'loading'} className="whitespace-nowrap">
        {status === 'loading' ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            Early Access anfordern
            <Send className="w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
};