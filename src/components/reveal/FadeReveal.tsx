'use client';

import { Fade } from 'react-awesome-reveal';

type Props = {
  children: React.ReactNode;
};

export default function FadeReveal({ children }: Props) {
  return (
    <Fade cascade damping={0.6} delay={500} duration={1300} triggerOnce>
      {children}
    </Fade>
  );
}
