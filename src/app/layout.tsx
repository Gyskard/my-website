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
      <head></head>
      <body>
        <Header />
        {children}
      </body>
      <FlyonuiScript />
      <Script src="https://kit.fontawesome.com/85e1ea9dc5.js" crossOrigin="anonymous" />
    </html>
  );
}
