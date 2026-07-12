"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scale,
  Ban,
  ShieldAlert,
  FileSignature,
  Box,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const REGULATIONS = [
  {
    id: "trach-nhiem",
    label: "Trách nhiệm các bên",
    icon: FileSignature,
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-black text-brand-blue mb-4">
          Trách nhiệm của người gửi và An Tâm Express
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Sự hợp tác minh bạch giữa hai bên là yếu tố tiên quyết để kiện hàng
          được thông quan an toàn và nhanh chóng.
        </p>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Trách nhiệm
            của Người gửi (Khách hàng)
          </h4>
          <ul className="space-y-3 text-slate-600 text-sm">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
              Khai báo trung thực, chính xác tên hàng, số lượng và giá trị hàng
              hóa.
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
              Cung cấp đầy đủ thông tin người nhận (Họ tên, SĐT, Địa chỉ có mã
              bưu chính Zipcode).
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
              Chịu trách nhiệm trước pháp luật nếu cố tình gửi hàng cấm, ma túy,
              chất nổ lẩn giấu trong hàng hóa.
            </li>
          </ul>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-brand-blue" /> Trách nhiệm của
            An Tâm Express
          </h4>
          <ul className="space-y-3 text-slate-600 text-sm">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
              Tư vấn rõ ràng các quy định hải quan nước đến.
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
              Thực hiện đóng gói, hút chân không, dán nhãn chuẩn quốc tế miễn
              phí.
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
              Cập nhật lộ trình minh bạch và đền bù thỏa đáng theo đúng hợp đồng
              nếu xảy ra sự cố do lỗi vận chuyển.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "hang-cam",
    label: "Hàng cấm bay & Từ chối",
    icon: Ban,
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-black text-rose-600 mb-4">
          Danh mục hàng hóa tuyệt đối cấm gửi
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Tuân thủ luật Hàng không quốc tế và Hải quan nước đến, chúng tôi từ
          chối vận chuyển các mặt hàng sau.{" "}
          <strong className="text-rose-600">
            Nếu cố tình vi phạm, khách hàng hoàn toàn chịu trách nhiệm trước
            pháp luật.
          </strong>
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl flex items-start gap-3">
            <Ban className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <p className="text-sm text-rose-900 font-medium">
              Chất ma túy, chất kích thích thần kinh, các loại thuốc không có
              toa chỉ định.
            </p>
          </div>
          <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl flex items-start gap-3">
            <Ban className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <p className="text-sm text-rose-900 font-medium">
              Vũ khí, đạn dược, trang thiết bị quân sự, dao găm, kiếm.
            </p>
          </div>
          <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl flex items-start gap-3">
            <Ban className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <p className="text-sm text-rose-900 font-medium">
              Chất dễ cháy nổ (Sơn móng tay, nước hoa dạng xịt, bình gas, pin
              sạc dự phòng lớn).
            </p>
          </div>
          <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl flex items-start gap-3">
            <Ban className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <p className="text-sm text-rose-900 font-medium">
              Thịt động vật sống/đông lạnh/chế biến từ gia súc gia cầm (Heo, bò,
              gà...).
            </p>
          </div>
          <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl flex items-start gap-3">
            <Ban className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <p className="text-sm text-rose-900 font-medium">
              Hàng hóa sao chép, làm giả, nhái thương hiệu đã được bảo hộ
              (Gucci, Nike...).
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "den-bu",
    label: "Chính sách đền bù",
    icon: ShieldAlert,
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-black text-brand-blue mb-4">
          Chính sách bảo hiểm và đền bù
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Mỗi kiện hàng đều mang giá trị lớn đối với khách hàng. Chúng tôi cam
          kết chính sách đền bù minh bạch khi xảy ra rủi ro thất lạc.
        </p>

        <div className="space-y-4">
          <div className="p-6 bg-white border border-brand-orange/20 shadow-lg shadow-brand-orange/5 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-brand-orange/10 rounded-bl-full pointer-events-none" />
            <h4 className="text-lg font-bold text-slate-800 mb-2">
              Trường hợp Khách hàng có Mua Bảo hiểm (Khai giá)
            </h4>
            <p className="text-sm text-slate-600 mb-2">
              Phí bảo hiểm: <strong>3% - 5%</strong> giá trị hàng hóa khai báo.
            </p>
            <p className="text-sm text-slate-600">
              Mức đền bù:{" "}
              <strong className="text-brand-orange text-lg">100%</strong> giá
              trị khai báo nếu mất mát do lỗi của An Tâm Express hoặc hãng bay.
            </p>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 className="text-lg font-bold text-slate-800 mb-2">
              Trường hợp Khách hàng KHÔNG Mua Bảo hiểm
            </h4>
            <p className="text-sm text-slate-600">
              Mức đền bù tiêu chuẩn theo Hiệp hội Hàng không Quốc tế: Đền bù{" "}
              <strong>20 USD/kg</strong> nhưng tối đa không vượt quá{" "}
              <strong>100 USD/kiện</strong>, cộng với việc hoàn trả lại cước phí
              vận chuyển của kiện hàng đó.
            </p>
          </div>
        </div>

        <div className="p-4 bg-amber-50 border-l-4 border-amber-500 text-amber-800 text-sm mt-6">
          <strong className="block mb-1">Miễn trừ trách nhiệm:</strong>
          Chúng tôi không chịu trách nhiệm đền bù nếu: Hàng bị Hải quan tịch thu
          do khai báo sai sự thật; Hàng cấm/hàng fake bị tiêu hủy; Rủi ro do
          thiên tai (động đất, bão lụt), chiến tranh, dịch bệnh; Hoặc người nhận
          thay đổi địa chỉ nhưng không báo trước dẫn đến thất lạc.
        </div>
      </div>
    ),
  },
  {
    id: "tinh-cuoc",
    label: "Quy định tính cước",
    icon: Box,
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-black text-brand-blue mb-4">
          Quy định về Trọng lượng & Kích thước
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Để đảm bảo tính công bằng theo chuẩn IATA, cước phí sẽ được tính dựa
          trên số lớn hơn giữa{" "}
          <strong className="text-brand-orange">Trọng lượng thực tế</strong>{" "}
          (cân nặng) và{" "}
          <strong className="text-brand-orange">Trọng lượng thể tích</strong>{" "}
          (chiếm chỗ trên máy bay).
        </p>

        <div className="bg-[#0A192F] p-8 rounded-3xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
            <Scale className="w-48 h-48 -translate-y-1/4 translate-x-1/4" />
          </div>
          <h4 className="text-xl font-bold mb-4 text-brand-orange">
            Công thức tính Thể Tích (DIM)
          </h4>
          <p className="text-3xl font-black mb-4">(Dài x Rộng x Cao) / 5000</p>
          <p className="text-sm text-slate-300 opacity-80">
            * Đơn vị đo kích thước: Centimet (cm). Kết quả tính bằng Kilogram
            (kg).
          </p>
        </div>

        <div className="flex gap-4 items-start p-4 bg-sky-50 border border-sky-100 rounded-xl">
          <AlertTriangle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
          <p className="text-sm text-sky-900 leading-relaxed">
            <strong>Mẹo:</strong> Hàng hóa đóng trong thùng móp méo, phình bụng
            sẽ bị hãng bay đo ở điểm phình to nhất. An Tâm Express luôn hỗ trợ
            đóng vuông vức, cắt gọt thùng sát với hàng hóa để giảm thiểu cước
            thể tích cho khách.
          </p>
        </div>
      </div>
    ),
  },
];

