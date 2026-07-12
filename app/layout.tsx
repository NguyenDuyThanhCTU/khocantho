// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/navbar";
import Footer from "@/components/Layout/footer";
import FinalCTA from "@/components/Layout/FinalCTA";
import Locations from "@/components/Home/Locations";
import FloatingButtons from "@/components/Layout/FloatingButtons";
import { GoogleTagManager } from "@next/third-parties/google";
// Tối ưu font loading với CSS Variables
const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khocantho.klatexpress.com"),

  title: {
    default:
      "An Tâm Express | Gửi Hàng Đi Mỹ, Úc, Canada Giá Rẻ Tại khu vực Miền Tây",
    template: "%s | An Tâm Express Miền Tây",
  },

  description:
    "Dịch vụ chuyển phát nhanh quốc tế uy tín số 1 tại khu vực Miền Tây. Chuyên tuyến Mỹ, Úc, Canada, Châu Âu bao thuế. Nhận hàng tận nhà miễn phí, hút chân không, đóng gói chuẩn FDA.",

  keywords: [
    "gửi hàng đi mỹ",
    "chuyển phát nhanh quốc tế miền tây",
    "gửi hàng đi úc giá rẻ",
    "vận chuyển hàng hóa quốc tế",
    "an tâm express",
    "gửi thực phẩm đi mỹ",
    "gửi thuốc tây đi nước ngoài",
    "ship hàng đi canada bao thuế",
  ],

  authors: [
    { name: "An Tâm Express Team", url: "https://khocantho.klatexpress.com" },
  ],
  creator: "An Tâm Express",
  publisher: "An Tâm Express Logistics",

  // Cấu hình hiển thị khi share lên Facebook/Zalo
  openGraph: {
    title: "An Tâm Express - Gửi Hàng Quốc Tế Nhanh & Rẻ Nhất Miền Tây",
    description:
      "Miễn phí lấy hàng tận nhà tại Khu vực Miền Tây. Bao thuế nhập khẩu, đền bù 100% giá trị hàng hóa.",
    url: "https://khocantho.klatexpress.com",
    siteName: "An Tâm Express",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/klatexpress/KHO%20HCM.jpg",
        width: 1200,
        height: 630,
        alt: "Dịch vụ gửi hàng đi Mỹ An Tâm Express",
      },
    ],
  },

  // Khai báo cho Google Bot
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL (Tránh trùng lặp nội dung)
  alternates: {
    canonical: "https://khocantho.klatexpress.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // Xác minh chủ sở hữu (Google Search Console)
  // verification: {
  //   google: 'mã-xác-minh-google',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <GoogleTagManager gtmId="GTM-WDB43D93" />
      <body
        className={`${inter.variable} font-sans bg-brand-light text-slate-800 antialiased selection:bg-brand-orange selection:text-white flex flex-col min-h-screen`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-WDB43D93`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        {/* pt-20 để bù trừ cho Fixed Navbar */}
        <main className="flex-grow pt-20">{children}</main>
        <Locations />
        <FinalCTA />
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
