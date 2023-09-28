'use client';

import { NavigationState, navigationState } from '@/recoil/navigationAtom';
import { useSetRecoilState } from 'recoil';

export default function Header() {
  const setCurMenu = useSetRecoilState<NavigationState>(navigationState);

  const menuList: NavigationState[] = ['Home', 'Projects', 'About me', 'Contact'];

  return (
    <nav className='fixed left-0 top-1/2 -translate-y-1/2 h-80 p-4 bg-nav rounded-r-2xl text-zinc-100 text-lg font-medium'>
      <ul className='h-full w-24 flex flex-col justify-around items-center'>
        {menuList.map((menu) => (
          <li key={menu}>
            <button onClick={() => setCurMenu(menu)} className='hover:text-white hover:font-bold w-full py-2'>
              {menu}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
