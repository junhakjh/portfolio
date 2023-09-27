import ConatactForm from './ConatactForm';
import FadeReveal from './reveal/FadeReveal';
import CategoryTitle from './typography/CategoryTitle';

export default function Contact() {
  return (
    <section className='py-24'>
      <FadeReveal>
        <CategoryTitle>Contact</CategoryTitle>
      </FadeReveal>
      <FadeReveal>
        <ConatactForm />
      </FadeReveal>
    </section>
  );
}
