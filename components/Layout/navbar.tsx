"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import GoogleTranslate from "./GoogleTranslate";
import QuotePopup from "../ui/QuotePopup";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Trạng thái mở Mobile Menu
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // Trạng thái Dropdown Desktop
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Trạng thái Accordion cho Mobile
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  // Xử lý đổi màu Navbar khi cuộn
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Khóa cuộn trang khi mở Mobile Menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 relative z-50">
              <img
                className="w-40"
                alt="logo"
                src="https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/klatexpress/Logo.png"
              />
            </Link>

            {/* --- DESKTOP NAV (Giữ nguyên của bạn) --- */}
            <nav className="hidden md:flex items-center gap-8">
              {/* Dịch vụ - Mega Menu */}
              <div
                className="relative group h-20 flex items-center"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-brand-orange transition-colors">
                  Dịch vụ <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-xl rounded-xl border border-slate-100 p-6 grid grid-cols-3 gap-6"
                    >
                      <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                          Phổ biến nhất
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/dich-vu/gui-hang-di-my"
                              className="text-sm font-medium text-slate-700 hover:text-brand-orange"
                            >
                              Gửi hàng đi Mỹ
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dich-vu/gui-hang-di-uc"
                              className="text-sm font-medium text-slate-700 hover:text-brand-orange"
                            >
                              Gửi hàng đi Úc
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dich-vu/gui-hang-di-canada"
                              className="text-sm font-medium text-slate-700 hover:text-brand-orange"
                            >
                              Gửi hàng đi Canada
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                          Châu Á
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/dich-vu/gui-hang-di-dai-loan-han-quoc"
                              className="text-sm font-medium text-slate-700 hover:text-brand-orange"
                            >
                              Đài Loan - Hàn Quốc
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dich-vu/gui-hang-di-nhat-ban"
                              className="text-sm font-medium text-slate-700 hover:text-brand-orange"
                            >
                              Nhật Bản
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dich-vu/gui-hang-di-trung-quoc"
                              className="text-sm font-medium text-slate-700 hover:text-brand-orange"
                            >
                              Trung Quốc
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dich-vu/gui-hang-di-malaysia"
                              className="text-sm font-medium text-slate-700 hover:text-brand-orange"
                            >
                              Malaysia
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dich-vu/gui-hang-di-thai-lan"
                              className="text-sm font-medium text-slate-700 hover:text-brand-orange"
                            >
                              Thái Lan
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                          Châu Âu
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/dich-vu/gui-hang-di-anh"
                              className="text-sm font-medium text-slate-700 hover:text-brand-orange"
                            >
                              Gửi hàng đi Anh
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dich-vu/gui-hang-di-duc"
                              className="text-sm font-medium text-slate-700 hover:text-brand-orange"
                            >
                              Gửi hàng đi Đức
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dich-vu/gui-hang-di-phap"
                              className="text-sm font-medium text-slate-700 hover:text-brand-orange"
                            >
                              Gửi hàng đi Pháp
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/bang-gia"
                className="text-sm font-medium text-slate-700 hover:text-brand-orange transition-colors"
              >
                Bảng giá
              </Link>
              <Link
                href="/#calculator"
                className="text-sm font-medium text-slate-700 hover:text-brand-orange transition-colors"
              >
                Tra cứu giá trực tuyến
              </Link>

              {/* Kho nhận hàng - Dropdown thường */}
              <div
                className="relative group h-20 flex items-center"
                onMouseEnter={() => setActiveDropdown("locations")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-brand-orange transition-colors">
                  Kho nhận hàng <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === "locations" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 w-48 bg-white shadow-xl rounded-xl border border-slate-100 py-2"
                    >
                      <Link
                        href="#"
                        target="_blank"
                        className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-orange"
                      >
                        Kho Bến Tre Cũ
                      </Link>
                      <Link
                        href="#"
                        target="_blank"
                        className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-orange"
                      >
                        TP. Hồ Chí Minh
                      </Link>
                      <Link
                        href="#"
                        target="_blank"
                        className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-orange"
                      >
                        Kho Mỹ Tho Cũ
                      </Link>
                      <Link
                        href="https://khocantho.klatexpress.com"
                        target="_blank"
                        className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-orange"
                      >
                        Kho Cần Thơ
                      </Link>
                      <Link
                        href="#"
                        target="_blank"
                        className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-orange"
                      >
                        Kho Thới Lai
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                href="/hinh-anh"
                className="text-sm font-medium text-slate-700 hover:text-brand-orange transition-colors"
              >
                Hình ảnh
              </Link>
              <Link
                href="/blogs"
                className="text-sm font-medium text-slate-700 hover:text-brand-orange transition-colors"
              >
                Tin tức
              </Link>
              <Link
                href="/lien-he"
                className="text-sm font-medium text-slate-700 hover:text-brand-orange transition-colors"
              >
                Liên hệ
              </Link>
              <div className="">
                <GoogleTranslate />
              </div>
              {/* <button
                onClick={() => setIsPopupOpen(true)}
                className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-md shadow-orange-500/30"
              >
                Nhận Báo Giá
              </button> */}
            </nav>

            {/* Mobile Toggle Button */}
            <div className="md:hidden flex gap-2">
              <div className="">
                <GoogleTranslate />
              </div>
              <button
                className=" p-2 text-slate-700 relative z-50 hover:text-brand-orange transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* --- MOBILE NAV DRAWER --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[40] md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white z-[45] shadow-2xl flex flex-col md:hidden"
            >
              <div className="flex-1 overflow-y-auto pt-24 pb-6 px-6 space-y-2">
                {/* Dịch Vụ Accordion */}
                <div className="border-b border-slate-100 pb-2">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full py-3 text-lg font-bold text-slate-800"
                  >
                    Dịch vụ
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-transform",
                        mobileServicesOpen && "rotate-180 text-brand-orange",
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 flex flex-col space-y-3 py-2"
                      >
                        <p className="text-xs font-bold text-slate-400 uppercase">
                          Châu Mỹ & Úc
                        </p>
                        <Link
                          href="/dich-vu/gui-hang-di-my"
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-medium text-slate-600"
                        >
                          Gửi hàng đi Mỹ
                        </Link>
                        <Link
                          href="/dich-vu/gui-hang-di-uc"
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-medium text-slate-600"
                        >
                          Gửi hàng đi Úc
                        </Link>
                        <Link
                          href="/dich-vu/gui-hang-di-canada"
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-medium text-slate-600"
                        >
                          Gửi hàng đi Canada
                        </Link>

                        <p className="text-xs font-bold text-slate-400 uppercase pt-2">
                          Châu Á
                        </p>
                        <Link
                          href="/dich-vu/gui-hang-di-dai-loan-han-quoc"
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-medium text-slate-600"
                        >
                          Đài Loan - Hàn Quốc
                        </Link>
                        <Link
                          href="/dich-vu/gui-hang-di-nhat-ban"
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-medium text-slate-600"
                        >
                          Nhật Bản
                        </Link>
                        <Link
                          href="/dich-vu/gui-hang-di-trung-quoc"
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-medium text-slate-600"
                        >
                          Trung Quốc
                        </Link>
                        <Link
                          href="/dich-vu/gui-hang-di-malaysia"
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-medium text-slate-600"
                        >
                          Malaysia
                        </Link>
                        <Link
                          href="/dich-vu/gui-hang-di-thai-lan"
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-medium text-slate-600"
                        >
                          Thái Lan
                        </Link>

                        <p className="text-xs font-bold text-slate-400 uppercase pt-2">
                          Châu Âu
                        </p>
                        <Link
                          href="/dich-vu/gui-hang-di-anh"
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-medium text-slate-600"
                        >
                          Gửi hàng đi Anh
                        </Link>
                        <Link
                          href="/dich-vu/gui-hang-di-duc"
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-medium text-slate-600"
                        >
                          Gửi hàng đi Đức
                        </Link>
                        <Link
                          href="/dich-vu/gui-hang-di-phap"
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-medium text-slate-600"
                        >
                          Gửi hàng đi Pháp
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/bang-gia"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-bold text-slate-800 border-b border-slate-100"
                >
                  Bảng giá
                </Link>
                <Link
                  href="/#calculator"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-bold text-slate-800 border-b border-slate-100"
                >
                  Tra cứu giá trực tuyến
                </Link>
                {/* Kho nhận hàng Accordion */}
                <div className="border-b border-slate-100 pb-2">
                  <button
                    onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                    className="flex items-center justify-between w-full py-3 text-lg font-bold text-slate-800"
                  >
                    Kho nhận hàng
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-transform",
                        mobileLocationsOpen && "rotate-180 text-brand-orange",
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileLocationsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 flex flex-col space-y-4 py-3"
                      >
                        <Link
                          href="https://khocantho.klatexpress.com"
                          target="_blank"
                          className="text-sm font-medium text-slate-600"
                        >
                          Kho Cần Thơ
                        </Link>
                        <Link
                          href="https://khodongthap.klatexpress.com"
                          target="_blank"
                          className="text-sm font-medium text-slate-600"
                        >
                          Kho Đồng Tháp
                        </Link>
                        <Link
                          href="https://khovinhlong.klatexpress.com"
                          target="_blank"
                          className="text-sm font-medium text-slate-600"
                        >
                          Kho Vĩnh Long
                        </Link>
                        <Link
                          href="https://khocantho.klatexpress.com"
                          target="_blank"
                          className="text-sm font-medium text-slate-600"
                        >
                          Kho TP. HCM
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link
                  href="/hinh-anh"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-bold text-slate-800 border-b border-slate-100"
                >
                  Hình ảnh
                </Link>
                <Link
                  href="/blogs"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-bold text-slate-800 border-b border-slate-100"
                >
                  Tin tức
                </Link>
                <Link
                  href="/lien-he"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-bold text-slate-800"
                >
                  Liên hệ
                </Link>
              </div>

              {/* Mobile CTA Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">
                      Hotline 24/7
                    </p>
                    <a
                      href="tel:0907139747"
                      className="text-lg font-black text-brand-blue"
                    >
                      0907 139 747
                    </a>
                  </div>
                </div>
                <Link
                  href="/#locations"
                  onClick={() => setIsOpen(false)}
                  className="flex justify-center items-center w-full bg-brand-orange text-white py-3.5 rounded-xl font-bold shadow-lg shadow-orange-500/30"
                >
                  Nhận Báo Giá Ngay
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <QuotePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
