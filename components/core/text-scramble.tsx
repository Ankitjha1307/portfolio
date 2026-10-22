'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import type { MotionProps } from 'motion/react';

const motionTags = {
  a: motion.a,
  p: motion.p,
  span: motion.span,
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  code: motion.code,
  pre: motion.pre,
  strong: motion.strong,
  em: motion.em,
};

export type TextScrambleProps = {
  children: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: keyof typeof motionTags;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
} & MotionProps;

const defaultChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = 'p',
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const MotionComponent = motionTags[Component];
  const [scrambledText, setScrambledText] = useState<string | null>(null);
  const running = useRef(false);
  const text = children;
  const displayText = scrambledText ?? children;

  useEffect(() => {
    if (!trigger || running.current) return;

    running.current = true;
    const steps = duration / speed;
    let step = 0;

    const interval = setInterval(() => {
      let scrambled = '';
      const progress = step / steps;

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          scrambled += ' ';
          continue;
        }

        if (progress * text.length > i) {
          scrambled += text[i];
        } else {
          scrambled +=
            characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setScrambledText(scrambled);
      step++;

      if (step > steps) {
        clearInterval(interval);
        running.current = false;
        setScrambledText(null);
        onScrambleComplete?.();
      }
    }, speed * 1000);

    return () => {
      clearInterval(interval);
      running.current = false;
    };
  }, [trigger, duration, speed, characterSet, text, onScrambleComplete]);

  return (
    <MotionComponent className={className} {...props}>
      {displayText}
    </MotionComponent>
  );
}
