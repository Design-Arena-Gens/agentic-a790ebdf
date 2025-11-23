import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Salut | Next.js on Vercel',
  description: 'Une simple application Next.js d?ploy?e sur Vercel.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

