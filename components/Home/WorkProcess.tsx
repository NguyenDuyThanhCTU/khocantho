"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  PhoneCall,
  PackagePlus,
  FileText,
  Plane,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const PROCESS_STEPS = [
  {
    id: 1,
    title: "Tư vấn & Nhận báo giá",
    description:
      "Tiếp nhận yêu cầu, phân tích loại hàng hóa và tư vấn gói cước, tuyến bay tối ưu nhất giúp bạn tiết kiệm chi phí.",
    icon: PhoneCall,
    color: "text-blue-500",
    bgIcon: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: 2,
    title: "Pick-up & Đóng gói",
    description:
      "Nhân viên đến lấy hàng tận nhà tại Miền Tây. Tiến hành kiểm tra, đóng thùng carton 5 lớp và hút chân không miễn phí.",
    icon: PackagePlus,
    color: "text-brand-orange",
    bgIcon: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  {
    id: 3,
    title: "Xử lý Chứng từ & Hải quan",
    description:
      "Hoàn thiện 100% hồ sơ xuất khẩu, giấy phép FDA, MSDS và tem nhãn mác chuẩn quốc tế mà không làm phiền đến bạn.",
    icon: FileText,
    color: "text-purple-500",
    bgIcon: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    id: 4,
    title: "Bay thẳng Quốc tế",
    description:
      "Hàng hóa được bàn giao cho các hãng bay đối tác (DHL, FedEx...) và kết nối chuyến bay thẳng ngay trong ngày.",
    icon: Plane,
    color: "text-sky-500",
    bgIcon: "bg-sky-50",
    borderColor: "border-sky-200",
  },
  {
    id: 5,
    title: "Giao hàng Door-to-Door",
    description:
      "Kiện hàng được thông quan và giao an toàn đến tận tay người nhận. Cập nhật trạng thái thành công qua hệ thống SMS/Zalo.",
    icon: MapPin,
    color: "text-emerald-500",
    bgIcon: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
];

export default function WorkProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Lấy giá trị cuộn chuột thực tế của người dùng khi đi qua section này
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"], // Bắt đầu chạy hiệu ứng khi top của section tới giữa màn hình
  });

  // Biến giá trị cuộn (0 -> 1) thành chiều cao của đường line (0% -> 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* --- SHAPES CHÌM ẤN TƯỢNG (Background) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Họa tiết phác thảo container hoặc kiện hàng chìm */}
        {/* Lưu ý: Bạn cần thêm file SVG tương ứng vào thư mục public/images/ hoặc thay bằng url ảnh khác */}
        <div
          className="absolute top-0 bottom-0 left-[10%] w-[300px] opacity-[0.015] bg-no-repeat bg-top"
          style={{
            backgroundImage: "url('/images/cargo-package-outline.svg')",
          }}
        />

        {/* Layer 2: Vệt màu blur mỏng chạy dọc theo trục timeline tạo hiệu ứng ánh sáng */}
        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-40 bg-brand-orange/5 blur-3xl z-[-1]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* --- HEADER SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-sm uppercase tracking-wider mb-6"
          >
            <CheckCircle2 className="w-4 h-4" /> Đơn giản & Minh bạch
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-blue leading-tight mb-6"
          >
            Quy trình gửi hàng chuẩn hóa
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Chỉ với 5 bước đơn giản, mọi khoảng cách địa lý đều được xóa nhòa.
            Trải nghiệm dịch vụ logistics trọn gói, chuyên nghiệp từ khâu chạm
            đầu tiên.
          </motion.p>
        </div>

        {/* --- TIMELINE CONTAINER --- */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Đường line gốc (Màu xám nhạt chìm bên dưới) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full" />

          {/* Đường line động (Màu Cam, chạy trượt xuống theo độ cuộn chuột) */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-brand-orange via-orange-500 to-yellow-500 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)] origin-top z-0"
          />

          {/* Render các bước (Steps) */}
          <div className="relative z-10 flex flex-col gap-12 md:gap-24">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={cn(
                    "flex flex-col md:flex-row items-center gap-8 md:gap-16",
                    isEven ? "md:flex-row" : "md:flex-row-reverse",
                  )}
                >
                  {/* Cột Nội dung (Card) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-1/2 pl-20 md:pl-0 flex justify-end"
                  >
                    <div
                      className={cn(
                        "bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-slate-200/50 border transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/10 w-full lg:max-w-md group",
                        "border-slate-100 hover:border-brand-orange/30",
                        // Căn lề cho text trên desktop phụ thuộc vào vị trí trái/phải của Card
                        isEven ? "md:text-right" : "md:text-left text-left",
                      )}
                    >
                      {/* Step Number Badge */}
                      <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 font-black text-sm mb-6 border border-slate-200 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                        Bước {step.id}
                      </span>

                      <h4 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-brand-blue transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Trạm kết nối (Node Center) */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: 0.2,
                      }}
                      className={cn(
                        "w-16 h-16 rounded-full bg-white border-4 flex items-center justify-center shadow-lg z-20 relative",
                        step.borderColor,
                      )}
                    >
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center",
                          step.bgIcon,
                        )}
                      >
                        <step.icon className={cn("w-5 h-5", step.color)} />
                      </div>

                      {/* Vòng pulse nháy sáng viền ngoài (Hiệu ứng tỏa nhiệt/nhịp tim) */}
                      <motion.div
                        className="absolute inset-[-8px] rounded-full border-2 border-brand-orange/30 z-[-1]"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Cột Spacer (Dùng để đẩy Card sang một bên trên Desktop để tạo layout so le) */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
