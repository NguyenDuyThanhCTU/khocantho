"use client";
import Script from "next/script";
import React, { useEffect, useState, useMemo } from "react";
import { ChevronDown, Search } from "lucide-react";

// Danh sách 100+ ngôn ngữ Google Translate hỗ trợ kèm mã cờ quốc gia (ISO 3166-1 alpha-2)
const LANGUAGES = [
  { code: "vi", label: "Tiếng Việt", flag: "vn" },
  { code: "en", label: "English", flag: "gb" },
  { code: "zh-CN", label: "Chinese (Simplified)", flag: "cn" },
  { code: "zh-TW", label: "Chinese (Traditional)", flag: "tw" },
  { code: "ko", label: "Korean", flag: "kr" },
  { code: "ja", label: "Japanese", flag: "jp" },
  { code: "fr", label: "French", flag: "fr" },
  { code: "de", label: "German", flag: "de" },
  { code: "es", label: "Spanish", flag: "es" },
  { code: "ru", label: "Russian", flag: "ru" },
  { code: "th", label: "Thai", flag: "th" },
  { code: "lo", label: "Lao", flag: "la" },
  { code: "km", label: "Khmer", flag: "kh" },
  { code: "ms", label: "Malay", flag: "my" },
  { code: "id", label: "Indonesian", flag: "id" },
  { code: "tl", label: "Filipino", flag: "ph" },
  { code: "hi", label: "Hindi", flag: "in" },
  { code: "ar", label: "Arabic", flag: "sa" },
  { code: "pt", label: "Portuguese", flag: "pt" },
  { code: "it", label: "Italian", flag: "it" },
  { code: "nl", label: "Dutch", flag: "nl" },
  { code: "tr", label: "Turkish", flag: "tr" },
  { code: "pl", label: "Polish", flag: "pl" },
  { code: "sv", label: "Swedish", flag: "se" },
  { code: "da", label: "Danish", flag: "dk" },
  { code: "fi", label: "Finnish", flag: "fi" },
  { code: "no", label: "Norwegian", flag: "no" },
  { code: "cs", label: "Czech", flag: "cz" },
  { code: "el", label: "Greek", flag: "gr" },
  { code: "he", label: "Hebrew", flag: "il" },
  { code: "hu", label: "Hungarian", flag: "hu" },
  { code: "ro", label: "Romanian", flag: "ro" },
  { code: "sk", label: "Slovak", flag: "sk" },
  { code: "uk", label: "Ukrainian", flag: "ua" },
  { code: "bg", label: "Bulgarian", flag: "bg" },
  { code: "hr", label: "Croatian", flag: "hr" },
  { code: "sr", label: "Serbian", flag: "rs" },
  { code: "sl", label: "Slovenian", flag: "si" },
  { code: "et", label: "Estonian", flag: "ee" },
  { code: "lv", label: "Latvian", flag: "lv" },
  { code: "lt", label: "Lithuanian", flag: "lt" },
  { code: "af", label: "Afrikaans", flag: "za" },
  { code: "sq", label: "Albanian", flag: "al" },
  { code: "am", label: "Amharic", flag: "et" },
  { code: "hy", label: "Armenian", flag: "am" },
  { code: "az", label: "Azerbaijani", flag: "az" },
  { code: "eu", label: "Basque", flag: "es" },
  { code: "be", label: "Belarusian", flag: "by" },
  { code: "bn", label: "Bengali", flag: "bd" },
  { code: "bs", label: "Bosnian", flag: "ba" },
  { code: "ca", label: "Catalan", flag: "ad" },
  { code: "ceb", label: "Cebuano", flag: "ph" },
  { code: "ny", label: "Chichewa", flag: "mw" },
  { code: "co", label: "Corsican", flag: "fr" },
  { code: "eo", label: "Esperanto", flag: "un" },
  { code: "fy", label: "Frisian", flag: "nl" },
  { code: "gl", label: "Galician", flag: "es" },
  { code: "ka", label: "Georgian", flag: "ge" },
  { code: "gu", label: "Gujarati", flag: "in" },
  { code: "ht", label: "Haitian Creole", flag: "ht" },
  { code: "ha", label: "Hausa", flag: "ng" },
  { code: "haw", label: "Hawaiian", flag: "us" },
  { code: "hmn", label: "Hmong", flag: "la" },
  { code: "is", label: "Icelandic", flag: "is" },
  { code: "ig", label: "Igbo", flag: "ng" },
  { code: "ga", label: "Irish", flag: "ie" },
  { code: "jw", label: "Javanese", flag: "id" },
  { code: "kn", label: "Kannada", flag: "in" },
  { code: "kk", label: "Kazakh", flag: "kz" },
  { code: "ku", label: "Kurdish (Kurmanji)", flag: "iq" },
  { code: "ky", label: "Kyrgyz", flag: "kg" },
  { code: "la", label: "Latin", flag: "va" },
  { code: "lb", label: "Luxembourgish", flag: "lu" },
  { code: "mk", label: "Macedonian", flag: "mk" },
  { code: "mg", label: "Malagasy", flag: "mg" },
  { code: "ml", label: "Malayalam", flag: "in" },
  { code: "mt", label: "Maltese", flag: "mt" },
  { code: "mi", label: "Maori", flag: "nz" },
  { code: "mr", label: "Marathi", flag: "in" },
  { code: "mn", label: "Mongolian", flag: "mn" },
  { code: "my", label: "Myanmar (Burmese)", flag: "mm" },
  { code: "ne", label: "Nepali", flag: "np" },
  { code: "ps", label: "Pashto", flag: "af" },
  { code: "fa", label: "Persian", flag: "ir" },
  { code: "pa", label: "Punjabi", flag: "in" },
  { code: "sm", label: "Samoan", flag: "ws" },
  { code: "gd", label: "Scots Gaelic", flag: "gb" },
  { code: "st", label: "Sesotho", flag: "ls" },
  { code: "sn", label: "Shona", flag: "zw" },
  { code: "sd", label: "Sindhi", flag: "pk" },
  { code: "si", label: "Sinhala", flag: "lk" },
  { code: "so", label: "Somali", flag: "so" },
  { code: "su", label: "Sundanese", flag: "id" },
  { code: "sw", label: "Swahili", flag: "ke" },
  { code: "tg", label: "Tajik", flag: "tj" },
  { code: "ta", label: "Tamil", flag: "in" },
  { code: "te", label: "Telugu", flag: "in" },
  { code: "ur", label: "Urdu", flag: "pk" },
  { code: "uz", label: "Uzbek", flag: "uz" },
  { code: "cy", label: "Welsh", flag: "gb" },
  { code: "xh", label: "Xhosa", flag: "za" },
  { code: "yi", label: "Yiddish", flag: "il" },
  { code: "yo", label: "Yoruba", flag: "ng" },
  { code: "zu", label: "Zulu", flag: "za" },
];

