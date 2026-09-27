"use client";

import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export function LocalTimeClock() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setTimeString(formatter.format(new Date()));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-mono text-secondary">
      <Clock size={13} className="text-accent animate-pulse" />
      <span>Pune, India (IST):</span>
      <span className="text-primary font-semibold">{timeString || '15:30 IST'}</span>
    </div>
  );
}
