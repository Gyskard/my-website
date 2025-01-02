import "@/styles/globals.css";

import FlyonuiScript from "@/scripts/FlyonuiScript";
import Header from "@/components/Header";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="vertical-scrollbar px-5">
        <Header />
        <main className="flex justify-center my-7">
          <div className="max-w-xl w-full">{children}</div>
        </main>
      </body>
      <FlyonuiScript />
      <Script
        src="https://kit.fontawesome.com/85e1ea9dc5.js"
        crossOrigin="anonymous"
      />
    </html>
  );
}
