import { Metadata } from 'next';
import App from '../../page';

export const runtime = 'edge';

export function generateStaticParams() {
  return [
    { city: 'hampton' },
    { city: 'newport-news' },
    { city: 'williamsburg' },
    { city: 'yorktown' },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  
  // Format city name from "san-mateo" to "San Mateo"
  const formattedCity = city
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `Mobile Mechanic in ${formattedCity} | Peninsula Mechanic`,
    description: `Expert mobile auto repair serving ${formattedCity}. We bring the repair shop to your driveway. Brakes, diagnostics, and maintenance.`,
    openGraph: {
      title: `Mobile Mechanic in ${formattedCity} | Peninsula Mechanic`,
      description: `Expert mobile auto repair serving ${formattedCity}. We bring the repair shop to your driveway. Brakes, diagnostics, and maintenance.`,
      url: `https://peninsulamechanic.com/locations/${params.city}`,
    }
  };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  // For locations, we just render the main homepage, but Google sees the highly targeted metadata above.
  return <App />;
}
