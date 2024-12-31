import '@/styles/globals.css';

import FlyonuiScript from '@/scripts/FlyonuiScript';
import Header from "@/components/Header";
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="vertical-scrollbar">
        <Header />
        <div className="flex justify-center my-7">
          <div className="max-w-xl w-full">
            {children}
          </div>
        </div>
      </body>
      <FlyonuiScript />
      <Script src="https://kit.fontawesome.com/85e1ea9dc5.js" crossOrigin="anonymous" />
    </html>
  );
}
