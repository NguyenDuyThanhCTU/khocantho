"use client";

import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blogsMockup";

export default function BlogDetailHero({ post }: { post: BlogPost }) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-slate-50">
      {/* Background Decor chìm */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Breadcrumb & Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <Link
            href="/blogs"
            className="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-orange transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Quay lại Tin tức
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-sm font-medium text-brand-orange">
            {post.category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-black text-brand-blue leading-tight mb-8"
        >
          {post.title}
        </motion.h1>

        {/* Meta Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-slate-200"
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">
                  {post.author.name}
                </p>
                <p className="text-xs text-slate-500">{post.author.role}</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-orange" /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-orange" /> {post.readTime}{" "}
                đọc
              </span>
            </div>
          </div>

          <button className="p-3 rounded-full bg-white shadow-sm border border-slate-200 text-slate-400 hover:text-brand-orange hover:border-brand-orange transition-all">
            <Share2 className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
