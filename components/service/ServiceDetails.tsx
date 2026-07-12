"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  ChevronDown,
  HelpCircle,
  PackageCheck,
  PackageX,
} from "lucide-react";
import { ServiceRoute } from "@/lib/routesMockup";
import { cn } from "@/lib/utils";

export default function ServiceDetails({ route }: { route: ServiceRoute }) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-16">
        {/* CỘT TRÁI: Nội dung chính & Quy định */}
        <div className="lg:col-span-8 space-y-16">
          {/* HTML Description (SEO Content) */}
          <article
            className="prose prose-lg prose-slate max-w-none 
              prose-headings:text-brand-blue prose-headings:font-black
              prose-strong:text-brand-orange prose-ul:marker:text-brand-orange
              bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100"
            dangerouslySetInnerHTML={{ __html: route.description }}
          />

          {/* Hàng hóa Cho phép / Cấm */}
          <div>
            <h3 className="text-3xl font-black text-brand-blue mb-8">
              Danh mục hàng hóa gửi đi {route.country}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Cho phép */}
              <div className="bg-emerald-50/50 border border-emerald-100 p-8 rounded-[2rem]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <PackageCheck className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900">
                    Được phép gửi
                  </h4>
                </div>
                <ul className="space-y-4">
                  {route.allowedItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-emerald-800 text-sm font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cấm / Hạn chế */}
              <div className="bg-rose-50/50 border border-rose-100 p-8 rounded-[2rem]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <PackageX className="w-6 h-6 text-rose-600" />
                  </div>
                  <h4 className="text-xl font-bold text-rose-900">
                    Cấm / Hạn chế
                  </h4>
                </div>
                <ul className="space-y-4">
                  {route.restrictedItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-rose-800 text-sm font-medium"
                    >
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: FAQs */}
        <div className="lg:col-span-4">
          <div className="sticky top-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-sm uppercase tracking-wider mb-6">
              <HelpCircle className="w-4 h-4" /> Góc giải đáp
            </div>
            <h3 className="text-3xl font-black text-brand-blue mb-8">
              Câu hỏi thường gặp
            </h3>

            <div className="space-y-4">
              {route.faqs.map((faq, index) => {
                const isOpen = openFAQ === index;
                return (
                  <div
                    key={index}
                    className={cn(
                      "bg-white border rounded-2xl overflow-hidden transition-all duration-300",
                      isOpen
                        ? "border-brand-orange shadow-lg shadow-brand-orange/5"
                        : "border-slate-200 hover:border-brand-orange/50",
                    )}
                  >
                    <button
                      onClick={() => setOpenFAQ(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 shrink-0 transition-transform duration-300",
                          isOpen && "rotate-180 text-brand-orange",
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-50 mt-2">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Box CTA Mini */}
            <div className="mt-8 bg-brand-blue p-8 rounded-3xl text-center">
              <h4 className="text-white font-bold mb-2">Vẫn còn thắc mắc?</h4>
              <p className="text-slate-400 text-sm mb-6">
                Gọi ngay cho chúng tôi để được giải đáp.
              </p>
              <a
                href="tel:0777697056"
                className="inline-block px-6 py-3 bg-white text-brand-blue font-bold rounded-xl hover:bg-brand-orange hover:text-white transition-colors"
              >
                Gọi Hotline 0777 697 056
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
