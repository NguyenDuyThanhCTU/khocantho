"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Calculator,
  Plane,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import QuotePopup from "../ui/QuotePopup";

// Phân loại dữ liệu
const REGIONS = [
  { id: "popular", label: "Châu Mỹ & Úc" },
  { id: "asia", label: "Châu Á" },
  { id: "europe", label: "Châu Âu" },
];

const PRICING_DATA: Record<string, any[]> = {
  popular: [
    {
      country: "Mỹ (USA)",
      price: "190.000",
      time: "5-7 ngày",
      features: ["Bao thuế FDA", "Bay thẳng", "Giao tận nhà"],
    },
    {
      country: "Úc (AUS)",
      price: "150.000",
      time: "6-10 ngày",
      features: ["Phí siêu tiết kiệm", "Bao thuế", "Giao tận nhà"],
    },
    {
      country: "Canada (CAN)",
      price: "190.000",
      time: "5-7 ngày",
      features: ["Khai báo điện tử", "Bay thẳng", "Giao tận nhà"],
    },
  ],
  asia: [
    {
      country: "Đài Loan - Hàn Quốc",
      price: "120.000",
      time: "4-6 ngày",
      features: ["Chuyến bay mỗi ngày", "Thông quan siêu tốc"],
    },
    {
      country: "Nhật Bản (JPN)",
      price: "160.000",
      time: "6-8 ngày",
      features: ["Hàng khó bao thuế", "Giao tận nhà"],
    },
    {
      country: "Trung Quốc (CHN)",
      price: "190.000",
      time: "8-10 ngày",
      features: ["Đường bộ & Hàng không", "Door to Door"],
    },
    {
      country: "Malaysia (MYS)",
      price: "150.000",
      time: "4-6 ngày",
      features: ["Bay thẳng", "Giá sỉ cực tốt"],
    },
    {
      country: "Thái Lan (THA)",
      price: "170.000",
      time: "6-8 ngày",
      features: ["Bay thẳng hàng ngày", "Không giới hạn KG"],
    },
  ],
  europe: [
    {
      country: "Anh (UK)",
      price: "320.000",
      time: "10-15 ngày",
      features: ["Bao thuế nhập khẩu", "Xử lý MSDS"],
    },
    {
      country: "Đức (GER)",
      price: "320.000",
      time: "10-15 ngày",
      features: ["Cửa ngõ EU", "Thông quan nhanh"],
    },
    {
      country: "Pháp (FRA)",
      price: "320.000",
      time: "10-15 ngày",
      features: ["Giao tận nhà", "Hỗ trợ chứng từ"],
    },
  ],
};

export default function PricingTable() {
  const [activeRegion, setActiveRegion] = useState(REGIONS[0].id);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <>
      <section className="py-24 bg-[#0A192F] relative overflow-hidden">
        {/* --- BACKGROUND MỚI: DATA STREAM & GRID --- */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Lớp lưới tọa độ (Cyber Grid) */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              backgroundPosition: "center center",
            }}
          />

          {/* Lớp sọc quét radar mờ (Radar sweep effect) */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "conic-gradient(from 90deg at 50% 50%, rgba(10, 37, 64, 0) 0%, rgba(249, 115, 22, 0.1) 50%, rgba(10, 37, 64, 0) 100%)",
            }}
          />

          {/* Các khối Gradient Glow tạo điểm nhấn màu sắc */}
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-orange/15 rounded-full blur-[150px] mix-blend-screen" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen" />

          {/* Gradient Mask mờ dần ở mép trên và mép dưới để chuyển section mượt hơn */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-transparent to-[#0A192F] opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* --- HEADER --- */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 text-brand-orange font-bold text-sm uppercase tracking-wider mb-6 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(249,115,22,0.2)]"
            >
              <DollarSign className="w-4 h-4" /> Bảng giá tham khảo
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6"
            >
              Cước phí tối ưu cho Miền Tây
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-300"
            >
              Giá cước cạnh tranh nhất thị trường, bao thuế trọn gói. Mức giá
              dưới đây là giá tham khảo (Chỉ từ) áp dụng cho các mốc KG lớn.
            </motion.p>
          </div>

          {/* --- INTERACTIVE TABS --- */}
          <div className="flex justify-center mb-12 relative z-20">
            <div className="inline-flex p-1.5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
              {/* Vệt sáng chạy trên border của thanh Tab */}
              <div className="absolute inset-0 w-full h-full border border-transparent rounded-2xl pointer-events-none [background:linear-gradient(90deg,transparent_0%,rgba(249,115,22,0.5)_50%,transparent_100%)_border-box] [mask-composite:exclude] [mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" />

              {REGIONS.map((region) => {
                const isActive = activeRegion === region.id;
                return (
                  <button
                    key={region.id}
                    onClick={() => setActiveRegion(region.id)}
                    className={cn(
                      "relative px-6 md:px-10 py-3 rounded-xl text-sm md:text-base font-bold transition-all duration-300",
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white hover:bg-white/5",
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="pricingTabBg"
                        className="absolute inset-0 bg-gradient-to-r from-brand-orange to-orange-500 rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] z-0"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{region.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* --- PRICING GRID --- */}
          <div className="min-h-[400px] relative z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRegion}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {PRICING_DATA[activeRegion].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="group relative bg-[#0D2342]/80 backdrop-blur-xl border border-white/5 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-brand-orange/40 shadow-xl overflow-hidden"
                  >
                    {/* Gradient phủ nền Card khi hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Tuyến đường & Tốc độ */}
                    <div className="relative z-10 flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">
                          {item.country}
                        </h4>
                        <div className="inline-flex items-center gap-1.5 text-sm text-brand-orange font-bold bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20 shadow-inner">
                          <Plane className="w-4 h-4" /> {item.time}
                        </div>
                      </div>
                    </div>

                    {/* Giá cước */}
                    <div className="relative z-10 mb-8 flex items-end gap-2">
                      <span className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-wide">
                        Chỉ từ
                      </span>
                      <span className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        {item.price}
                      </span>
                      <span className="text-slate-400 font-medium mb-1.5 border-b border-slate-600">
                        vnđ/kg
                      </span>
                    </div>

                    {/* Phân cách */}
                    <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-6 relative z-10" />

                    {/* Tính năng / Cam kết */}
                    <ul className="relative z-10 space-y-4 mb-8">
                      {item.features.map((feature: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-slate-300 font-medium text-sm"
                        >
                          <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Nút Call to Action */}
                    <button
                      onClick={() => setIsPopupOpen(true)}
                      className="relative z-10 w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 group-hover:bg-brand-orange group-hover:border-brand-orange group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                    >
                      Nhận báo giá ngay{" "}
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* --- FOOTER DISCLAIMER --- */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center relative z-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#0D2342]/80 backdrop-blur-md border border-white/5 text-slate-400 text-sm shadow-xl">
              <Calculator className="w-5 h-5 text-brand-orange animate-pulse" />
              <p>
                Giá cước thay đổi theo từng mức trọng lượng (21kg, 45kg,
                100kg...). Vui lòng liên hệ Hotline để có giá chính xác nhất hôm
                nay.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center text-center">
          <p className="text-brand-600 text-white font-black uppercase tracking-widest text-sm mb-4">
            Tra cứu giá Online ngay
          </p>
          <motion.a
            href="#calculator"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-14 h-14 rounded-full bg-white shadow-lg border border-brand-100 text-brand-600 flex items-center justify-center hover:bg-brand-50 transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.a>
        </div>
      </section>
      <QuotePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
