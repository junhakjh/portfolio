import FadeReveal from './reveal/FadeReveal';
import CategoryTitle from './typography/CategoryTitle';
import { aboutMe } from '../lib/myInfo';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  aboutMeRef: React.RefObject<HTMLDivElement>;
};

export default function AboutMe({ aboutMeRef }: Props) {
  return (
    <section className='md:py-24 py-12' ref={aboutMeRef}>
      <FadeReveal>
        <CategoryTitle>About me</CategoryTitle>
      </FadeReveal>
      <FadeReveal cascade={false}>
        <ul className='my-12 grid md:grid-cols-3 gap-6'>
          {aboutMe.map((info) => (
            <li className='bg-white w-full rounded-2xl shadow-lg' key={uuidv4()}>
              <p className='flex xl:flex-row flex-col gap-2 justify-center items-center xl:text-2xl md:text-xl text-lg md:h-32 h-24 text-center'>
                {info.icon}
                <span>{info.content}</span>
              </p>
            </li>
          ))}
        </ul>
      </FadeReveal>
    </section>
  );
}
