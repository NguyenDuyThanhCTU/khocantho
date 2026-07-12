"use client";

import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Search,
  MapPin,
  ShieldCheck,
  Clock,
  Globe2,
} from "lucide-react";
import { useState } from "react";
import QuotePopup from "../ui/QuotePopup";
import Link from "next/link";

// Các biến hiệu ứng Framer Motion
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function HeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden bg-brand-navy">
        {/* Background Elements - Tạo chiều sâu */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-orange rounded-full blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] opacity-20"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Cột Trái: Thông điệp (Copywriting) */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="text-white space-y-8"
            >
              <motion.div
                variants={fadeUpItem}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-medium"
              >
                <ShieldCheck className="w-4 h-4 text-brand-orange" />
                <span>Đối tác logistics tin cậy tại Miền Tây</span>
              </motion.div>

              <motion.h1
                variants={fadeUpItem}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
              >
                Mang Miền Tây <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">
                  Vươn Tầm Thế Giới
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUpItem}
                className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed"
              >
                Giải pháp vận chuyển quốc tế tốc độ cao từ Cần Thơ và các tỉnh
                ĐBSCL đi{" "}
                <strong className="text-white">
                  Mỹ, Úc, Canada, Châu Á, Châu Âu
                </strong>
                . Bao thuế trọn gói, thủ tục siêu tốc.
              </motion.p>

              <motion.div
                variants={fadeUpItem}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e66000] hover:scale-105 transition-all shadow-glow"
                >
                  Nhận Báo Giá Ngay <ArrowRight className="w-5 h-5" />
                </button>
                <Link
                  href="/bang-gia"
                  className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  Xem Bảng Giá
                </Link>
              </motion.div>

              {/* Micro-stats */}
              <motion.div
                variants={fadeUpItem}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
              >
                <div>
                  <div className="text-3xl font-bold text-white mb-1">3-5</div>
                  <div className="text-sm text-slate-400">Ngày đi Mỹ</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">200+</div>
                  <div className="text-sm text-slate-400">Quốc gia đích</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">10k+</div>
                  <div className="text-sm text-slate-400">Kiện hàng/tháng</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Cột Phải: Interactive Glassmorphism Widget */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              {/* Vòng tròn trang trí */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute w-[400px] h-[400px] border border-white/10 rounded-full border-dashed"
              ></motion.div>

              {/* Tracking Card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <Globe2 className="w-6 h-6 text-brand-orange" /> Tra Cứu Vận
                    Đơn
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Kiểm tra lộ trình hàng hóa của bạn theo thời gian thực.
                  </p>
                </div>

                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Nhập mã vận đơn (VD: ATE123456...)"
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-orange p-2 rounded-lg hover:bg-[#e66000] transition-colors">
                    <Search className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Tuyến đường phổ biến mini */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                    Tuyến Nổi Bật
                  </h4>

                  <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-brand-orange" />
                      <span className="text-white font-medium">
                        Cần Thơ{" "}
                        <ArrowRight className="w-4 h-4 inline mx-1 text-slate-400" />{" "}
                        California, US
                      </span>
                    </div>
                    <Clock className="w-4 h-4 text-slate-400" />
                  </div>

                  <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-brand-orange" />
                      <span className="text-white font-medium">
                        Miền Tây{" "}
                        <ArrowRight className="w-4 h-4 inline mx-1 text-slate-400" />{" "}
                        Sydney, AUS
                      </span>
                    </div>
                    <Clock className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <QuotePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
