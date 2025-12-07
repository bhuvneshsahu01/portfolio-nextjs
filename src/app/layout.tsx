import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider, Navbar, Footer } from '@/components/layout';
import { DevelopmentBanner } from '@/components/layout/DevelopmentBanner';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bhuvneshsahu.com'),
  title: {
    default: 'Bhuvnesh Sahu | Data Scientist & AI Engineer',
    template: '%s | Bhuvnesh Sahu',
  },
  description:
    'Data Scientist at Wipro specializing in Agentic AI, Computer Vision, and MLOps. Building production-grade AI systems with Gen-AI, NLP, and Deep Learning.',
  keywords: [
    'Data Scientist',
    'Machine Learning Engineer',
    'AI Engineer',
    'Computer Vision',
    'NLP',
    'Gen-AI',
    'MLOps',
    'Agentic AI',
    'Deep Learning',
    'Python',
    'PyTorch',
    'LangChain',
    'RAG',
  ],
  authors: [{ name: 'Bhuvnesh Sahu' }],
  creator: 'Bhuvnesh Sahu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bhuvneshsahu.com',
    siteName: 'Bhuvnesh Sahu Portfolio',
    title: 'Bhuvnesh Sahu | Data Scientist & AI Engineer',
    description:
      'Data Scientist at Wipro specializing in Agentic AI, Computer Vision, and MLOps.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bhuvnesh Sahu - Data Scientist & AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhuvnesh Sahu | Data Scientist & AI Engineer',
    description:
      'Data Scientist at Wipro specializing in Agentic AI, Computer Vision, and MLOps.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <DevelopmentBanner />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
