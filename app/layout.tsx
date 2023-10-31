import "@/app/ui/global.css";
import { Analytics } from "@vercel/analytics/react";

import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children} <Analytics />{" "}
      </body>
    </html>
  );
}
