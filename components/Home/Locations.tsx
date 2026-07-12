"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Truck, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Danh sách kho hàng
const locations = [
  {
    city: "Kho Bến Tre Cũ",
    address: "F12A KĐT Hưng Phú, Phường Phú Tân, Tỉnh Vĩnh Long ( Bến Tre Cũ)",
    phone: "0925365179",
    mapLink: "https://maps.app.goo.gl/SFnBNv1pYeqNpwGBA",
    link: "https://khovinhlong.klatexpress.com",

    highlight: true,
    delay: 0.4,
  },
  {
    city: "TP. Hồ Chí Minh",
    address: "45/10 Cao Lỗ, Phường Chánh Hưng, TP HCM",
    phone: "093 800 2596",
    mapLink: "https://maps.google.com/?q=45/10+Cao+Lỗ+Quận+8",
    link: "https://khocantho.klatexpress.com",
    highlight: false,
    delay: 0.2,
  },

  {
    city: "Kho Mỹ Tho Cũ",
    address:
      "139/5 Trần Hưng Đạo, Phường Thới Sơn, Tỉnh Đồng Tháp ( Mỹ Tho Cũ )",
    phone: "0911 204 954",
    mapLink: "https://maps.app.goo.gl/bBrUfSptKNSJdmb17",
    link: "https://khodongthap.klatexpress.com",

    highlight: false,
    delay: 0.3,
  },

  {
    city: "Kho Cần Thơ",
    address:
      "38/42 Mậu Thân, Phường Cái Khế, Thành Phố Cần Thơ (Phường An Hòa Cũ)",
    phone: "0777 697 056",
    mapLink: "https://maps.app.goo.gl/S5HygxLSVFHZ9FYW7",
    link: "https://khocantho.klatexpress.com",

    highlight: false, // Kho chính nổi bật hơn
    delay: 0.1,
  },
  {
    city: "Kho Thới Lai",
    address:
      "Số 6A5, Ấp Thới Thuận B, Xã Thới Lai, TP. Cần Thơ (Khu Hành Chính Thới Lai) ",
    phone: "0777 697 056",
    mapLink: "https://maps.app.goo.gl/S5HygxLSVFHZ9FYW7",
    link: "https://khocantho.klatexpress.com",

    highlight: false, // Kho chính nổi bật hơn
    delay: 0.1,
  },
];

export default function LocationSection() {
  return (
    <section id="locations" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Map Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/map-pattern.svg')] bg-center bg-no-repeat bg-contain pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandblue-50 text-brandblue-600 text-sm font-bold uppercase tracking-wider mb-4 border border-brandblue-100">
            <MapPin className="w-4 h-4" /> Mạng lưới phủ sóng
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Hệ thống kho nhận hàng <br />
            <span className="text-brandblue-600">Khắp Miền Tây & Sài Gòn</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Quý khách có thể mang hàng đến trực tiếp các điểm giao dịch dưới đây
            hoặc sử dụng dịch vụ lấy hàng tại nhà.
          </p>
        </div>

        {/* Grid Locations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: loc.delay }}
              className={cn(
                "p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1",
                loc.highlight
                  ? "bg-brandblue-900 text-white border-brandblue-800 shadow-xl shadow-brandblue-900/20"
                  : "bg-white text-slate-900 border-slate-200 hover:border-brandblue-200 hover:shadow-lg",
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <h3
                  className={cn(
                    "text-xl font-bold",
                    loc.highlight ? "text-white" : "text-brandblue-700",
                  )}
                >
                  {loc.city}
                </h3>
                {loc.highlight && (
                  <span className="text-[10px] font-bold bg-white/20 text-white px-2 py-1 rounded uppercase">
                    Trụ sở
                  </span>
                )}
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin
                    className={cn(
                      "w-5 h-5 flex-shrink-0 mt-0.5",
                      loc.highlight ? "text-brandblue-300" : "text-slate-400",
                    )}
                  />
                  <Link
                    href={loc.mapLink}
                    target="_blank"
                    className={cn(
                      "text-sm font-medium leading-relaxed underline hover:text-blue-600 ",
                      loc.highlight ? "text-brandblue-100" : "text-slate-600",
                    )}
                  >
                    {loc.address}
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <Phone
                    className={cn(
                      "w-5 h-5 flex-shrink-0",
                      loc.highlight ? "text-brandblue-300" : "text-slate-400",
                    )}
                  />
                  <a
                    href={`tel:${loc.phone}`}
                    className="text-sm font-bold hover:underline"
                  >
                    {loc.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock
                    className={cn(
                      "w-5 h-5 flex-shrink-0",
                      loc.highlight ? "text-brandblue-300" : "text-slate-400",
                    )}
                  />
                  <p
                    className={cn(
                      "text-sm",
                      loc.highlight ? "text-brandblue-100" : "text-slate-500",
                    )}
                  >
                    08:00 - 17:30 (Thứ 2 - Thứ 7)
                  </p>
                </div>
              </div>

              <a
                href={loc.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center justify-center gap-2 w-full py-3 rounded-lg font-bold text-sm transition-all",
                  loc.highlight
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-slate-50 hover:bg-brandblue-50 hover:text-brandblue-600 text-slate-600",
                )}
              >
                <Navigation className="w-4 h-4" />
                Đến kho {loc.city} ngay !
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
