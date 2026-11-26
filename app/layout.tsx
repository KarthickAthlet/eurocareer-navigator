import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'EuroCareer Navigator',
  description: 'Explore career opportunities across Europe.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>
          <p>EuroCareer Navigator · Career planning for Europe</p>
        </footer>
      </body>
    </html>
  );
}
