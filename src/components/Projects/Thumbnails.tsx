'use client';

import { useState } from 'react';
import { LeftIcon, RightIcon } from '../ui/icons/Arrow';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

type Props = {
  images: {
    src: string;
    label: string;
  }[];
};

export default function Thumbnails({ images }: Props) {
  const [step, setStep] = useState(0);
  const maxSteps = images?.length;

  const handleNext = () => {
    if (step === maxSteps - 1) {
      setStep(0);
    } else {
      setStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (step === 0) {
      setStep(maxSteps - 1);
    } else {
      setStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleStepChange = (step: number) => {
    setStep(step);
  };

  return (
    images && (
      <section className='flex justify-between items-center my-4'>
        <Carousel
          className='w-full z-40'
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          selectedItem={step}
          showStatus={false}
          onChange={handleStepChange}
        >
          {images.map((curStep) => (
            <div key={curStep.label} className='flex flex-col w-full'>
              <div className='flex justify-between bg-white px-4 py-1.5 border'>
                <button onClick={handleBack}>
                  <LeftIcon />
                </button>
                <h1 className='text-lg font-semibold'>{curStep.label}</h1>
                <button onClick={handleNext}>
                  <RightIcon />
                </button>
              </div>
              <Image
                className='self-center w-full md:h-[36rem] h-64 object-scale-down'
                src={curStep.src}
                alt={curStep.label}
                width={1600}
                height={900}
              />
            </div>
          ))}
        </Carousel>
      </section>
    )
  );
}
