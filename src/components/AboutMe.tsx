import FadeReveal from './reveal/FadeReveal';
import CategoryTitle from './typography/CategoryTitle';
import CakeIcon from './ui/icons/CakeIcon';
import MailIcon from './ui/icons/MailIcon';
import MapPinIcon from './ui/icons/MapPinIcon';
import PhoneIcon from './ui/icons/PhoneIcon';
import UniversityIcon from './ui/icons/UniversityIcon';
import UserIcon from './ui/icons/UserIcon';

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

export default function AboutMe() {
  return (
    <section className='py-24'>
      <FadeReveal>
        <CategoryTitle>About me</CategoryTitle>
      </FadeReveal>
      <FadeReveal cascade={false}>
        <ul className='my-12 grid grid-cols-3 gap-6'>
          {aboutMe.map((info, index) => (
            <li className='bg-white w-full rounded-2xl shadow-lg' key={index}>
              <p className='flex justify-center items-center text-2xl h-32'>
                {info.icon}
                <span className='ml-5'>{info.content}</span>
              </p>
            </li>
          ))}
        </ul>
      </FadeReveal>
    </section>
  );
}
