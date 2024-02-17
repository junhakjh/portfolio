import { TechniqueType } from '@/model/project';
import FlippingCard from '../ui/FlippingCard/FlippingCard';
import StarIcon from '../ui/icons/StarIcon';
import { v4 as uuidv4 } from 'uuid';
import { SUBTITLE } from '@/lib/className';

type Props = {
  techniques: TechniqueType[];
};

export default function Technique({ techniques }: Props) {
  return (
    <>
      <h3 className={SUBTITLE}>
        <StarIcon />
        사용 기술
        <span className='ml-2 self-end md:text-xl text-lg text-gray-600 font-medium'>Click Card!</span>
      </h3>
      <ul className='grid md:grid-cols-4 grid-cols-2 gap-6'>
        {techniques.map((technique) => (
          <li key={uuidv4()}>
            <FlippingCard technique={technique} />
          </li>
        ))}
      </ul>
    </>
  );
}
