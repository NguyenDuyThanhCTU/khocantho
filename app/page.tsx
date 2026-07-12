// app/page.tsx

import CoreServices from "@/components/Home/CoreServices";
import GallerySection from "@/components/Home/GallerySection";
import HeroSection from "@/components/Home/HeroSection";
import NewsInsights from "@/components/Home/NewsInsights";
import PopularRoutes from "@/components/Home/PopularRoutes";
import PricingTable from "@/components/Home/PricingTable";
import ShippingCalculator from "@/components/Home/ShippingCalculator";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import WorkProcess from "@/components/Home/WorkProcess";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularRoutes />
      <PricingTable />
      <ShippingCalculator />
      <CoreServices />
      <WhyChooseUs />

      <WorkProcess />
      <GallerySection />
      <Testimonials />
      <NewsInsights />

      {/* Các section khác sẽ được thêm vào đây */}
    </>
  );
}
