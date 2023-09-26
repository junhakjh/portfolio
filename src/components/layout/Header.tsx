'use client';

import { NavigationState, navigationState } from '@/recoil/navigationAtom';
import { useRecoilState } from 'recoil';

export default function Header() {
  const [curMenu, setCurMenu] = useRecoilState<NavigationState>(navigationState);

  const menuList: NavigationState[] = ['Home', 'Projects', 'About me', 'Contact'];

  return (
    <nav className='fixed left-0 top-1/2 -translate-y-1/2 h-80 p-4 bg-nav rounded-r-2xl text-zinc-100 text-base font-medium'>
      <ul className='h-full w-24 flex flex-col justify-around items-center'>
        {menuList.map((menu) => (
          <li key={menu}>
            <button onClick={() => setCurMenu(menu)} className={curMenu === menu ? 'text-white text-lg font-bold' : ''}>
              {menu}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
