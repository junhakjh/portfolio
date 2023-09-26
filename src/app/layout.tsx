import Header from '@/components/layout/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import RecoilRootContext from '@/context/RecoilRootContext';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Junha's Portfolio",
  description: "FE Developer's Portfolio Page",
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className + ' flex flex-col w-full'}>
        <RecoilRootContext>
          <header>
            <Header />
          </header>
          <main className='grow'>{children}</main>
          <footer>
            <Footer />
          </footer>
        </RecoilRootContext>
      </body>
    </html>
  );
}
