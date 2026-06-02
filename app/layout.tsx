import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Projeto login",
  description: "criando meu primeiro projeto com backend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" >{children}</body>
    </html>
  );
}
