import { Metadata } from "next";
import { getAllPosts, getCategories } from "@/lib/blogsMockup";
import BlogListContainer from "@/components/blog/BlogListContainer";
import { BookOpen, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Tin tức & Cẩm nang Logistics | An Tâm Express",
  description:
    "Cập nhật những thông tin mới nhất về dịch vụ chuyển phát nhanh quốc tế, hướng dẫn đóng gói hàng thực phẩm đi Mỹ, Úc, Canada và kiến thức hải quan quan trọng.",
  keywords:
    "tin tức logistics, cẩm nang gửi hàng đi Mỹ, gửi thực phẩm đi Úc, An Tâm Express blog",
};

export default async function BlogsPage() {
  // Fetch dữ liệu trực tiếp tại Server Component
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getCategories(),
  ]);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* --- HERO SECTION (Background Submerged Style) --- */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-[#0A192F]">
        {/* Lớp nền chìm hiện đại */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/images/dots-pattern.svg')] opacity-[0.05] invert" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
          {/* World map outline chìm */}
          <div className="absolute inset-0 opacity-[0.02] bg-[url('/images/world-outline.svg')] bg-center bg-no-repeat scale-125" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 text-brand-orange font-bold text-sm uppercase tracking-wider mb-8 border border-white/10 backdrop-blur-sm">
            <BookOpen className="w-4 h-4" /> Kiến thức & Chia sẻ
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Tin Tức{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">
              Logistics
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
            Cập nhật luật hải quan mới nhất và các mẹo đóng gói giúp hàng hóa từ
            Miền Tây của bạn vươn tầm quốc tế an toàn.
          </p>
        </div>
      </section>

      {/* --- DANH SÁCH BÀI VIẾT (CONTAINER) --- */}
      <section className="relative">
        {/* Shape chìm lấn sân giữa 2 section */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0A192F] to-transparent z-0" />

        <BlogListContainer initialPosts={posts} categories={categories} />
      </section>
    </main>
  );
}
