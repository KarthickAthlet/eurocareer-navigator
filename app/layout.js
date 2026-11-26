export const metadata = {
  title: 'EuroCareer Navigator',
  description: 'Explore career opportunities across Europe.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
