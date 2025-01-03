import "@/styles/globals.css";

import FlyonuiScript from "@/scripts/FlyonuiScript";
import Header from "@/components/Header";

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
      <body className="vertical-scrollbar">
        <Header />
        <main className="flex justify-center mt-10 mb-5 px-5">
          <div className="max-w-xl w-full">{children}</div>
        </main>
      </body>
      <FlyonuiScript />
    </html>
  );
}
