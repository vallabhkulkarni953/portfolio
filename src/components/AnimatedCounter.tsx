import React, { useEffect, useState, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}
export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  decimals = 0
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  const [displayValue, setDisplayValue] = useState('0');
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 100
  });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);
  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (decimals > 0) {
        setDisplayValue(latest.toFixed(decimals));
      } else {
        setDisplayValue(Math.floor(latest).toString());
      }
    });
  }, [springValue, decimals]);
  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>);

}