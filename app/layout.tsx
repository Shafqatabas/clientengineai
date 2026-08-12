import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ClientEngine AI | Find High-Paying Clients On Autopilot',
  description: 'AI-Powered Client Acquisition Platform for Agencies and B2B Businesses.',
  icons: { icon: '/logo.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
        />
      </head>
      <body className={`${inter.className} bg-[#030712] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black`}>
        {children}
      </body>
    </html>
  );
}