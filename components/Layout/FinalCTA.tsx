// src/components/home/FinalCTA.tsx
"use client";

import { motion, Variants } from "framer-motion";
import {
  PhoneCall,
  Calculator,
  PlaneTakeoff,
  PackageSearch,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import QuotePopup from "../ui/QuotePopup";
import { useState } from "react";

export default function FinalCTA() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    // Sử dụng màu nền Brand Orange năng lượng cao để "chốt" hành động trước khi xuống Footer tối
    <>
      <section className="py-24 bg-gradient-to-br from-brand-orange via-orange-500 to-yellow-500 overflow-hidden relative">
        {/* Các yếu tố trang trí bay lơ lửng cho nền hiện đại */}
        <div className="absolute inset-0 z-0 opacity-20">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 right-10 w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-50"
          />
          {/* Subtle Icon Pattern */}
          <div className="absolute inset-0 bg-[url('/images/shipping-icons-pattern.svg')] opacity-10" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold text-sm mb-6 shadow-inner border border-white/20"
            >
              <PlaneTakeoff className="w-5 h-5" />
              <span>Sẵn sàng kết nối Miền Tây với thế giới?</span>
            </motion.div>

            {/* Title khổng lồ, ấn tượng */}
            <motion.h2
              variants={fadeUp}
              className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter mb-8 shadow-text"
            >
              Nhận báo giá ngay <br />& Miễn phí lấy hàng
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-xl lg:text-2xl text-orange-50/90 max-w-3xl mx-auto leading-relaxed mb-16 font-medium"
            >
              Đừng ngần ngại liên hệ. Đội ngũ An Tâm Express luôn túc trực 24/7
              để tư vấn phương án vận chuyển quốc tế tối ưu và tiết kiệm nhất
              cho bạn.
            </motion.p>

            {/* Các nút Call-To-Action chính */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                href="/#calculator"
                className="w-full sm:w-auto group flex items-center justify-center gap-3 px-12 py-5 bg-white text-brand-orange rounded-full font-extrabold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-950/20 active:scale-95 active:shadow-lg"
              >
                <Calculator className="w-6 h-6 transform group-hover:rotate-12 transition-transform" />
                Tính cước ngay
              </Link>

              <button
                onClick={() => setIsPopupOpen(true)}
                className="w-full sm:w-auto group flex items-center justify-center gap-3 px-12 py-5 bg-brand-blue/30 backdrop-blur-md text-white rounded-full font-bold text-lg border-2 border-white/30 transition-all duration-300 hover:bg-brand-blue/50 hover:border-white/60"
              >
                <PlaneTakeoff className="w-6 h-6 animate-pulse" />
                Nhận báo giá
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <QuotePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
