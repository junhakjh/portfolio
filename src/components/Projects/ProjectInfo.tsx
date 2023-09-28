import { ProjectInfoType } from '@/model/project';
import FlippingCard from '../ui/FlippingCard/FlippingCard';
import CheckIcon from '../ui/icons/CheckIcon';
import DocumentIcon from '../ui/icons/DocumentIcon';
import StarIcon from '../ui/icons/StarIcon';

type Props = {
  data: ProjectInfoType;
};

const SUBTITLE = 'md:text-3xl text-2xl font-semibold md:my-6 my-4 flex items-center';

export default function ProjectInfo({ data: { title, description, period, functions, techniques } }: Props) {
  return (
    <article className='my-12'>
      <h2 className='md:text-5xl text-4xl font-semibold'>{title}</h2>
      <br />
      <p className='md:text-xl'>{description}</p>
      <p className='md:text-lg text-base text-gray-600'>
        <time>{period.start}</time> ~ {period.end ? <time>{period.end}</time> : '진행중'}
      </p>
      <h3 className={SUBTITLE}>
        <DocumentIcon />
        주요 기능
      </h3>
      <ul>
        {functions.map((func, i) => (
          <li key={i}>
            <p className='flex'>
              <CheckIcon />
              <span>{func}</span>
            </p>
          </li>
        ))}
      </ul>
      <h3 className={SUBTITLE}>
        <StarIcon />
        사용 기술
        <span className='ml-2 self-end md:text-xl text-lg text-gray-600 font-medium'>Click Card!</span>
      </h3>
      <ul className='grid md:grid-cols-3 grid-cols-2 gap-6'>
        {techniques.map((technique, i) => (
          <li key={i}>
            <FlippingCard technique={technique} />
          </li>
        ))}
      </ul>
    </article>
  );
}
