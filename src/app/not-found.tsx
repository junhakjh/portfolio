import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='h-screen bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center'>
      <p>404 | PAGE NOT FOUND</p>
      <Link href='/'>
        <div className='mt-4 px-4 py-2 rounded-md bg-orange-600 text-xl'>Return Home</div>
      </Link>
    </div>
  );
}
