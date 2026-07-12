"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  DollarSign,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { ServiceRoute } from "@/lib/routesMockup";
import QuotePopup from "../ui/QuotePopup";
import { useState } from "react";

export default function ServiceHero({ route }: { route: ServiceRoute }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0A192F]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={route.coverImage}
            alt={route.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <Link
              href="/bang-gia"
              className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-brand-orange transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Bảng giá
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-sm font-medium text-brand-orange">
              {route.region}
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-sm font-medium text-slate-300">
              {route.country}
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Cột trái: Thông tin chính */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-bold text-sm uppercase tracking-wider mb-6 border border-white/20 backdrop-blur-md">
                <MapPin className="w-4 h-4 text-brand-orange" /> Tuyến bay trọng
                điểm
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                {route.title}
              </h1>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                {route.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {route.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-2 text-sm font-medium text-white/90 bg-white/5 px-4 py-2 rounded-full border border-white/10"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Cột phải: Box Báo Giá Nhanh */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:justify-self-end w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 rounded-bl-full blur-2xl" />

              <h3 className="text-xl font-bold text-white mb-6">
                Thông tin chuyến bay
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Thời gian toàn trình
                  </p>
                  <p className="text-2xl font-black text-white">
                    {route.estimatedTime}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-slate-400 text-sm font-medium mb-1 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" /> Cước phí tham khảo (Chỉ
                    từ)
                  </p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black text-brand-orange">
                      {route.basePrice}
                    </span>
                    <span className="text-slate-400 font-medium pb-1">
                      vnđ/kg
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsPopupOpen(true)}
                className="mt-8 flex items-center justify-center w-full py-4 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-orange/20"
              >
                Nhận tư vấn lô hàng này
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      <QuotePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
