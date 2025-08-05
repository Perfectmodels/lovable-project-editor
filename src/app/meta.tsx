import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Army Winner Digital Studio - Agence de Communication Digitale',
  description: 'Votre partenaire créatif pour des stratégies de communication digitale efficaces et innovantes.',
  keywords: 'agence communication digitale, marketing digital, stratégie web, création de contenu, design graphique',
  
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://armywinnerdigitalstudio.com',
    title: 'Army Winner Digital Studio',
    description: 'Votre agence de communication digitale spécialisée dans la création de contenu engageant et la stratégie web.',
    siteName: 'Army Winner Digital Studio',
    images: [
      {
        url: '/lovable-uploads/17ffb9c1-8fb1-4900-bc87-6d52e884371c.png',
        width: 1200,
        height: 630,
        alt: 'Logo Army Winner Digital Studio',
        type: 'image/png',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Army Winner Digital Studio',
    description: 'Votre agence de communication digitale spécialisée dans la création de contenu engageant et la stratégie web.',
    images: [
      {
        url: '/lovable-uploads/17ffb9c1-8fb1-4900-bc87-6d52e884371c.png',
        width: 1200,
        height: 630,
        alt: 'Logo Army Winner Digital Studio',
        type: 'image/png',
      },
    ],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE',
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
  },
};
