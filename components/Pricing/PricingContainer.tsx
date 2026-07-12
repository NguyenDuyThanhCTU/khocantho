"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, CheckCircle2, ArrowRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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

export default function PricingContainer() {
  const [activeRegion, setActiveRegion] = useState(REGIONS[0].id);

  return (
    <div className="relative z-20 -mt-20">
      {/* Tabs Navigation */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1.5 bg-[#0D2342]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
          {REGIONS.map((region) => {
            const isActive = activeRegion === region.id;
            return (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region.id)}
                className={cn(
                  "relative px-6 md:px-10 py-3 rounded-xl text-sm md:text-base font-bold transition-all duration-300",
                  isActive ? "text-white" : "text-slate-400 hover:text-white",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="pricingPageTab"
                    className="absolute inset-0 bg-brand-orange rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{region.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRegion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PRICING_DATA[activeRegion].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-brand-orange/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Card Header (Dark Mode Theme) */}
                <div className="bg-[#0A192F] p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-bl-full pointer-events-none" />

                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <h4 className="text-2xl font-black text-white">
                      {item.country}
                    </h4>
                    <div className="inline-flex items-center gap-1.5 text-xs text-brand-orange font-bold bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20">
                      <Plane className="w-3.5 h-3.5" /> {item.time}
                    </div>
                  </div>

                  <div className="relative z-10 flex items-end gap-2 mt-4">
                    <span className="text-slate-400 text-sm font-medium mb-2">
                      Chỉ từ
                    </span>
                    <span className="text-4xl font-black text-brand-orange">
                      {item.price}
                    </span>
                    <span className="text-slate-400 font-medium mb-1">
                      vnđ/kg
                    </span>
                  </div>
                </div>

                {/* Card Body (Light Mode) */}
                <div className="p-8 flex-1 flex flex-col">
                  <ul className="space-y-4 mb-8 flex-1">
                    {item.features.map((feature: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-slate-600 font-medium"
                      >
                        <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/lien-he"
                    className="w-full py-4 rounded-xl bg-slate-50 border border-slate-200 text-brand-blue font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange"
                  >
                    Nhận tư vấn ngay <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Disclaimer Text */}
      <div className="mt-12 text-center text-slate-500 text-sm flex items-center justify-center gap-2">
        <Info className="w-4 h-4 text-brand-orange" />
        Bảng giá áp dụng cho hàng thông thường (quần áo, đồ khô). Hàng khó, mỹ
        phẩm, thực phẩm lỏng vui lòng liên hệ trực tiếp.
      </div>
    </div>
  );
}
