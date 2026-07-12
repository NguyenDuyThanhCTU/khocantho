"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Send,
  Globe2,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function ContactFormBlock() {
  // Quản lý trạng thái form
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // HÀM XỬ LÝ SUBMIT QUA FORMSUBMIT AJAX
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // THAY ĐỊA CHỈ EMAIL CỦA BẠN VÀO ĐÂY (nhớ giữ lại chữ /ajax/ phía trước)
      const response = await fetch(
        "https://formsubmit.co/ajax/vanchuyenklat.express@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        },
      );

      if (response.ok) {
        setSubmitStatus("success");
        form.reset(); // Xóa trắng form sau khi gửi thành công

        // Tắt thông báo thành công sau 5 giây
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-32 mb-24">
      <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
        {/* CỘT TRÁI: Thông tin liên hệ trực tiếp (Giữ nguyên như cũ) */}
        <div className="lg:w-5/12 bg-gradient-to-br from-slate-50 to-slate-100 p-8 md:p-12 border-r border-slate-200/60 relative overflow-hidden">
          <Globe2 className="absolute -bottom-20 -left-20 w-80 h-80 text-slate-200/50 -rotate-12 z-0 pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-2xl font-extrabold text-[#0A192F] mb-2">
              Thông tin liên hệ
            </h3>
            <p className="text-slate-600 mb-10">
              Phản hồi trong vòng 5 phút (kể cả thứ 7, Chủ Nhật).
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-brand-orange transition-all duration-300">
                  <Phone className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 mb-1 uppercase tracking-wider">
                    Hotline tư vấn 24/7
                  </p>
                  <a
                    href="tel:0925365179"
                    className="text-2xl font-black text-[#0A192F] hover:text-brand-orange transition-colors"
                  >
                    0925 365 179
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">
                  <MessageCircle className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 mb-1 uppercase tracking-wider">
                    Hỗ trợ qua Zalo
                  </p>
                  <a
                    href="https://zalo.me/0925365179"
                    className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    An Tâm Express Official
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-300">
                  <Mail className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 mb-1 uppercase tracking-wider">
                    Email hỗ trợ
                  </p>
                  <a
                    href="mailto:vanchuyenklat.express@gmail.com"
                    className="text-lg font-bold text-slate-800 hover:text-emerald-600 transition-colors"
                  >
                    vanchuyenklat.express@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-3 text-slate-600 font-medium">
                <Clock className="w-5 h-5 text-brand-orange" />
                Giờ làm việc: 08:00 - 20:00 (Thứ 2 - Chủ Nhật)
              </div>
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: Form liên hệ / Báo giá CÓ TÍCH HỢP FORMSUBMIT */}
        <div className="lg:w-7/12 p-8 md:p-12 bg-white relative">
          <h3 className="text-2xl font-extrabold text-[#0A192F] mb-2">
            Gửi yêu cầu báo giá
          </h3>
          <p className="text-slate-600 mb-8">
            Điền đầy đủ thông tin bên dưới, chuyên viên của chúng tôi sẽ gọi lại
            báo giá chính xác nhất cho bạn.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* --- CÁC FIELD ẨN CỦA FORMSUBMIT --- */}
            {/* Tắt Captcha hình ảnh gây phiền cho user */}
            <input type="hidden" name="_captcha" value="false" />
            {/* Tiêu đề Email gửi về Admin */}
            <input
              type="hidden"
              name="_subject"
              value="🔥 [An Tâm Express] Yêu cầu báo giá mới từ Website!"
            />
            {/* Format email nhận được dưới dạng bảng cho đẹp */}
            <input type="hidden" name="_template" value="table" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  name="Tên_Khách_Hàng" // Tên cột sẽ hiện trong email
                  required
                  placeholder="VD: Nguyễn Văn A"
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all font-medium text-slate-800"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  name="Số_Điện_Thoại"
                  required
                  placeholder="0901 234 567"
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all font-medium text-slate-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Gửi hàng đến quốc gia nào?
                </label>
                <select
                  name="Quốc_Gia_Đích"
                  required
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all font-medium text-slate-800 appearance-none"
                >
                  <option value="">-- Chọn quốc gia --</option>
                  <option value="Mỹ (USA)">Mỹ (USA)</option>
                  <option value="Úc (Australia)">Úc (Australia)</option>
                  <option value="Canada">Canada</option>
                  <option value="Đài Loan - Hàn Quốc">
                    Đài Loan - Hàn Quốc
                  </option>
                  <option value="Châu Âu">Châu Âu</option>
                  <option value="Khác">Quốc gia khác...</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Trọng lượng dự kiến (kg)
                </label>
                <input
                  type="number"
                  name="Trọng_Lượng_Dự_Kiến"
                  placeholder="VD: 15"
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all font-medium text-slate-800"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">
                Loại hàng hóa & Ghi chú thêm
              </label>
              <textarea
                name="Nội_Dung_Chi_Tiết"
                rows={4}
                required
                placeholder="VD: Mình cần gửi khô cá lóc, tôm khô và 1 ít mỹ phẩm đi bang California..."
                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all font-medium text-slate-800 resize-none"
              ></textarea>
            </div>

            {/* Thông báo trạng thái (Success / Error) */}
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl flex items-center gap-3 font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ với bạn ngay.
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl flex items-center gap-3 font-medium"
                >
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                  Có lỗi xảy ra. Vui lòng thử lại hoặc gọi Hotline!
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full py-4 bg-brand-orange hover:bg-orange-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-lg shadow-brand-orange/30 group"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Đang gửi...
                </>
              ) : (
                <>
                  Gửi yêu cầu báo giá
                  <Send className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
