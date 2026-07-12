"use client";
import { useState, useEffect } from "react";
import { ArrowUp, Phone } from "lucide-react"; // Thay Menu bằng Phone cho nút trái hợp lý hơn, hoặc giữ Menu tùy bạn
import Image from "next/image";
import Link from "next/link";
import QuotePopup from "../ui/QuotePopup";

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Danh sách các kênh Social (Thay link thật của bạn vào href)
  const socialLinks = [
    {
      id: "zalo",
      name: "Chat Zalo",
      href: "https://zalo.me/0777697056",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/120px-Icon_of_Zalo.svg.png",
    },
    {
      id: "facebook",
      name: "Facebook",
      href: "https://www.facebook.com/guihangquoctemientay/",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/120px-Facebook_Logo_%282019%29.png",
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      href: "https://www.tiktok.com/@klatexpress",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tiktok_icon.svg/120px-Tiktok_icon.svg.png?_=20240827133148",
    },
  ];

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
        <div className="bg-white text-slate-800 text-xs font-bold px-4 py-2 rounded-lg shadow-lg relative animate-bounce ml-2 border border-gray-100">
          Bạn cần hỗ trợ?
          <div className="absolute -bottom-1 left-4 w-3 h-3 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
        </div>

        <Link
          href={`tel:0777697056`}
          className="bg-[#ff3300] hover:bg-[#e62e00] text-white flex items-center gap-3 px-5 py-3 rounded-full shadow-xl transition-all transform hover:scale-105 group"
        >
          <div className="relative">
            <Phone size={20} fill="currentColor" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-[#ff3300]"></span>
            </span>
          </div>
          <span className="font-bold text-sm uppercase tracking-wide">
            Nhận báo giá
          </span>
        </Link>
      </div>

      {/* 2. Cụm nút bên phải (Socials + ScrollTop) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {/* Danh sách Social Buttons */}
        <div className="flex flex-col gap-3 pb-2">
          {socialLinks.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              target="_blank"
              className="relative w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300 group overflow-hidden border border-gray-100"
              title={item.name}
            >
              {/* Tooltip khi hover */}
              <span className="absolute right-full mr-3 bg-dark text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.name}
              </span>

              <div className="relative w-8 h-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Nút Scroll To Top (Chỉ hiện khi cuộn) */}
        <button
          onClick={scrollToTop}
          className={`w-12 h-12 bg-slate-800 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary transition-all duration-300 transform ${
            showScroll
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-0 pointer-events-none h-0 w-0 overflow-hidden m-0 p-0"
            // Khi ẩn thì thu gọn lại để social buttons không bị đẩy lên quá cao
          }`}
        >
          <ArrowUp size={24} />
        </button>
      </div>
      <QuotePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
