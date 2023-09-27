import Image from 'next/image';
import backgroundImage from '/public/images/background.jpg';

export default function BackgroundImg() {
  return (
    <div className='w-full h-full fixed top-0 left-0 flex items-center -z-50'>
      <Image className='object-contain scale-105' src={backgroundImage} alt='background image' fill priority />
    </div>
  );
}
