import { ProjectInfoType } from '@/model/project';
import FlippingCard from '../ui/FlippingCard/FlippingCard';
import CheckIcon from '../ui/icons/CheckIcon';
import DocumentIcon from '../ui/icons/DocumentIcon';
import StarIcon from '../ui/icons/StarIcon';

type Props = {
  data: ProjectInfoType;
};

const SUBTITLE = 'text-3xl font-semibold my-6 flex items-center';

export default function ProjectInfo({ data: { title, description, period, functions, techniques } }: Props) {
  return (
    <article className='my-12'>
      <h2 className='text-5xl font-semibold'>{title}</h2>
      <br />
      <p className='text-xl'>{description}</p>
      <p className='text-gray-600'>
        <time>{period.start}</time> ~ {period.end ? <time>{period.end}</time> : '진행중'}
      </p>
      <h3 className={SUBTITLE}>
        <DocumentIcon />
        주요 기능
      </h3>
      <ul>
        {functions.map((func, i) => (
          <li key={i}>
            <p>
              <CheckIcon />
              {func}
            </p>
          </li>
        ))}
      </ul>
      <h3 className={SUBTITLE}>
        <StarIcon />
        사용 기술
        <span className='ml-2 self-end text-xl text-gray-600 font-medium'>Click Card!</span>
      </h3>
      <ul className='grid grid-cols-3 gap-6'>
        {techniques.map((technique, i) => (
          <li key={i}>
            <FlippingCard technique={technique} />
          </li>
        ))}
      </ul>
    </article>
  );
}
