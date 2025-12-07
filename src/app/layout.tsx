import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider, Navbar, Footer } from '@/components/layout';

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
    default: 'Bhuvnesh Sahu | ML Engineer | Production GenAI & Computer Vision',
    template: '%s | Bhuvnesh Sahu',
  },
  description:
    'Machine Learning Engineer building production AI systems. Shipped 5+ ML systems, reduced support costs 40%, achieved 95% mAP on industrial CV tasks. Specialized in GenAI agents, RAG pipelines, and computer vision.',
  keywords: [
    'Machine Learning Engineer',
    'ML Engineer Portfolio',
    'Production AI Engineer',
    'GenAI Engineer',
    'Computer Vision Engineer',
    'LLM Engineer',
    'Agentic AI',
    'RAG',
    'NLP',
    'Deep Learning',
    'Python',
    'PyTorch',
    'LangChain',
  ],
  authors: [{ name: 'Bhuvnesh Sahu' }],
  creator: 'Bhuvnesh Sahu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bhuvneshsahu.com',
    siteName: 'Bhuvnesh Sahu - ML Engineer Portfolio',
    title: 'Bhuvnesh Sahu | ML Engineer | Production GenAI & Computer Vision',
    description:
      'Machine Learning Engineer building production AI systems. Shipped 5+ ML systems with measurable business impact.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bhuvnesh Sahu - ML Engineer | Production GenAI & Computer Vision',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhuvnesh Sahu | ML Engineer | Production GenAI & Computer Vision',
    description:
      'Machine Learning Engineer building production AI systems with measurable business impact.',
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
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
