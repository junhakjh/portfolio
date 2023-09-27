'use client';

import { EmailData } from '@/model/contact';
import { sendContactEmail } from '@/service/contact';
import { useRef, useState } from 'react';
import CheckIcon from './ui/icons/CheckIcon';
import XIcon from './ui/icons/XIcon';

const INPUT_CLASS = 'w-full px-4 py-2 my-2 rounded-lg border border-gray-300 focus:outline-none';

export default function ConatactForm() {
  const fromRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [isSuccess, setIsSuccess] = useState(0);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailData: EmailData = {
      from: fromRef.current?.value ?? '',
      title: titleRef.current?.value ?? '',
      message: messageRef.current?.value ?? '',
    };
    try {
      const result = await sendContactEmail(emailData);
      if (result) {
        setIsSuccess(1);
        resetIsSuccess();
      } else {
        setIsSuccess(-1);
        resetIsSuccess();
      }
    } catch (e) {
      setIsSuccess(-1);
      resetIsSuccess();
    } finally {
      resetIsSuccess();
    }
  };

  const resetIsSuccess = () => {
    setTimeout(() => {
      setIsSuccess(0);
    }, 3000);
  };

  return (
    <div className='w-96 p-6 mx-auto my-12 bg-white shadow-lg rounded-xl'>
      {isSuccess !== 0 && (
        <p className='flex items-center text-base text-gray-600'>
          {isSuccess === 1 ? (
            <>
              <CheckIcon color='green' />
              메세지가 성공적으로 전송되었습니다.
            </>
          ) : (
            <>
              <XIcon />
              메세지 전송에 실패했습니다.
            </>
          )}
        </p>
      )}
      <form className='h-full w-full flex flex-col items-center' onSubmit={(e) => onSubmit(e)}>
        <input className={INPUT_CLASS} type='text' placeholder='From' required ref={fromRef} />
        <input className={INPUT_CLASS} type='text' placeholder='Title' required ref={titleRef} />
        <textarea className={INPUT_CLASS + ' h-96'} placeholder='Message' required ref={messageRef} />
        <button className='w-full py-2 mt-2 bg-primary text-white rounded-lg bg-orange-400' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
}
