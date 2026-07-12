"use client";

import { motion } from "framer-motion";
import { Star, Quote, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

// Dummy data cho Đối tác (Gấp đôi lên để làm hiệu ứng cuộn vô tận mượt mà)
const PARTNERS = [
  { name: "DHL Express", color: "text-red-600" },
  { name: "FedEx", color: "text-purple-700" },
  { name: "UPS", color: "text-amber-700" },
  { name: "USPS", color: "text-blue-600" },
  { name: "Vietnam Airlines", color: "text-teal-700" },
  { name: "Cathay Pacific", color: "text-emerald-700" },
  { name: "Emirates", color: "text-red-500" },
];

// Thêm data để tạo 2 hàng cuộn (Row 1 và Row 2)
const REVIEWS = [
  {
    id: 1,
    name: "Cô Ngọc Hoa",
    role: "Khách hàng cá nhân - Cần Thơ",
    content:
      "Lần đầu gửi khô cá lóc với mắm thái qua Cali cho con gái, cô lo bị hải quan giữ lại lắm. May nhờ mấy đứa bên An Tâm hút chân không kỹ, 4 ngày là tới nơi, đồ ăn vẫn thơm phức.",
    rating: 5,
    avatar: "NH",
    bgColor: "bg-rose-100 text-rose-700",
  },
  {
    id: 2,
    name: "Anh Tuấn Anh",
    role: "Chủ xưởng thủ công - Bến Tre",
    content:
      "Xưởng tôi thường gửi mẫu đồ dừa sang Úc. Đã đổi qua 3 đơn vị vận chuyển nhưng chốt lại làm việc lâu dài với An Tâm vì giá cước ổn định, và đặc biệt là tới tận xưởng lấy hàng rất nhiệt tình.",
    rating: 5,
    avatar: "TA",
    bgColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    name: "Chị Mai Hương",
    role: "Kinh doanh online - Tiền Giang",
    content:
      "Thích nhất là hệ thống tracking vận đơn trực tuyến. Khách bên Mỹ hỏi hàng tới đâu, mình chỉ cần mở web lên check là biết chính xác từng trạm. Rất an tâm và chuyên nghiệp.",
    rating: 5,
    avatar: "MH",
    bgColor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 4,
    name: "Chú Ba Lập",
    role: "Kiều bào - USA",
    content:
      "Nhờ An Tâm Express mà mấy món đồ quê như yến sào, thuốc nam chú nhờ người nhà gửi qua đều lọt qua ải FDA ngon ơ. Tụi nhỏ làm giấy tờ chứng từ quá giỏi.",
    rating: 5,
    avatar: "BL",
    bgColor: "bg-amber-100 text-amber-700",
  },
  {
    id: 5,
    name: "Bạn Thanh Trúc",
    role: "Du học sinh - Canada",
    content:
      "Hồ sơ du học của mình cần gửi hỏa tốc sang trường bên Toronto. Bưu tá đến tận nhà lấy lúc 8h tối, vậy mà 3 ngày sau trường đã báo nhận được. Tốc độ thực sự đáng nể!",
    rating: 5,
    avatar: "TT",
    bgColor: "bg-purple-100 text-purple-700",
  },
  {
    id: 6,
    name: "Cô Sáu",
    role: "Tiểu thương - An Giang",
    content:
      "Hàng cồng kềnh đóng thùng xốp gửi đi xa sợ bể lắm. Vậy mà bên này họ gia cố bằng nẹp gỗ, chèn mút kỹ càng. Hàng qua tới Úc không mẻ một góc nào. Rất ưng ý!",
    rating: 5,
    avatar: "CS",
    bgColor: "bg-cyan-100 text-cyan-700",
  },
];

// Nhân đôi mảng để làm Infinite Loop
const PARTNERS_LOOP = [...PARTNERS, ...PARTNERS];
const REVIEWS_ROW_1 = [...REVIEWS.slice(0, 3), ...REVIEWS.slice(0, 3)];
const REVIEWS_ROW_2 = [...REVIEWS.slice(3, 6), ...REVIEWS.slice(3, 6)];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* --- SHAPES CHÌM ẤN TƯỢNG (Background) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Layer 1: Lưới Dot pattern */}
        <div className="absolute inset-0 bg-[url('/images/dots-pattern.svg')] opacity-[0.03]" />

        {/* Layer 2: Biểu tượng Dấu ngoặc kép khổng lồ mờ ảo ở giữa nền */}
        <Quote className="absolute w-[800px] h-[800px] text-slate-200/40 -rotate-12 translate-x-20" />

        {/* Layer 3: Các khối Gradient Glow tạo độ sâu */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* --- PHẦN 1: ĐỐI TÁC (INFINITE MARQUEE) --- */}
        <div className="mb-24">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">
            Đối tác vận chuyển chiến lược toàn cầu
          </p>

          {/* Marquee Container */}
          <div className="relative flex overflow-hidden group">
            {/* Lớp mờ (Gradient mask) che 2 cạnh bên để viền cuộn trông mượt mà */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-slate-50 via-transparent to-slate-50" />

            {/* Thanh cuộn ngang */}
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              className="flex items-center gap-16 md:gap-32 w-max px-8"
            >
              {PARTNERS_LOOP.map((partner, index) => (
                <div
                  key={index}
                  className={cn(
                    "text-2xl md:text-4xl font-black tracking-tighter opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 cursor-pointer",
                    partner.color,
                  )}
                >
                  {/* Thực tế sẽ dùng thẻ <Image> cho logo thật */}
                  {partner.name}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- PHẦN 2: HEADER ĐÁNH GIÁ --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white text-brand-orange font-bold text-sm uppercase tracking-wider mb-6 border border-slate-200 shadow-sm"
          >
            <HeartHandshake className="w-4 h-4" /> Niềm tin từ khách hàng
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-blue leading-tight mb-6"
          >
            Hơn 10,000+ kiện hàng đã cất cánh
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Mỗi chuyến hàng thành công là một lời khẳng định cho chất lượng dịch
            vụ của chúng tôi. Lắng nghe chia sẻ từ những khách hàng thân thiết
            tại Miền Tây.
          </motion.p>
        </div>

        {/* --- PHẦN 3: REVIEWS (DUAL INFINITE MARQUEE) --- */}
        <div className="relative flex flex-col gap-6 overflow-hidden py-4">
          {/* Gradient Mask 2 cạnh cho Reviews */}
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-slate-50 via-transparent to-slate-50 w-full" />

          {/* Hàng 1: Cuộn từ Phải sang Trái */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="flex items-center gap-6 w-max"
          >
            {REVIEWS_ROW_1.map((review, index) => (
              <ReviewCard key={`row1-${index}`} review={review} />
            ))}
          </motion.div>

          {/* Hàng 2: Cuộn từ Trái sang Phải (Reverse) */}
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
            className="flex items-center gap-6 w-max"
          >
            {REVIEWS_ROW_2.map((review, index) => (
              <ReviewCard key={`row2-${index}`} review={review} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Sub-component cho Thẻ Đánh Giá (Glassmorphism & Micro-interactions)
function ReviewCard({ review }: { review: any }) {
  return (
    <div className="relative w-[350px] md:w-[450px] bg-white/70 backdrop-blur-xl p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/5 hover:-translate-y-2 group cursor-grab active:cursor-grabbing">
      {/* Nền chìm gradient khi hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50/50 rounded-[2rem] z-0" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-6">
          {[...Array(review.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-brand-yellow text-brand-yellow drop-shadow-sm"
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-slate-700 leading-relaxed mb-8 flex-grow text-lg">
          "{review.content}"
        </p>

        {/* User Info */}
        <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
          <div
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-sm",
              review.bgColor,
            )}
          >
            {review.avatar}
          </div>
          <div>
            <h4 className="font-bold text-slate-900">{review.name}</h4>
            <p className="text-sm text-slate-500 font-medium">{review.role}</p>
          </div>
        </div>

        {/* Quote watermark mờ ở góc thẻ */}
        <Quote className="absolute bottom-6 right-6 w-12 h-12 text-slate-100 group-hover:text-brand-orange/10 transition-colors z-[-1] rotate-180" />
      </div>
    </div>
  );
}
