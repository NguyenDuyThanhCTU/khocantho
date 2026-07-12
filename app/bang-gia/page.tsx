import { Metadata } from "next";
import { Calculator, PackageOpen, ShieldCheck } from "lucide-react";
import Link from "next/link";
import PricingContainer from "@/components/Pricing/PricingContainer";
import Calculatecharges from "@/components/Pricing/Calculatecharges";
import ShippingCalculator from "@/components/Home/ShippingCalculator";

export const metadata: Metadata = {
  title: "Bảng Giá Gửi Hàng Quốc Tế | An Tâm Express",
  description:
    "Cập nhật bảng giá gửi hàng đi Mỹ, Úc, Canada, Đài Loan, Châu Âu mới nhất từ Miền Tây. Cam kết bao thuế, không phát sinh chi phí ẩn.",
  keywords:
    "bảng giá gửi hàng đi mỹ, cước phí gửi hàng úc, giá gửi hàng đài loan, gửi hàng quốc tế rẻ",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-48 bg-[#0A192F] overflow-hidden">
        {/* Background Network Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/images/dots-pattern.svg')] opacity-[0.05] invert" />
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-orange/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 text-brand-orange font-bold text-sm uppercase tracking-wider mb-6 border border-white/10 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4" /> Cam kết không phí ẩn
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Cước phí tối ưu, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">
              Minh bạch mọi tuyến bay
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Chúng tôi thiết kế bảng giá chuyên biệt cho bà con Miền Tây. Cam kết
            xử lý trọn gói thủ tục FDA, MSDS và bao thuế nhập khẩu cho các tuyến
            trọng điểm.
          </p>
        </div>
      </section>

      {/* --- PRICING COMPONENT --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <PricingContainer />
      </section>
      <ShippingCalculator />
      {/* --- CÁCH TÍNH CƯỚC & LƯU Ý (SEO CONTENT) --- */}
      <Calculatecharges />
    </main>
  );
}
