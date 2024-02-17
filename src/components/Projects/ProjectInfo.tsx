import { ProjectInfoType } from '@/model/project';
import Technique from './Technique';
import Details from './Details';
import Description from './Description';

type Props = {
  data: ProjectInfoType;
  isLast: boolean;
};

export default function ProjectInfo({ data: { title, description, period, details, techniques }, isLast }: Props) {
  return (
    <article className='my-12'>
      <h2 className='md:text-5xl text-4xl font-semibold'>{title}</h2>
      <br />
      <Description description={description} period={period} />
      <Details details={details} />
      <Technique techniques={techniques} />
      {!isLast && <hr className='my-20 border-2 border-orange-600' />}
    </article>
  );
}
