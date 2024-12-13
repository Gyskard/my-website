import './globals.css';

import FlyonuiScript from './components/FlyonuiScript';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className="max-w-screen-sm mx-auto">
        {children}
      </body>
      <FlyonuiScript />
    </html>
  );
}
