'use client';

import styles from './FlippingCard.module.css';
import { useState } from 'react';
import Image from 'next/image';

type Props = {
  technique: {
    name: string;
    image: string;
    description: string;
  };
};

export default function FlippingCard({ technique: { name, image, description } }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section
      className={
        'h-96 w-full p-10 bg-gray-200 rounded-xl shadow-lg hover:shadow-xl cursor-pointer ' +
        (isFlipped ? styles.cardFlipped : styles.card)
      }
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className='flex justify-center items-center'>
        <Image src={image} alt='technique image' width={200} height={200} />
      </div>
      <article className={styles.cardBack}>
        <h4 className='text-center text-3xl font-semibold mb-5'>{name}</h4>
        <p>{description}</p>
      </article>
    </section>
  );
}
