// Metadata for the root page (/)
export const metadata = {
  title: "Falx Lata | HR Solutions Provider",
  description: "Falx Lata is a fully fledged HR solution provider specialized in Headhunting, Recruitment, HR functions setup, and Consultation.",
};

// Import the client-side wrapper component
import HomePageClient from '@/app/components/HomePageClient/HomePageClient';

// Main Page Component for the route "/"
export default function Page() {
  return <HomePageClient />;
}