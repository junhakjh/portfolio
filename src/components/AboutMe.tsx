import FadeReveal from './reveal/FadeReveal';
import CategoryTitle from './typography/CategoryTitle';
import CakeIcon from './ui/icons/CakeIcon';
import MailIcon from './ui/icons/MailIcon';
import MapPinIcon from './ui/icons/MapPinIcon';
import PhoneIcon from './ui/icons/PhoneIcon';
import UniversityIcon from './ui/icons/UniversityIcon';
import UserIcon from './ui/icons/UserIcon';
import { v4 as uuidv4 } from 'uuid';

const aboutMe = [
  {
    icon: <UserIcon />,
    content: '김준하',
  },
  {
    icon: <CakeIcon />,
    content: '1999-06-12',
  },
  {
    icon: <PhoneIcon />,
    content: '010-5683-2882',
  },
  {
    icon: <MailIcon />,
    content: 'junhakjh@ajou.ac.kr',
  },
  {
    icon: <MapPinIcon />,
    content: '경기도 화성시',
  },
  {
    icon: <UniversityIcon />,
    content: '아주대학교, 소프트웨어학과',
  },
];

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
