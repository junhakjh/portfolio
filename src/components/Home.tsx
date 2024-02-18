import FadeReveal from './reveal/FadeReveal';
import DownIcon from './ui/icons/DownIcon';

const ABOUT_ME = 'md:text-6xl text-4xl font-semibold';

type Props = {
  homeRef: React.RefObject<HTMLDivElement>;
};

export default function Home({ homeRef }: Props) {
  return (
    <div
      className='h-screen bg-black/40 flex flex-col justify-center items-center text-white md:px-0 px-4'
      ref={homeRef}
    >
      <section className='h-96 flex flex-col justify-between items-center'>
        <FadeReveal>
          <p className={ABOUT_ME}>부지런히 성장하는</p>
          <p className={ABOUT_ME}>
            <b className="relative md:text-8xl text-6xl after:content-[''] after:inline-block after:w-8 after:border-b-8 after:absolute after:bottom-2 after:right-0 after:border-orange-600">
              김준하
            </b>
            입니다.
          </p>
          <p className='text-center md:text-3xl text-2xl'>
            주니어 프론트엔드 개발자입니다.
            <br />
            새로운 것을 배우고 적용하는 것을 좋아합니다.
            <br />
            맡은 일이 있다면 기한 내에 무슨 일이 있어도 완수합니다.
          </p>
          <p className='text-4xl'>
            <DownIcon />
          </p>
        </FadeReveal>
      </section>
    </div>
  );
}
