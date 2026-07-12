"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  HelpCircle,
  PackageOpen,
  Calculator,
  FileText,
  Globe2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// 1. DỮ LIỆU FAQ THEO DANH MỤC
const FAQ_CATEGORIES = [
  { id: "all", label: "Tất cả câu hỏi", icon: HelpCircle },
  { id: "general", label: "Dịch vụ chung", icon: Globe2 },
  { id: "pricing", label: "Cước phí & Thanh toán", icon: Calculator },
  { id: "packaging", label: "Đóng gói & Hàng hóa", icon: PackageOpen },
  { id: "customs", label: "Hải quan & Thủ tục", icon: FileText },
];

const FAQS = [
  {
    id: 1,
    category: "general",
    question: "An Tâm Express có nhận lấy hàng tận nhà không?",
    answer:
      "Có. Chúng tôi cung cấp dịch vụ Pick-up (lấy hàng tận nơi) MIỄN PHÍ tại khu vực Cần Thơ, Vĩnh Long, Bến Tre, Tiền Giang và TP.HCM. Bưu tá sẽ mang theo cân và thùng carton đến tận nhà đóng gói cho bạn.",
  },
  {
    id: 2,
    category: "general",
    question: "Thời gian gửi hàng đi Mỹ và Úc mất bao lâu?",
    answer:
      "Với lợi thế mạng lưới bay thẳng, thời gian gửi hàng đi Mỹ (Hoa Kỳ) dao động từ 5-7 ngày làm việc. Tuyến đi Úc (Australia) mất từ 4-6 ngày làm việc (không tính Thứ 7, Chủ Nhật và ngày lễ).",
  },
  {
    id: 3,
    category: "pricing",
    question: "Trọng lượng thể tích (Dimensional Weight) là gì?",
    answer:
      "Theo quy định hàng không quốc tế (IATA), cước phí được tính dựa trên số lớn hơn giữa Cân nặng thực tế và Trọng lượng thể tích. Công thức tính thể tích: (Dài x Rộng x Cao) / 5000 (đơn vị cm).",
  },
  {
    id: 4,
    category: "pricing",
    question: "Cước phí báo cho tôi đã bao gồm thuế chưa?",
    answer:
      "Đối với các tuyến trọng điểm như Mỹ, Úc, Châu Âu, An Tâm Express áp dụng chính sách BAO THUẾ TRỌN GÓI (DDP). Người nhận tại nước ngoài sẽ không phải đóng thêm bất kỳ khoản thuế/phí phát sinh nào.",
  },
  {
    id: 5,
    category: "packaging",
    question: "Tôi muốn gửi thực phẩm nhà làm (khô, mắm) có được không?",
    answer:
      "Hoàn toàn được. Thực phẩm có mùi như mắm, khô sẽ được nhân viên đóng vào hũ nhựa seal nhôm, quấn xốp màng co và hút chân không 3 lớp. Đảm bảo an toàn 100% không rò rỉ mùi và vượt qua máy soi chiếu hải quan.",
  },
  {
    id: 6,
    category: "packaging",
    question: "Gửi nệm Kymdan đi nước ngoài làm sao để tiết kiệm cước?",
    answer:
      "Nệm cao su Kymdan rất nặng và cồng kềnh. Tại kho An Tâm, chúng tôi có máy ép chân không công nghiệp chuyên dụng giúp ép xẹp nệm và cuộn tròn lại, có thể giảm đến 40% chi phí thể tích so với đóng gói thông thường.",
  },
  {
    id: 7,
    category: "customs",
    question: "Giấy phép FDA là gì? Tôi có phải tự làm không?",
    answer:
      "FDA là giấy chứng nhận bắt buộc của Cục Quản lý Thực phẩm & Dược phẩm Hoa Kỳ. Bạn KHÔNG cần phải tự làm. An Tâm Express sẽ hỗ trợ đăng ký mã FDA hoàn toàn miễn phí cho lô hàng của bạn.",
  },
  {
    id: 8,
    category: "customs",
    question: "Hàng mỹ phẩm (kem dưỡng, serum) cần thủ tục gì?",
    answer:
      "Mỹ phẩm khi vận chuyển hàng không bắt buộc phải có giấy MSDS (Bảng chỉ dẫn an toàn hóa chất). Nếu bạn không có, bộ phận chứng từ của chúng tôi sẽ hỗ trợ khai báo và làm giấy MSDS hợp lệ để lô hàng được cất cánh.",
  },
];

export default function FAQContainer() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);

  // Lọc FAQ dựa trên Category và Search
  const filteredFAQs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchCategory =
        activeCategory === "all" || faq.category === activeCategory;
      const matchSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="relative z-20 -mt-20 max-w-5xl mx-auto">
      {/* --- SEARCH BAR --- */}
      <div className="bg-white p-4 md:p-6 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 mb-12 flex items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full pointer-events-none" />
        <Search className="w-6 h-6 text-brand-orange shrink-0 ml-4 mr-4" />
        <input
          type="text"
          placeholder="Nhập từ khóa tìm kiếm (VD: tính cước, gửi mắm, FDA...)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl text-slate-800 placeholder-slate-400 font-medium py-2"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="text-sm font-bold text-slate-400 hover:text-brand-orange ml-4 whitespace-nowrap"
          >
            Xóa
          </button>
        )}
      </div>

      {/* --- CATEGORY TABS --- */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {FAQ_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenId(null);
              }}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300",
                isActive
                  ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-brand-orange hover:text-brand-orange",
              )}
            >
              <cat.icon
                className={cn("w-4 h-4", isActive ? "text-brand-orange" : "")}
              />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* --- FAQ ACCORDION LIST --- */}
      <div className="space-y-4 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "bg-white rounded-2xl border transition-all duration-300 overflow-hidden",
                    isOpen
                      ? "border-brand-orange shadow-lg shadow-brand-orange/10"
                      : "border-slate-200 hover:border-brand-orange/40",
                  )}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span
                      className={cn(
                        "text-lg font-bold pr-8 transition-colors",
                        isOpen ? "text-brand-blue" : "text-slate-800",
                      )}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors",
                        isOpen
                          ? "bg-brand-orange text-white"
                          : "bg-slate-50 text-slate-400",
                      )}
                    >
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 transition-transform duration-300",
                          isOpen && "rotate-180",
                        )}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2">
                          <div className="p-4 bg-slate-50 rounded-xl">
                            {faq.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-3xl border border-slate-200"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-10 h-10 text-slate-300" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">
                Không tìm thấy câu trả lời
              </h4>
              <p className="text-slate-500 mb-6">
                Thử thay đổi từ khóa hoặc xóa bộ lọc tìm kiếm.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="text-brand-orange font-bold hover:underline"
              >
                Xem tất cả câu hỏi
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- BOTTOM CTA --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-br from-blue-600 to-[#0A192F] p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-center"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 relative z-10">
          Vẫn còn thắc mắc?
        </h3>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto relative z-10">
          Nếu bạn không tìm thấy câu trả lời mình cần, đừng ngần ngại liên hệ
          với bộ phận chăm sóc khách hàng. Chúng tôi luôn túc trực 24/7.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          <Link
            href="/lien-he"
            className="w-full sm:w-auto bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-orange/30"
          >
            Gửi yêu cầu hỗ trợ
          </Link>
          <a
            href="tel:0925365179"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-md"
          >
            Gọi Hotline: 0925 365 179
          </a>
        </div>
      </motion.div>
    </div>
  );
}