export default function RegulationsContent() {
  const [activeTab, setActiveTab] = useState(REGULATIONS[0].id);
  const activeReg =
    REGULATIONS.find((r) => r.id === activeTab) || REGULATIONS[0];

  return (
    <div className="relative z-20 -mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col md:flex-row">
        {/* --- CỘT TRÁI: SIDEBAR NAV --- */}
        <div className="md:w-1/3 lg:w-1/4 bg-slate-50 border-r border-slate-100 p-6 md:p-8 shrink-0">
          <h3 className="text-lg font-black text-slate-800 mb-6 uppercase tracking-wider">
            Danh mục
          </h3>
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-4 md:pb-0 no-scrollbar">
            {REGULATIONS.map((reg) => {
              const isActive = activeTab === reg.id;
              return (
                <button
                  key={reg.id}
                  onClick={() => setActiveTab(reg.id)}
                  className={cn(
                    "flex items-center gap-3 w-full text-left px-5 py-4 rounded-xl text-sm font-bold transition-all whitespace-nowrap md:whitespace-normal",
                    isActive
                      ? "bg-white text-brand-orange shadow-md shadow-slate-200 border border-slate-100"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-800",
                  )}
                >
                  <reg.icon
                    className={cn(
                      "w-5 h-5 shrink-0 transition-colors",
                      isActive ? "text-brand-orange" : "text-slate-400",
                    )}
                  />
                  {reg.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- CỘT PHẢI: NỘI DUNG HIỂN THỊ --- */}
        <div className="md:w-2/3 lg:w-3/4 p-8 md:p-12 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReg.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeReg.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
