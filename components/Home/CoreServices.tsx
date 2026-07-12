"use client";

import { motion, Variants } from "framer-motion";
import {
  Truck,
  ShieldCheck,
  Package,
  FileText,
  Smartphone,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    id: "pickup",
    icon: Truck,
    title: "Lấy hàng tận nhà miễn phí",
    description:
      "Hỗ trợ pick-up tận nơi tại Cần Thơ, Vĩnh Long, Tiền Giang và khắp các tỉnh Miền Tây. Không ngại nắng mưa, gọi là có mặt.",
    themeColor: "bg-blue-500",
    lightBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: "tax",
    icon: ShieldCheck,
    title: "Bao thuế nhập khẩu trọn gói",
    description:
      "Các tuyến trọng điểm (Mỹ, Úc, Canada, EU) được xử lý bao thuế. Cam kết 100% không phát sinh bất kỳ chi phí ẩn nào.",
    themeColor: "bg-brand-orange",
    lightBg: "bg-orange-50",
    iconColor: "text-brand-orange",
  },
  {
    id: "pack",
    icon: Package,
    title: "Đóng gói & Hút chân không",
    description:
      "Cung cấp miễn phí thùng carton 5 lớp. Hỗ trợ hút chân không thực phẩm, làm tem nhãn mác tiếng Anh chuẩn quy định FDA.",
    themeColor: "bg-emerald-500",
    lightBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    id: "customs",
    icon: FileText,
    title: "Xử lý thủ tục hải quan",
    description:
      "Đội ngũ chuyên gia xử lý mượt mà mọi thủ tục thông quan, giấy phép MSDS, FDA cho các loại hàng khó (thực phẩm, mỹ phẩm).",
    themeColor: "bg-purple-500",
    lightBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    id: "tracking",
    icon: Smartphone,
    title: "Tracking 24/7 minh bạch",
    description:
      "Hệ thống tra cứu vận đơn thời gian thực. Cập nhật tiến trình tự động qua Zalo và SMS cho người gửi tại từng trạm trung chuyển.",
    themeColor: "bg-sky-500",
    lightBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    id: "insurance",
    icon: BadgeCheck,
    title: "Bảo hiểm hàng hóa 100%",
    description:
      "Chính sách đền bù rõ ràng, minh bạch lên đến 100% giá trị khai báo nếu xảy ra sự cố mất mát, hư hỏng trong quá trình vận chuyển.",
    themeColor: "bg-rose-500",
    lightBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

export default function CoreServices() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    // Nền trắng tinh tế, điểm xuyết các vệt màu rất nhẹ để không nhàm chán
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Abstract Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-40 left-[-10%] w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-wider text-brand-orange uppercase mb-3">
            Giá trị cốt lõi
          </h2>
          <h3 className="text-4xl font-extrabold text-brand-blue leading-tight mb-4">
            Hệ sinh thái dịch vụ toàn diện
          </h3>
          <p className="text-lg text-slate-600">
            Hơn cả một dịch vụ vận chuyển, chúng tôi cung cấp giải pháp
            logistics trọn gói, giúp bạn gạt bỏ mọi lo âu khi gửi gắm tài sản ra
            nước ngoài.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 overflow-hidden"
            >
              {/* Animated Top Border Line (Chạy ngang khi hover) */}
              <div
                className={cn(
                  "absolute top-0 left-0 h-1.5 w-0 transition-all duration-500 ease-out group-hover:w-full",
                  service.themeColor,
                )}
              />

              {/* Soft Gradient Overlay chìm dưới background khi hover */}
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none",
                  service.themeColor,
                )}
              />

              <div className="relative z-10">
                {/* Icon Container */}
                <div
                  className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-sm",
                    service.lightBg,
                  )}
                >
                  <service.icon className={cn("w-8 h-8", service.iconColor)} />
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-slate-800 mb-4 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6 h-[80px]">
                  {service.description}
                </p>

                {/* "Learn More" Link (Xuất hiện mượt mà) */}
                <div className="flex items-center gap-2 text-sm font-bold text-slate-400 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand-blue">
                  Tìm hiểu thêm <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
