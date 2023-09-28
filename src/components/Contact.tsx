import ConatactForm from './ConatactForm';
import FadeReveal from './reveal/FadeReveal';
import CategoryTitle from './typography/CategoryTitle';

type Props = {
  contactRef: React.RefObject<HTMLDivElement>;
};

export default function Contact({ contactRef }: Props) {
  return (
    <section className='py-24' ref={contactRef}>
      <FadeReveal>
        <CategoryTitle>Contact</CategoryTitle>
      </FadeReveal>
      <FadeReveal>
        <ConatactForm />
      </FadeReveal>
    </section>
  );
}
