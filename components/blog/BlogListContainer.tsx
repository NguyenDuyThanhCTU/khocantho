"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  ArrowRight,
  Calendar,
  User,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blogsMockup";
import { cn } from "@/lib/utils";

interface BlogListContainerProps {
  initialPosts: BlogPost[];
  categories: string[];
}

export default function BlogListContainer({
  initialPosts,
  categories,
}: BlogListContainerProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  // Logic lọc bài viết
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "Tất cả" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, initialPosts]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
      {/* --- THANH CÔNG CỤ (SEARCH & FILTER) --- */}
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-16 -mt-8">
        {/* Search Bar */}
        <div className="relative w-full lg:max-w-md group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-orange transition-colors" />
          <input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all font-medium"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
          <Filter className="w-5 h-5 text-slate-400 mr-2 shrink-0 hidden md:block" />
          {["Tất cả", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all border",
                selectedCategory === cat
                  ? "bg-brand-blue text-white border-brand-blue shadow-lg"
                  : "bg-white text-slate-600 border-slate-200 hover:border-brand-orange hover:text-brand-orange",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- DANH SÁCH BÀI VIẾT (GRID) --- */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredPosts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <div className="text-slate-400 mb-4 italic">
                Không tìm thấy bài viết nào phù hợp...
              </div>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Tất cả");
                }}
                className="text-brand-orange font-bold hover:underline"
              >
                Xóa tất cả bộ lọc
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Sub-component: BlogCard với hiệu ứng Hover chuyên nghiệp
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6">
          <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-brand-blue shadow-sm">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-brand-orange" /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-orange" /> {post.readTime}
          </span>
        </div>

        <h4 className="text-xl font-extrabold text-brand-blue mb-4 group-hover:text-brand-orange transition-colors line-clamp-2 leading-snug">
          <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
        </h4>

        <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer Card */}
        <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden ring-2 ring-white">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-bold text-slate-700">
              {post.author.name}
            </span>
          </div>
          <Link
            href={`/blogs/${post.slug}`}
            className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-brand-blue group-hover:bg-brand-orange group-hover:text-white transition-all"
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
