import { EmailData } from '@/model/contact';

export async function sendContactEmail(email: EmailData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'applicatioin/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || '메세지 전송에 실패했습니다.');
  }
  return data;
}
