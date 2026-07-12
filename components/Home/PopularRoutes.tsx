"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Map,
  Clock,
  ShieldCheck,
  PlaneTakeoff,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import QuotePopup from "../ui/QuotePopup";

const ROUTES = [
  {
    id: "us",
    title: "Hoa Kỳ (USA)",
    subtitle: "Tuyến đường huyết mạch",
    desc: "Bao thuế nhập khẩu trọn gói. Xử lý mượt mà các mặt hàng khó như thực phẩm (khô, mắm), mỹ phẩm, yến sào với tỷ lệ thông quan 100%.",
    time: "5 - 7 ngày",
    tags: ["Bay thẳng mỗi ngày", "Bao thuế FDA"],
    bgImage:
      "bg-[url('https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/klatexpress/USA.jpg')] bg-cover bg-center",
  },
  {
    id: "aus",
    title: "Úc (Australia)",
    subtitle: "Kết nối nhanh chóng",
    desc: "Vận chuyển door-to-door đến Sydney, Melbourne, Brisbane. Miễn phí thùng carton và hỗ trợ đóng gói chuẩn chống va đập.",
    time: "6 - 10 ngày",
    tags: ["Door-to-Door", "Cước tiết kiệm"],
    bgImage:
      "bg-[url('https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/klatexpress/Uc.jpg')] bg-cover bg-center",
  },
  {
    id: "eu",
    title: "Châu Âu",
    subtitle: "An toàn tuyệt đối",
    desc: "Mạng lưới kết nối Đức, Pháp, Anh... Đội ngũ chứng từ hỗ trợ toàn bộ thủ tục MSDS, kiểm dịch cho hàng hóa Miền Tây xuất khẩu.",
    time: "10 - 15 ngày",
    tags: ["Khai báo điện tử", "Bảo hiểm 100%"],
    bgImage:
      "bg-[url('https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/klatexpress/Chau%20Au.jpg')] bg-cover bg-center",
  },
  {
    id: "asia",
    title: "Châu Á",
    subtitle: "Cửa ngõ thị trường chung",
    desc: "Hệ thống khai báo hải quan điện tử giúp hàng hóa thông quan nhanh chóng. Tracking minh bạch 24/7.",
    time: "6 - 8 ngày",
    tags: ["Hỗ trợ MSDS", "Chuyên nghiệp"],
    bgImage:
      "bg-[url('https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/klatexpress/Chau%20A.jpg')] bg-cover bg-center",
  },
];

export default function PopularRoutes() {
  const [activeId, setActiveId] = useState<string>("us");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    // Nền sáng dịu mắt (slate-50) thay vì nền tối
    <>
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* SHAPES CHÌM NỀN BIỂN ĐIỆN TỬ (Background Decorators) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Lưới Dot pattern tinh tế */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Blob Cam góc trên phải */}
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-orange/10 blur-[80px]" />

          {/* Blob Xanh Navy góc dưới trái */}
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-[100px]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header - Text tối màu dễ đọc */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white text-brand-orange font-bold text-sm uppercase tracking-wider mb-6 border border-slate-200 shadow-sm"
            >
              <TrendingUp className="w-4 h-4" /> Tuyến bay trọng điểm
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-brand-blue leading-tight mb-6"
            >
              Mạng lưới kết nối toàn cầu
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600"
            >
              Với ưu thế đường bay thẳng và đối tác chiến lược tại hơn 200 quốc
              gia, chúng tôi đưa hàng hóa từ Miền Tây vươn tầm thế giới một cách
              an toàn nhất.
            </motion.p>
          </div>

          {/* EXPANDING CARDS LAYOUT */}
          <div className="flex flex-col lg:flex-row w-full h-[800px] lg:h-[600px] gap-4">
            {ROUTES.map((route) => {
              const isActive = activeId === route.id;

              return (
                <motion.div
                  key={route.id}
                  layout
                  onMouseEnter={() => setActiveId(route.id)}
                  onClick={() => setActiveId(route.id)}
                  className={cn(
                    "relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-end group shadow-2xl shadow-slate-200/50",
                    isActive
                      ? "lg:flex-[4] flex-[2] lg:max-w-[60%]"
                      : "lg:flex-[1] flex-[1] lg:max-w-[15%]",
                  )}
                >
                  {/* Image */}
                  <div
                    className={cn(
                      "absolute inset-0 transition-transform duration-1000",
                      route.bgImage,
                      isActive ? "scale-105" : "scale-100 grayscale-[20%]",
                    )}
                  />

                  {/* Lớp phủ Gradient TỐI DẦN XUỐNG DƯỚI để chữ Trắng bên trong Card nổi bật hoàn toàn */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t transition-opacity duration-700",
                      isActive
                        ? "from-slate-900/95 via-slate-900/40 to-transparent"
                        : "from-slate-900/80 to-slate-900/20",
                    )}
                  />

                  {/* Nội dung bên trong Card */}
                  <div className="relative z-10 p-6 md:p-10 h-full flex flex-col justify-end">
                    {/* Tiêu đề xoay dọc (Inactive Desktop) */}
                    <div
                      className={cn(
                        "lg:absolute lg:bottom-12 lg:left-1/2 lg:-translate-x-1/2 transition-all duration-500 origin-bottom-left whitespace-nowrap",
                        isActive
                          ? "lg:opacity-0 lg:scale-95 lg:pointer-events-none hidden"
                          : "lg:opacity-100 lg:-rotate-90 hidden lg:block",
                      )}
                    >
                      <h4 className="text-white text-2xl font-bold tracking-wider">
                        {route.title}
                      </h4>
                    </div>

                    {/* Nội dung chi tiết (Active) */}
                    <div
                      className={cn(
                        "transition-all duration-700 transform flex flex-col h-full justify-end",
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10 hidden lg:flex lg:pointer-events-none",
                      )}
                    >
                      {!isActive && (
                        <h4 className="text-white text-2xl font-bold lg:hidden">
                          {route.title}
                        </h4>
                      )}

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="max-w-2xl"
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <span className="bg-brand-orange px-3 py-1.5 rounded-full text-white text-xs font-bold flex items-center gap-1.5 shadow-sm">
                                <Map className="w-3 h-3" /> {route.subtitle}
                              </span>
                              <span className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-bold flex items-center gap-1.5 border border-white/20">
                                <Clock className="w-3 h-3" /> {route.time}
                              </span>
                            </div>

                            <h4 className="text-4xl md:text-5xl font-black text-white mb-5 drop-shadow-md">
                              {route.title}
                            </h4>

                            <p className="text-slate-200 text-lg leading-relaxed mb-8 hidden md:block">
                              {route.desc}
                            </p>

                            {/* Features Tags */}
                            <div className="flex flex-wrap items-center gap-4 mb-8">
                              {route.tags.map((tag, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2 text-white/90 font-medium"
                                >
                                  <ShieldCheck className="w-5 h-5 text-brand-orange" />{" "}
                                  {tag}
                                </div>
                              ))}
                            </div>

                            <button
                              onClick={() => setIsPopupOpen(true)}
                              className="group/btn flex items-center w-fit gap-3 bg-white text-brand-blue px-8 py-4 rounded-xl font-bold hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-lg"
                            >
                              Nhận báo giá tuyến này
                              <PlaneTakeoff className="w-5 h-5 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <QuotePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
