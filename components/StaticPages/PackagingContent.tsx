"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PackageOpen,
  ShieldAlert,
  Droplets,
  Maximize,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import QuotePopup from "../ui/QuotePopup";

// Dữ liệu hướng dẫn đóng gói chuyên biệt
const PACKAGING_GUIDES = [
  {
    id: "thuc-pham",
    label: "Thực phẩm & Hàng có mùi",
    icon: PackageOpen,
    description:
      "Quy chuẩn đóng gói ép chân không nhiều lớp, đảm bảo không rò rỉ mùi và qua mặt máy soi chiếu hải quan một cách an toàn.",
    steps: [
      {
        title: "Bọc kín lớp đầu tiên",
        content:
          "Sử dụng hũ nhựa dẻo có nắp vặn chặt (đối với mắm) hoặc túi nilon dày dặn (đối với cá khô, mực khô). Tuyệt đối không dùng hũ thủy tinh vì dễ vỡ do áp suất máy bay.",
      },
      {
        title: "Seal nhôm & Ép chân không",
        content:
          "Dùng màng seal nhôm ép nhiệt miệng hũ. Sau đó, đưa vào máy hút chân không công nghiệp hút kiệt không khí để diệt khuẩn và ngăn mùi tuyệt đối.",
      },
      {
        title: "Quấn xốp nổ (Bubble Wrap)",
        content:
          "Quấn từ 2-3 lớp màng xốp hơi xung quanh từng hũ/gói để chống va đập trong quá trình bốc xếp tại sân bay.",
      },
      {
        title: "Đóng thùng & Xử lý nhãn mác",
        content:
          "Xếp chặt vào thùng carton 5 lớp, chèn thêm mút xốp Pe Foam vào các khe hở. Dán tem nhãn tiếng Anh (chuẩn FDA) bên ngoài từng sản phẩm.",
      },
    ],
    color: "text-brand-orange",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  {
    id: "de-vo",
    label: "Hàng dễ vỡ & Gốm sứ",
    icon: ShieldAlert,
    description:
      "Bảo vệ tối đa bằng vật liệu chống sốc chuyên dụng, loại bỏ rủi ro nứt vỡ trong suốt hành trình hơn 10.000km bay quốc tế.",
    steps: [
      {
        title: "Quấn xốp hơi từng lớp",
        content:
          "Mỗi sản phẩm gốm sứ, thủy tinh phải được quấn riêng biệt bằng xốp hơi (bubble wrap) ít nhất 3 vòng. Không để các sản phẩm tiếp xúc trực tiếp với nhau.",
      },
      {
        title: "Sử dụng mút Pe Foam",
        content:
          "Lót một lớp mút xốp Pe Foam dày 5cm ở đáy thùng và 4 cạnh xung quanh thùng carton trước khi xếp hàng vào.",
      },
      {
        title: "Đóng gói lớp kép (Double Box)",
        content:
          "Đặt thùng carton nhỏ chứa hàng vào trong một thùng carton lớn hơn. Đổ đầy hạt xốp (packing peanuts) vào khoảng trống giữa 2 thùng.",
      },
      {
        title: "Dán nhãn cảnh báo",
        content:
          "Niêm phong thùng bằng băng keo bản rộng. Dán nhãn 'Fragile' (Hàng dễ vỡ) và mũi tên chỉ hướng 'This Side Up' ở 4 mặt thùng.",
      },
    ],
    color: "text-red-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    id: "cong-kenh",
    label: "Hàng cồng kềnh (Nệm, Gấu bông)",
    icon: Maximize,
    description:
      "Giải pháp ép xẹp tối đa giúp bạn tiết kiệm đến 40% cước phí tính theo Trọng lượng thể tích (Dimensional Weight).",
    steps: [
      {
        title: "Bọc nilon bảo vệ",
        content:
          "Bọc nệm Kymdan, chăn ga, hoặc gấu bông bằng túi nilon nguyên sinh cỡ lớn để chống bụi bẩn và ẩm mốc.",
      },
      {
        title: "Hút chân không công nghiệp",
        content:
          "Đưa hàng vào máy ép chân không cỡ lớn để rút sạch không khí, làm xẹp tối đa thể tích của nệm hoặc gấu bông.",
      },
      {
        title: "Cuộn tròn & Định hình",
        content:
          "Cuộn chặt sản phẩm lại (dạng ống) và cố định bằng băng keo bản lớn. Bước này giúp thu nhỏ kích thước thùng đóng gói đi rất nhiều.",
      },
      {
        title: "Đóng gói & Ép góc",
        content:
          "Cho vào thùng carton, cắt gọt các góc thùng thừa sao cho vừa khít với sản phẩm. Kích thước thùng càng nhỏ, cước phí càng rẻ.",
      },
    ],
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
  {
    id: "my-pham",
    label: "Chất lỏng & Mỹ phẩm",
    icon: Droplets,
    description:
      "Quy chuẩn đóng gói chống rò rỉ dưới áp suất hàng không, kèm theo quy trình kiểm duyệt giấy MSDS chuyên nghiệp.",
    steps: [
      {
        title: "Cố định nắp đậy",
        content:
          "Dùng băng keo trong dán vòng quanh nắp chai/lọ serum, kem dưỡng để đảm bảo nắp không bị bung ra khi áp suất không khí trên máy bay thay đổi.",
      },
      {
        title: "Bọc túi nilon ziplock",
        content:
          "Bỏ từng chai lọ vào túi ziplock riêng biệt và vuốt kín miệng túi. Phòng trường hợp bị rỉ sét, chất lỏng cũng không lan ra các hàng hóa khác.",
      },
      {
        title: "Chèn vật liệu thấm hút",
        content:
          "Xếp các túi ziplock vào thùng, chèn thêm bông hoặc giấy nén có khả năng thấm hút tốt vào các khoảng trống.",
      },
      {
        title: "Kẹp kèm giấy MSDS",
        content:
          "Đóng thùng và kẹp sẵn bảng chỉ dẫn an toàn hóa chất (MSDS) vào túi hồ sơ dán ngoài nắp thùng để hải quan kiểm tra dễ dàng.",
      },
    ],
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
];

export default function PackagingContent() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(PACKAGING_GUIDES[0].id);
  const activeGuide =
    PACKAGING_GUIDES.find((g) => g.id === activeTab) || PACKAGING_GUIDES[0];

  return (
    <>
      <div className="relative z-20 -mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* --- WIDGET CTA NỔI TRÊN HERO --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-orange/5 rounded-bl-full pointer-events-none" />
          <div>
            <h3 className="text-xl md:text-2xl font-black text-brand-blue mb-2 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
              Đóng gói chuẩn - Thông quan nhanh
            </h3>
            <p className="text-slate-600 font-medium">
              Bạn không cần tự chuẩn bị vật tư. An Tâm Express cung cấp{" "}
              <strong className="text-brand-orange">miễn phí</strong> thùng
              carton 5 lớp, xốp nổ và dịch vụ hút chân không tận nhà!
            </p>
          </div>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="w-full md:w-auto shrink-0 bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2"
          >
            Gọi lấy hàng ngay <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* --- INTERACTIVE TABS --- */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {PACKAGING_GUIDES.map((guide) => {
            const isActive = activeTab === guide.id;
            return (
              <button
                key={guide.id}
                onClick={() => setActiveTab(guide.id)}
                className={cn(
                  "relative flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300",
                  isActive
                    ? "text-white shadow-lg shadow-brand-blue/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-brand-orange hover:text-brand-orange",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="packagingTab"
                    className="absolute inset-0 bg-blue-900 rounded-2xl z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <guide.icon
                  className={cn(
                    "w-4 h-4 relative z-10",
                    isActive ? "text-brand-orange" : "",
                  )}
                />
                <span className="relative z-10">{guide.label}</span>
              </button>
            );
          })}
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-8 md:p-12 overflow-hidden relative">
          {/* Background Watermark Icon */}
          <motion.div
            key={activeGuide.id + "-icon"}
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 0.03, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute -bottom-20 -right-20 pointer-events-none"
          >
            <activeGuide.icon
              className={cn("w-[400px] h-[400px]", activeGuide.color)}
            />
          </motion.div>

          <div className="relative z-10">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-black text-slate-800 mb-4">
                {activeGuide.label}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {activeGuide.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="wait">
                {activeGuide.steps.map((step, index) => (
                  <motion.div
                    key={`${activeGuide.id}-step-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={cn(
                      "p-8 rounded-3xl border transition-colors group hover:shadow-lg",
                      "bg-slate-50/50 border-slate-100 hover:bg-white",
                      `hover:${activeGuide.borderColor}`,
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl shrink-0 transition-colors",
                          activeGuide.bgColor,
                          activeGuide.color,
                        )}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-3">
                          {step.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {step.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* --- TIPS SECTION --- */}
        <div className="mt-16 bg-gradient-to-br from-brand-orange to-orange-600 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl shadow-brand-orange/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/dots-pattern.svg')] opacity-10 mix-blend-overlay" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center shrink-0 backdrop-blur-md border border-white/30">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-3">
                Quy tắc vàng: Tối ưu kích thước
              </h3>
              <p className="text-orange-50 leading-relaxed text-lg">
                Cước phí hàng không tính theo{" "}
                <strong>Trọng lượng thể tích</strong>. Đừng để khoảng trống thừa
                trong thùng. Hãy yêu cầu nhân viên An Tâm Express cắt gọt và ép
                các góc thùng carton cho vừa khít với hàng hóa để được hưởng mức
                cước phí tiết kiệm nhất.
              </p>
            </div>
          </div>
        </div>
      </div>
      <QuotePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
