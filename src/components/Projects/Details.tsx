import { SUBTITLE } from '@/lib/className';
import DocumentIcon from '../ui/icons/DocumentIcon';
import CheckIcon from '../ui/icons/CheckIcon';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  details: string[];
};

export default function Details({ details }: Props) {
  return (
    <>
      <h3 className={SUBTITLE}>
        <DocumentIcon />
        Details
      </h3>
      <ul>
        {details.map((func) => (
          <li key={uuidv4()}>
            <p className='flex items-center'>
              <CheckIcon />
              <span>{func}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
