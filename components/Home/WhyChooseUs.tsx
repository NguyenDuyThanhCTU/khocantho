"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe2,
  Coins,
  ShieldCheck,
  Headset,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";
import QuotePopup from "../ui/QuotePopup";

const REASONS = [
  {
    id: "network",
    title: "Mạng lưới kết nối toàn cầu",
    icon: Globe2,
    description:
      "Thiết lập đường bay thẳng đến hơn 200 quốc gia. Đối tác cấp cao của DHL, FedEx, UPS giúp tối ưu thời gian toàn trình ngắn nhất.",
    features: [
      "Bay thẳng hàng ngày đi Mỹ, Úc",
      "Tích hợp hệ thống hãng bay",
      "Giao tận tay Door-to-Door",
    ],
    color: "text-blue-500",
    bgIcon: "bg-blue-100",
    imageBg: "bg-gradient-to-br from-blue-800 to-brand-blue",
  },
  {
    id: "cost",
    title: "Tối ưu chi phí cho Miền Tây",
    icon: Coins,
    description:
      "Bảng giá được thiết kế riêng cho bà con Miền Tây. Cam kết bao thuế nhập khẩu trọn gói, tuyệt đối không phát sinh chi phí ẩn khi nhận hàng.",
    features: [
      "Cước rẻ hơn thị trường 20%",
      "Bao thuế nhập khẩu (FDA)",
      "Miễn phí thùng & lấy hàng",
    ],
    color: "text-brand-orange",
    bgIcon: "bg-orange-100",
    imageBg: "bg-gradient-to-br from-brand-orange to-red-600",
  },
  {
    id: "safety",
    title: "Bảo hiểm an toàn tuyệt đối",
    icon: ShieldCheck,
    description:
      "Mỗi kiện hàng là một tài sản quý giá. Đội ngũ đóng gói chuyên nghiệp kết hợp mút xốp, hút chân không và chính sách đền bù 100% minh bạch.",
    features: [
      "Hút chân không thực phẩm",
      "Xử lý nhãn mác tiếng Anh",
      "Bảo hiểm 100% giá trị",
    ],
    color: "text-emerald-500",
    bgIcon: "bg-emerald-100",
    imageBg: "bg-gradient-to-br from-emerald-600 to-teal-800",
  },
  {
    id: "support",
    title: "Hỗ trợ thủ tục A-Z 24/7",
    icon: Headset,
    description:
      "Bạn chỉ cần chuẩn bị hàng, mọi giấy tờ phức tạp (MSDS, kiểm dịch, khai báo hải quan điện tử) cứ để chuyên viên chứng từ của chúng tôi lo.",
    features: [
      "Bao thủ tục Hải quan khó",
      "Tracking Zalo/SMS tự động",
      "Tư vấn tận tình 24/7",
    ],
    color: "text-purple-500",
    bgIcon: "bg-purple-100",
    imageBg: "bg-gradient-to-br from-indigo-600 to-purple-800",
  },
];

const STATS = [
  { number: "10+", label: "Năm kinh nghiệm" },
  { number: "50k+", label: "Kiện hàng thành công" },
  { number: "200+", label: "Quốc gia kết nối" },
  { number: "99%", label: "Tỷ lệ thông quan" },
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(REASONS[0].id);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const activeReason = REASONS.find((r) => r.id === activeTab) || REASONS[0];

  return (
    // Nền xám ngọc trai (slate-50) kết hợp pattern chìm sang trọng
    <>
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-[url('/images/noise-pattern.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header & Stats Bar */}
          <div className="flex flex-col lg:flex-row gap-12 justify-between items-start mb-16">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-wider text-brand-orange uppercase mb-3">
                Lợi thế cạnh tranh
              </h2>
              <h3 className="text-4xl font-extrabold text-brand-blue leading-tight mb-4">
                Tại sao chọn An Tâm Express?
              </h3>
              <p className="text-lg text-slate-600">
                Chúng tôi tự hào là cầu nối tin cậy, đưa sản phẩm Việt Nam vươn
                ra thế giới với tiêu chuẩn dịch vụ khắt khe nhất.
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 w-full lg:w-auto p-8 rounded-3xl bg-slate-50 border border-slate-100">
              {STATS.map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <div className="text-3xl font-extrabold text-brand-blue mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* --- INTERACTIVE TABS LAYOUT --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left: Navigation Tabs */}
            <div className="lg:col-span-5 flex flex-col relative space-y-2">
              {REASONS.map((reason) => {
                const isActive = activeTab === reason.id;
                return (
                  <button
                    key={reason.id}
                    onClick={() => setActiveTab(reason.id)}
                    className={cn(
                      "relative text-left p-6 rounded-2xl transition-all duration-300 w-full group",
                      isActive ? "z-10" : "hover:bg-slate-200/50 z-0",
                    )}
                  >
                    {/* Thanh trượt Active Background (Magic Layout) */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabBackground"
                        className="absolute inset-0 bg-white rounded-2xl shadow-lg shadow-slate-200/60 border border-slate-100/80 z-0"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Indicator Line (Vệt màu cam bên trái) */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-brand-orange rounded-r-full z-10"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    <div className="relative z-10 flex items-start gap-5">
                      <div
                        className={cn(
                          "w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500",
                          isActive
                            ? reason.bgIcon
                            : "bg-slate-100 group-hover:bg-white",
                        )}
                      >
                        <reason.icon
                          className={cn(
                            "w-7 h-7 transition-colors duration-300",
                            isActive
                              ? reason.color
                              : "text-slate-400 group-hover:text-brand-orange",
                          )}
                        />
                      </div>
                      <div className="pt-2">
                        <h4
                          className={cn(
                            "text-xl font-bold transition-colors duration-300 mb-2",
                            isActive
                              ? "text-brand-blue"
                              : "text-slate-600 group-hover:text-slate-800",
                          )}
                        >
                          {reason.title}
                        </h4>
                        {/* Description chỉ hiện ra mượt mà khi tab đang active trên Desktop */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <p className="text-slate-500 text-sm leading-relaxed mt-2 pr-4">
                                {reason.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Dynamic Floating Panel */}
            <div className="lg:col-span-7 h-[500px] lg:h-[600px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReason.id}
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={cn(
                    "absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-300/50 flex flex-col justify-end p-8 md:p-12",
                    activeReason.imageBg,
                  )}
                >
                  {/* Background Decor (Thay bằng ảnh thực tế sau này) */}
                  <div className="absolute inset-0 opacity-20 bg-[url('/images/grid-pattern.svg')] mix-blend-overlay" />
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 1 }}
                    className="absolute -top-20 -right-20 w-[400px] h-[400px]"
                  >
                    <activeReason.icon className="w-full h-full text-white" />
                  </motion.div>

                  {/* Floating Glass Content Card */}
                  <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">
                    <h4 className="text-2xl font-bold text-white mb-6">
                      Cam kết dịch vụ
                    </h4>
                    <ul className="space-y-4">
                      {activeReason.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-center gap-4 text-white/90 font-medium text-lg"
                        >
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          </div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      onClick={() => setIsPopupOpen(true)}
                      className="mt-8 flex items-center gap-2 bg-white text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-brand-orange hover:text-white transition-all duration-300 group"
                    >
                      Trải nghiệm ngay
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      <QuotePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
