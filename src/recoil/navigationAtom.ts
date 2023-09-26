'use client';

import { atom } from 'recoil';

export type NavigationState = 'Home' | 'Projects' | 'About me' | 'Contact';

export const navigationState = atom<NavigationState>({
  key: 'navigationState',
  default: 'Home',
});
