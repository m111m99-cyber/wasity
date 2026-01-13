import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "وسيطي | Wasity",
  description: "طبقة ثقة تربط المشتري والبائع وشركة التوصيل وإدارة النزاعات",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="h-full">
      <body className="min-h-full bg-zinc-950 text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}