const GoogleTranslate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("vi");
  const [searchTerm, setSearchTerm] = useState("");

  // Lọc ngôn ngữ dựa trên từ khóa tìm kiếm
  const filteredLanguages = useMemo(() => {
    return LANGUAGES.filter((lang) =>
      lang.label.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  // Hàm khởi tạo Google Translate
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "vi",
          // Đã xóa thuộc tính includedLanguages để Google tự động hỗ trợ tất cả ngôn ngữ
          autoDisplay: false,
        },
        "google_translate_element",
      );
    };

    // Kiểm tra cookie để set lại ngôn ngữ hiện tại khi reload trang
    const cookies = document.cookie.split(";");
    const langCookie = cookies.find((c) => c.trim().startsWith("googtrans="));
    if (langCookie) {
      // Cookie format: googtrans=/vi/en
      const langCode = langCookie.split("/")[2];
      if (langCode) setCurrentLang(langCode);
    }
  }, []);

  // Hàm đổi ngôn ngữ
  const handleChangeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);
    setSearchTerm(""); // Reset thanh tìm kiếm

    // Tìm thẻ select ẩn của Google và kích hoạt event change
    const selectElement = document.querySelector(
      ".goog-te-combo",
    ) as HTMLSelectElement;

    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event("change"));
    }
  };

  const selectedLang =
    LANGUAGES.find((lang) => lang.code === currentLang) || LANGUAGES[0];

  return (
    <div className="relative z-50">
      {/* Mảng che mờ khi bật dropdown (click ra ngoài để đóng) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Widget Google ẩn */}
      <div id="google_translate_element" className="hidden"></div>

      {/* Script Google */}
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      {/* UI Custom Dropdown */}
      <div className="relative z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-sm hover:bg-gray-50 transition-all"
        >
          <div className="relative w-6 h-4 overflow-hidden rounded-sm border border-gray-100">
            <img
              src={`https://flagcdn.com/w40/${selectedLang.flag}.png`}
              alt={selectedLang.label}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-sm font-medium text-gray-700 hidden sm:block">
            {selectedLang.label}
          </span>
          <ChevronDown size={14} className="text-gray-500" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-in fade-in zoom-in duration-200">
            {/* Thanh tìm kiếm */}
            <div className="px-3 pb-2 mb-2 border-b border-gray-100 sticky top-0 bg-white">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm ngôn ngữ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-shadow"
                />
              </div>
            </div>

            {/* Danh sách cuộn */}
            <div className="max-h-80 overflow-y-auto custom-scrollbar px-1">
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleChangeLanguage(lang.code)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      currentLang === lang.code
                        ? "text-blue-700 bg-blue-50 font-bold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="relative w-6 h-4 overflow-hidden rounded-sm border border-gray-200 shadow-sm shrink-0">
                      <img
                        src={`https://flagcdn.com/w40/${lang.flag}.png`}
                        alt={lang.label}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <span className="truncate">{lang.label}</span>
                  </button>
                ))
              ) : (
                <div className="py-4 text-center text-sm text-gray-500">
                  Không tìm thấy ngôn ngữ
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoogleTranslate;

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: any;
  }
}
