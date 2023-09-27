import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

export default function Footer() {
  return (
    <section className='w-full h-44 flex flex-col justify-around items-center bg-gray-400 text-white'>
      <div className='flex flex-col items-center'>
        <Link
          className='text-5xl mb-4'
          href='https://github.com/junhakjh'
          target='_blank'
          rel='noopener noreferrer nofollow'
        >
          <BsGithub />
        </Link>
        Copyright 2023. Kim Junha. All rights reserved.
      </div>
    </section>
  );
}
