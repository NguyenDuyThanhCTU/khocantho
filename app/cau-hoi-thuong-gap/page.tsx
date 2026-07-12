import { Metadata } from "next";
import { MessageSquare } from "lucide-react";
import FAQContainer from "@/components/StaticPages/FAQContainer";

export const metadata: Metadata = {
  title: "Câu Hỏi Thường Gặp (FAQ) | An Tâm Express",
  description:
    "Giải đáp mọi thắc mắc về dịch vụ gửi hàng đi Mỹ, Úc, Canada: Cách tính cước thể tích, giấy phép FDA, thủ tục hải quan, thời gian bay và đóng gói.",
  keywords:
    "câu hỏi gửi hàng đi mỹ, cách tính cước hàng không, FDA là gì, MSDS, An Tâm Express FAQ",
};

export default function FAQPage() {
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
            <MessageSquare className="w-4 h-4" /> Bách khoa toàn thư
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Giải đáp thắc mắc cùng <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">
              An Tâm Express
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Tìm hiểu mọi thông tin về thủ tục hải quan, cách tính cước phí và
            quy chuẩn đóng gói để kiện hàng của bạn cất cánh an toàn nhất.
          </p>
        </div>
      </section>

      {/* --- INTERACTIVE FAQ CONTAINER --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <FAQContainer />
      </section>
    </main>
  );
}
