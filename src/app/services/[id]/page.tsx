import { Metadata } from 'next';
import { ServicesClient } from '../../../components/ServicesClient';

export const runtime = 'edge';

export function generateStaticParams() {
  return [
    { id: 'diagnostics' },
    { id: 'brakes' },
    { id: 'engine' },
    { id: 'maintenance' },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  
  const serviceNames: Record<string, string> = {
    diagnostics: 'Check Engine Light & Diagnostics',
    brakes: 'Mobile Brake Repair & Pad Replacement',
    engine: 'Engine Cooling & Belt Replacement',
    maintenance: 'Mobile Oil Changes & Tune-Ups',
  };

  const title = serviceNames[id] || 'Mobile Mechanic Services';
  
  return {
    title: `${title} | Peninsula Mobile Mechanic`,
    description: `Professional, on-site ${title.toLowerCase()} right in your driveway. Transparent pricing and expert service on the Virginia Peninsula.`,
    openGraph: {
      title: `${title} | Peninsula Mobile Mechanic`,
      description: `Professional, on-site ${title.toLowerCase()} right in your driveway. Transparent pricing and expert service on the Virginia Peninsula.`,
      images: [{ url: `/services/${id}.webp`, width: 1200, height: 630 }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // Renders the services grid and immediately opens the correct bottom sheet
  return <ServicesClient initialServiceId={id} />;
}
