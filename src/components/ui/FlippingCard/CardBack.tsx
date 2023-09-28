import styles from './FlippingCard.module.css';

type Props = {
  name: string;
  description: string;
};

export default function CardBack({ name, description }: Props) {
  return (
    <article className={styles.cardBack + ' overflow-y-auto'}>
      <h4 className='text-center md:text-3xl text-xl font-semibold md:mb-5 mb-2'>{name}</h4>
      <p className='md:text-lg text-base leading-5'>{description}</p>
    </article>
  );
}
