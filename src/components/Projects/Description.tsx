import Link from 'next/link';

type Props = {
  description: string;
  period: {
    start: string;
    end?: string;
  };
  links?: [];
};

export default function Description({ description, period, links }: Props) {
  return (
    <>
      <p className='md:text-xl'>{description}</p>
      <p className='md:text-lg text-base text-gray-600'>
        <time>{period.start}</time> ~ {period.end ? <time>{period.end}</time> : '진행중'}
      </p>
      {links && (
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link className='md:text-lg text-base text-gray-600' href={link} target='_blank' rel='noreferrer'>
                <u>{link}</u>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
