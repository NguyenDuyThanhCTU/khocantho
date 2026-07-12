import ContactFormBlock from "@/components/Contact/ContactFormBlock";
import ContactHero from "@/components/Contact/ContactHero";
import GallerySection from "@/components/Home/GallerySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hình ảnh - An Tâm Express | Gửi Hàng Quốc Tế Từ Miền Tây",
  description: "Hình ảnh - An Tâm Express | Gửi Hàng Quốc Tế Từ Miền Tây",
  keywords: "Hình ảnh - An Tâm Express | Gửi Hàng Quốc Tế Từ Miền Tây",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <GallerySection />
    </main>
  );
}
