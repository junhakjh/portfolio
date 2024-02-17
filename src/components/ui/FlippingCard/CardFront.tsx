import Image from 'next/image';

type Props = {
  image: string;
};

export default function CardFront({ image }: Props) {
  return (
    <div className='flex justify-center items-center'>
      <Image src={image} alt='technique image' width={150} height={150} />
    </div>
  );
}
