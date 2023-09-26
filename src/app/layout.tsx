import Header from '@/components/layout/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import RecoilRootContext from '@/context/RecoilRootContext';

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
      <body className={inter.className}>
        <RecoilRootContext>
          <header>
            <Header />
          </header>
          <main>{children}</main>
          <footer></footer>
        </RecoilRootContext>
      </body>
    </html>
  );
}
