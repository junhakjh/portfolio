'use client';

import styles from './FlippingCard.module.css';
import { useState } from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';
import { TechniqueType } from '@/model/project';

type Props = {
  technique: TechniqueType;
};

export default function FlippingCard({ technique: { name, image, description } }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section
      className={
        'md:h-[18rem] h-64 w-full xl:p-7 md:p-6 p-4 bg-gray-200 rounded-xl shadow-lg hover:shadow-xl cursor-pointer ' +
        (isFlipped ? styles.cardFlipped : styles.card)
      }
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <CardFront image={image} />
      <CardBack name={name} description={description} />
    </section>
  );
}
