"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Box, MessageCircle, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

// Danh mục Tabs
const tabs = [
  { id: "all", label: "Tất cả", icon: <Layers className="w-4 h-4" /> },
  {
    id: "packing",
    label: "Quy cách đóng gói",
    icon: <Box className="w-4 h-4" />,
  },
  {
    id: "goods",
    label: "Hàng hóa đi Mỹ/Úc",
    icon: <ImageIcon className="w-4 h-4" />,
  },
  {
    id: "feedback",
    label: "Feedback Khách",
    icon: <MessageCircle className="w-4 h-4" />,
  },
];

// Dữ liệu giả lập (Placeholder) - Sau này bạn thay bằng link ảnh thật
const galleryImages = [
  // --- NHÓM HÀNG HÓA (goods) - 24 phần tử ---
  {
    id: 1,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(1).jpg",
    category: "goods",
    title: "Hàng hóa (1)",
    desc: "Vận chuyển quốc tế",
  },
  {
    id: 2,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(1).png",
    category: "goods",
    title: "Hàng hóa (1) PNG",
    desc: "Vận chuyển quốc tế",
  },
  {
    id: 3,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(2).jpg",
    category: "goods",
    title: "Hàng hóa (2)",
    desc: "Vận chuyển quốc tế",
  },
  {
    id: 4,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(2).png",
    category: "goods",
    title: "Hàng hóa (2) PNG",
    desc: "Vận chuyển quốc tế",
  },
  {
    id: 5,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(3).jpg",
    category: "goods",
    title: "Hàng hóa (3)",
    desc: "Vận chuyển quốc tế",
  },
  {
    id: 6,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(3).png",
    category: "goods",
    title: "Hàng hóa (3) PNG",
    desc: "Vận chuyển quốc tế",
  },
  {
    id: 7,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(4).jpg",
    category: "goods",
    title: "Hàng hóa (4)",
    desc: "Vận chuyển quốc tế",
  },
  {
    id: 8,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(4).png",
    category: "goods",
    title: "Hàng hóa (4) PNG",
    desc: "Vận chuyển quốc tế",
  },
  {
    id: 9,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(5).jpg",
    category: "goods",
    title: "Hàng hóa (5)",
    desc: "Vận chuyển quốc tế",
  },
  {
    id: 10,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(5).png",
    category: "goods",
    title: "Hàng hóa (5) PNG",
    desc: "Vận chuyển quốc tế",
  },
  {
    id: 11,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(6).jpg",
    category: "goods",
    title: "Hàng hóa (6)",
    desc: "Hàng air",
  },
  {
    id: 12,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(7).jpg",
    category: "goods",
    title: "Hàng hóa (7)",
    desc: "Hàng air",
  },
  {
    id: 13,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(8).jpg",
    category: "goods",
    title: "Hàng hóa (8)",
    desc: "Hàng air",
  },
  {
    id: 14,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(9).jpg",
    category: "goods",
    title: "Hàng hóa (9)",
    desc: "Hàng air",
  },
  {
    id: 15,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(10).jpg",
    category: "goods",
    title: "Hàng hóa (10)",
    desc: "Vận chuyển",
  },
  {
    id: 16,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(11).jpg",
    category: "goods",
    title: "Hàng hóa (11)",
    desc: "Vận chuyển",
  },
  {
    id: 17,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(12).jpg",
    category: "goods",
    title: "Hàng hóa (12)",
    desc: "Vận chuyển",
  },
  {
    id: 18,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(13).jpg",
    category: "goods",
    title: "Hàng hóa (13)",
    desc: "Vận chuyển",
  },
  {
    id: 19,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(14).jpg",
    category: "goods",
    title: "Hàng hóa (14)",
    desc: "Vận chuyển",
  },
  {
    id: 20,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(15).jpg",
    category: "goods",
    title: "Hàng hóa (15)",
    desc: "Vận chuyển",
  },
  {
    id: 21,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(16).jpg",
    category: "goods",
    title: "Hàng hóa (16)",
    desc: "Vận chuyển",
  },
  {
    id: 22,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(17).jpg",
    category: "goods",
    title: "Hàng hóa (17)",
    desc: "Vận chuyển",
  },
  {
    id: 23,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(18).jpg",
    category: "goods",
    title: "Hàng hóa (18)",
    desc: "Vận chuyển",
  },
  {
    id: 24,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/H%C3%A0ng%20H%C3%B3a%20(19).jpg",
    category: "goods",
    title: "Hàng hóa (19)",
    desc: "Vận chuyển",
  },

  // --- NHÓM PHẢN HỒI (feedback) - 8 phần tử ---
  {
    id: 25,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/feedback%20(1).jpg",
    category: "feedback",
    title: "Phản hồi (1)",
    desc: "Khách hàng hài lòng",
  },
  {
    id: 26,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/feedback%20(2).jpg",
    category: "feedback",
    title: "Phản hồi (2)",
    desc: "Khách hàng hài lòng",
  },
  {
    id: 27,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/feedback%20(3).jpg",
    category: "feedback",
    title: "Phản hồi (3)",
    desc: "Khách hàng hài lòng",
  },
  {
    id: 28,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/feedback%20(4).jpg",
    category: "feedback",
    title: "Phản hồi (4)",
    desc: "Khách hàng hài lòng",
  },
  {
    id: 29,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/feedback%20(5).jpg",
    category: "feedback",
    title: "Phản hồi (5)",
    desc: "Khách hàng hài lòng",
  },
  {
    id: 30,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/feedback%20(6).jpg",
    category: "feedback",
    title: "Phản hồi (6)",
    desc: "Khách hàng hài lòng",
  },
  {
    id: 31,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/feedback%20(7).jpg",
    category: "feedback",
    title: "Phản hồi (7)",
    desc: "Khách hàng hài lòng",
  },
  {
    id: 32,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/feedback%20(8).jpg",
    category: "feedback",
    title: "Phản hồi (8)",
    desc: "Khách hàng hài lòng",
  },

  // --- NHÓM ĐÓNG GÓI (packing) - 28 phần tử ---
  {
    id: 33,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(1).jpg",
    category: "packing",
    title: "Đóng gói (1)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 34,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(1).png",
    category: "packing",
    title: "Đóng gói (1) PNG",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 35,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(2).jpg",
    category: "packing",
    title: "Đóng gói (2)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 36,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(3).jpg",
    category: "packing",
    title: "Đóng gói (3)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 37,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(4).jpg",
    category: "packing",
    title: "Đóng gói (4)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 38,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(5).jpg",
    category: "packing",
    title: "Đóng gói (5)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 39,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(6).jpg",
    category: "packing",
    title: "Đóng gói (6)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 40,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(7).jpg",
    category: "packing",
    title: "Đóng gói (7)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 41,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(8).jpg",
    category: "packing",
    title: "Đóng gói (8)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 42,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(9).jpg",
    category: "packing",
    title: "Đóng gói (9)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 43,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(10).jpg",
    category: "packing",
    title: "Đóng gói (10)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 44,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(11).jpg",
    category: "packing",
    title: "Đóng gói (11)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 45,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(12).jpg",
    category: "packing",
    title: "Đóng gói (12)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 46,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(13).jpg",
    category: "packing",
    title: "Đóng gói (13)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 47,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(14).jpg",
    category: "packing",
    title: "Đóng gói (14)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 48,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(15).jpg",
    category: "packing",
    title: "Đóng gói (15)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 49,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(16).jpg",
    category: "packing",
    title: "Đóng gói (16)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 50,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(17).jpg",
    category: "packing",
    title: "Đóng gói (17)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 51,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(18).jpg",
    category: "packing",
    title: "Đóng gói (18)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 52,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(19).jpg",
    category: "packing",
    title: "Đóng gói (19)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 53,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(20).jpg",
    category: "packing",
    title: "Đóng gói (20)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 54,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(21).jpg",
    category: "packing",
    title: "Đóng gói (21)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 55,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(22).jpg",
    category: "packing",
    title: "Đóng gói (22)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 56,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(23).jpg",
    category: "packing",
    title: "Đóng gói (23)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 57,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(24).jpg",
    category: "packing",
    title: "Đóng gói (24)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 58,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(25).jpg",
    category: "packing",
    title: "Đóng gói (25)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 59,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(26).jpg",
    category: "packing",
    title: "Đóng gói (26)",
    desc: "Quy trình chuyên nghiệp",
  },
  {
    id: 60,
    src: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/%C4%90%C3%B3ng%20g%C3%B3i%20(27).jpg",
    category: "packing",
    title: "Đóng gói (27)",
    desc: "Quy trình chuyên nghiệp",
  },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("all");

  // Lọc hình ảnh theo tab
  const filteredImages =
    activeTab === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-accent-600 font-bold uppercase tracking-wider text-sm mb-3">
            Thư viện hình ảnh
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Người thật - <span className="text-blue-600">Việc thật</span>
          </h3>
          <p className="text-slate-600 text-lg">
            Hàng ngàn kiện hàng được An Tâm Express xử lý mỗi tháng. Sự chỉn chu
            trong từng khâu đóng gói là cam kết của chúng tôi.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 transition-colors z-10",
                activeTab === tab.id
                  ? "text-white"
                  : "text-slate-600 hover:bg-white hover:text-blue-600",
              )}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image Grid (Masonry Layout Simulated) */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-200 cursor-zoom-in"
              >
                {/* Thay src bằng ảnh thật của bạn */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-300 text-slate-400 font-bold">
                  {/* Placeholder cho ảnh nếu chưa có */}
                  <img
                    src={image.src}
                    alt={image.title}
                    className="object-cover object-bottom"
                  />
                </div>

                {/* Overlay thông tin khi hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.title}
                  </p>
                  <p className="text-slate-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {image.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button (Optional) */}
        <div className="mt-12 text-center">
          <a
            href="https://www.facebook.com/guihangquoctemientay/"
            target="_blank"
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
          >
            Xem thêm 1000+ hình ảnh trên Fanpage
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
