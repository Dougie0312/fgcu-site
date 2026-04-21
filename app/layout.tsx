import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EaglePreneurs — FGCU School of Entrepreneurship',
  description:
    'Launch real ventures, develop your entrepreneurial mindset, and connect with founders and mentors at FGCU',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%23002D72"/><text x="50" y="60" font-size="50" font-weight="bold" fill="white" text-anchor="middle">EP</text></svg>',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
