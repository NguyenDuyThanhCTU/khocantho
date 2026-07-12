import { Metadata } from "next";
import { Scale } from "lucide-react";
import RegulationsContent from "@/components/StaticPages/RegulationsContent";

export const metadata: Metadata = {
  title: "Quy Định & Điều Khoản Gửi Hàng Quốc Tế | An Tâm Express",
  description:
    "Trang thông tin minh bạch về quy định hàng hóa cấm bay, chính sách đền bù bảo hiểm, quy định tính cước thể tích tại An Tâm Express.",
  keywords:
    "quy định gửi hàng đi mỹ, hàng cấm bay, chính sách đền bù gửi hàng quốc tế, cách tính cước thể tích",
};

export default function RegulationsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-48 bg-[#0A192F] overflow-hidden">
        {/* Background Network Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/images/dots-pattern.svg')] opacity-[0.05] invert" />
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-orange/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 text-brand-orange font-bold text-sm uppercase tracking-wider mb-6 border border-white/10 backdrop-blur-md">
            <Scale className="w-4 h-4" /> Minh bạch & Đảm bảo
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Quy định chung <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">
              Vận tải Quốc tế
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Vui lòng đọc kỹ các điều khoản về hàng hóa, cách tính cước và chính
            sách đền bù để đảm bảo quyền lợi tốt nhất cho lô hàng của bạn.
          </p>
        </div>
      </section>

      {/* --- TABS CONTENT --- */}
      <RegulationsContent />
    </main>
  );
}
