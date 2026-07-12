"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Calendar, User, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogsMockup";

export default function NewsInsights() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    // Background êm dịu, không dùng màu trắng tinh
    <section className="py-24 bg-gradient-to-b from-slate-50 to-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-wider text-brand-orange uppercase mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5" /> Góc chia sẻ
            </h2>
            <h3 className="text-4xl font-extrabold text-brand-blue leading-tight mb-4">
              Tin tức & Cẩm nang gửi hàng
            </h3>
            <p className="text-lg text-slate-600">
              Cập nhật những thay đổi mới nhất về luật hải quan quốc tế và mẹo
              đóng gói hàng hóa giúp bạn tiết kiệm tối đa chi phí.
            </p>
          </div>
          <Link
            href={`/blogs`}
            className="flex-shrink-0 flex items-center gap-2 text-brand-blue font-bold hover:text-brand-orange transition-colors group px-6 py-3 bg-white rounded-full shadow-sm border border-slate-200 hover:border-brand-orange/30"
          >
            Xem tất cả bài viết
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bố cục lưới bài viết (Bento-style lai Tạp chí) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {BLOG_POSTS.map((article, index) => (
            <motion.div
              key={article.id}
              variants={cardVariants}
              className={cn(
                "group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/40 border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/10",
                article.isFeatured ? "lg:col-span-2 lg:flex-row" : "col-span-1",
              )}
            >
              {/* Image Container */}
              <div
                className={cn(
                  "relative overflow-hidden",
                  article.isFeatured
                    ? "lg:w-1/2 min-h-[250px] lg:min-h-full"
                    : "w-full h-[240px]",
                )}
              >
                {/* Image Placeholder - Dùng next/image thực tế ở đây */}
                <div
                  className={cn(
                    "absolute inset-0 transition-transform duration-700 group-hover:scale-105",
                    article.coverImage,
                  )}
                >
                  <img
                    src={article.coverImage}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent lg:bg-gradient-to-r" />
                </div>

                {/* Category Badge nổi trên ảnh */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-white/90 backdrop-blur-sm text-brand-blue text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-sm">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div
                className={cn(
                  "flex flex-col flex-1 p-8",
                  article.isFeatured ? "lg:w-1/2 justify-center" : "",
                )}
              >
                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-brand-orange" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-brand-orange" />

                    {article.author.name}
                  </span>
                </div>

                {/* Title */}
                <h4
                  className={cn(
                    "font-bold text-slate-800 mb-4 group-hover:text-brand-orange transition-colors line-clamp-2",
                    article.isFeatured ? "text-2xl md:text-3xl" : "text-xl",
                  )}
                >
                  <Link
                    href={`/${article.slug}`}
                    className="before:absolute before:inset-0"
                  >
                    {article.title}
                  </Link>
                </h4>

                {/* Excerpt */}
                <p className="text-slate-600 leading-relaxed mb-8 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read more link */}
                <Link
                  href={`/${article.slug}`}
                  className="mt-auto flex items-center gap-2 text-brand-blue font-bold text-sm uppercase tracking-wider group-hover:text-brand-orange transition-colors"
                >
                  Đọc tiếp{" "}
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
