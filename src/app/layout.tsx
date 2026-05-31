import type { Metadata } from 'next';
import '../index.css';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: 'Peninsula Mobile Mechanic',
  description: 'Your trusted mobile mechanic in the Peninsula area. We come directly to you for mobile auto repair, brake pad replacement, check engine light diagnostics, alternator replacement, and routine maintenance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Peninsula Mobile Mechanic',
    image: 'https://peninsulamechanic.com/hero.webp',
    description: 'Your trusted mobile mechanic in the Peninsula area. We come to you for brakes, diagnostics, maintenance, and more.',
    url: 'https://peninsulamechanic.com',
    telephone: '+1-641-840-2842',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 37.5629,
        longitude: -122.3255
      },
      geoRadius: 40000
    },
    priceRange: '$$'
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
