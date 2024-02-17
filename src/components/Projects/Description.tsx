type Props = {
  description: string;
  period: {
    start: string;
    end?: string;
  };
};

export default function Description({ description, period }: Props) {
  return (
    <>
      <p className='md:text-xl'>{description}</p>
      <p className='md:text-lg text-base text-gray-600'>
        <time>{period.start}</time> ~ {period.end ? <time>{period.end}</time> : '진행중'}
      </p>
    </>
  );
}
