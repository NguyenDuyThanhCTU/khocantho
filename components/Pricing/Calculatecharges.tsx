"use client";
import { Calculator, PackageOpen } from "lucide-react";
import QuotePopup from "../ui/QuotePopup";
import { useState } from "react";

export default function Calculatecharges() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-brand-blue mb-4">
              Hướng dẫn tính cước hàng không
            </h2>
            <p className="text-slate-600">
              Theo quy định của hiệp hội hàng không IATA, cước phí sẽ được tính
              dựa trên số lớn hơn giữa{" "}
              <strong className="text-brand-orange">Cân nặng thực tế</strong> và{" "}
              <strong className="text-brand-orange">
                Trọng lượng thể tích
              </strong>
              .
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/40">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                  <PackageOpen className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">
                    Công thức Thể tích (DIM)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Đo chiều dài, rộng, cao của thùng hàng (tính bằng cm). Sau
                    đó áp dụng công thức: <br />
                    <strong className="text-brand-orange text-lg">
                      (D x R x C) / 5000
                    </strong>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                  <Calculator className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">
                    Ví dụ minh họa
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Thùng hàng nặng 5kg, nhưng kích thước là 50x40x40cm. <br />
                    Thể tích = (50x40x40)/5000 = 16kg. <br />
                    =&gt; Hãng bay sẽ tính cước phí dựa trên mốc{" "}
                    <strong className="text-slate-800">16kg</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0A192F] p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 rounded-bl-full blur-xl" />
              <h4 className="text-xl font-bold mb-4 relative z-10">
                Mẹo tiết kiệm chi phí
              </h4>
              <ul className="space-y-3 relative z-10 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  Gửi càng nhiều, cước đơn giá (vnđ/kg) càng rẻ.
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  Cắt gọt thùng carton vừa khít với hàng hóa bên trong.
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  Hút chân không quần áo, gấu bông, thực phẩm để giảm thể tích.
                </li>
              </ul>
              <button
                onClick={() => setIsPopupOpen(true)}
                className="mt-6 inline-block w-full text-center py-3 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-xl transition-colors relative z-10"
              >
                Gửi hàng ngay
              </button>
            </div>
          </div>
        </div>
      </section>
      <QuotePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
