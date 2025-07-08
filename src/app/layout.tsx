import './globals.css';

export const metadata = {
  title: 'Maguette Thiao - Portfolio',
  description: 'Portfolio de développeuse web',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}