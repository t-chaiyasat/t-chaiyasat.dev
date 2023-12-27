/* Meta Data | Search Engine Optimization (S.E.O) */
import type { Metadata } from 'next';
/* Import Global Sass StyleSheet */
import '@/styles/globals.scss';
/* UI | Optimized Fonts */
import { roboto, nunito } from './fonts';
import Navigation from './ui/navigation';

/* MetaData Tags | Search Engine Optimization */
export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: 'T Chaiyasat',
    template: '%s | T Chaiyasat',
  },
  description: 'Developer, Artist, & Creator.',
  openGraph: {
    title: 'T Chaiyasat',
    description: 'Developer, Artist, & Creator.',
    url: 'https://localhost:3000',
    siteName: 'T Chaiyasat',
    locale: 'en_UK',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${nunito.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
