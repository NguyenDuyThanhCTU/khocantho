import ContactFormBlock from "@/components/Contact/ContactFormBlock";
import ContactHero from "@/components/Contact/ContactHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên Hệ - An Tâm Express | Gửi Hàng Quốc Tế Từ Miền Tây",
  description:
    "Liên hệ ngay với An Tâm Express để nhận báo giá ưu đãi gửi hàng đi Mỹ, Úc, Canada. Hỗ trợ tư vấn 24/7, pick-up tận nhà miễn phí khu vực Miền Tây.",
  keywords:
    "liên hệ An Tâm Express, gửi hàng đi Mỹ Cần Thơ, gửi hàng đi Úc, báo giá gửi hàng quốc tế",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Các component con đã bọc sẵn Client-side logic */}
      <ContactHero />
      <ContactFormBlock />
    </main>
  );
}
