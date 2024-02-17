import styles from './FlippingCard.module.css';

type Props = {
  name: string;
  description: string;
};

export default function CardBack({ name, description }: Props) {
  return (
    <article className={styles.cardBack + ' overflow-y-auto scrollbar-hide'}>
      <h4 className='text-center md:text-2xl text-xl font-semibold md:mb-3 mb-2'>{name}</h4>
      <p className='md:text-base text-sm leading-5'>{description}</p>
    </article>
  );
}
