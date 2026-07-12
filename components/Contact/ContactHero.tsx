"use client";

import { motion, Variants } from "framer-motion";
import { Globe2 } from "lucide-react";

export default function ContactHero() {
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
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <section className="relative pt-32 pb-48 bg-[#0A192F] overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/dots-pattern.svg')] opacity-[0.05] invert" />
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 text-brand-orange font-bold text-sm uppercase tracking-wider mb-6 border border-white/10 backdrop-blur-md"
          >
            <Globe2 className="w-4 h-4" /> Kết nối không khoảng cách
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Chúng tôi luôn sẵn sàng <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">
              Lắng nghe & Hỗ trợ
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate-300">
            Bạn cần gửi một kiện hàng gấp đi Mỹ? Hay cần tư vấn thủ tục nhập
            khẩu vào Úc? Đội ngũ chuyên gia của An Tâm Express túc trực 24/7 để
            giải đáp mọi thắc mắc của bạn.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
