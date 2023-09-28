type Props = {
  children: React.ReactNode;
};

export default function CategoryTitle({ children }: Props) {
  return (
    <h1 className='md:text-7xl text-5xl font-semibold text-center relative after:content-[""] after:block after:w-24 after:border-b-8 after:mx-auto after:mt-6 after:border-orange-600'>
      {children}
    </h1>
  );
}
