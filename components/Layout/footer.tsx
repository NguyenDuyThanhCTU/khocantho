// components/layout/Footer.tsx
import Link from "next/link";
import {
  PlaneTakeoff,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy pt-16 pb-6 text-slate-300">
      <div className="container mx-auto px-4 md:px-8">
        {/* Tier 1: 4 Cột Nội Dung */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Cột 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 text-white">
              <img
                className="w-40"
                alt="logo"
                src="https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/klatexpress/Logo.png"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Đối tác vận chuyển quốc tế tin cậy của bạn. Chúng tôi chuyên cung
              cấp giải pháp logistics toàn diện từ Miền Tây đi khắp thế giới với
              cam kết an toàn, nhanh chóng và tối ưu chi phí.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Cột 2: Dịch Vụ Nổi Bật */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Dịch Vụ Nổi Bật
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/dich-vu/my"
                  className="hover:text-brand-orange transition-colors"
                >
                  Gửi hàng đi Mỹ
                </Link>
              </li>
              <li>
                <Link
                  href="/dich-vu/uc"
                  className="hover:text-brand-orange transition-colors"
                >
                  Gửi hàng đi Úc
                </Link>
              </li>
              <li>
                <Link
                  href="/dich-vu/canada"
                  className="hover:text-brand-orange transition-colors"
                >
                  Gửi hàng đi Canada
                </Link>
              </li>
              <li>
                <Link
                  href="/dich-vu/chau-a"
                  className="hover:text-brand-orange transition-colors"
                >
                  Chuyển phát nhanh Châu Á
                </Link>
              </li>
              <li>
                <Link
                  href="/dich-vu/chau-au"
                  className="hover:text-brand-orange transition-colors"
                >
                  Chuyển phát nhanh Châu Âu
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Hỗ Trợ Khách Hàng */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Hỗ Trợ Khách Hàng
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/bang-gia"
                  className="hover:text-brand-orange transition-colors"
                >
                  Bảng giá cước
                </Link>
              </li>
              <li>
                <Link
                  href="/quy-dinh-gui-hang"
                  className="hover:text-brand-orange transition-colors"
                >
                  Quy định gửi hàng
                </Link>
              </li>
              <li>
                <Link
                  href="/huong-dan-dong-goi"
                  className="hover:text-brand-orange transition-colors"
                >
                  Hướng dẫn đóng gói
                </Link>
              </li>
              <li>
                <Link
                  href="/cau-hoi-thuong-gap"
                  className="hover:text-brand-orange transition-colors"
                >
                  Câu hỏi thường gặp (FAQ)
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-brand-orange transition-colors"
                >
                  Tin tức & Sự kiện
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 4: Hệ Thống Kho Nhận Hàng */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Liên Hệ & Kho Bãi
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Trụ sở Bến Tre:</strong> F12A
                  KĐT Hưng Phú, Phường Phú Tân, Tỉnh Vĩnh Long ( Bến Tre Cũ)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Kho Cần Thơ:</strong> 38/42 Mậu
                  Thân, Phường Cái Khế, Thành Phố Cần Thơ (Phường An Hòa Cũ)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Kho TP. Hồ Chí Minh:</strong>{" "}
                  45/10 Cao Lỗ, Phường Chánh Hưng, TP HCM
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Kho Mỹ Tho Cũ</strong> 139/5
                  Trần Hưng Đạo, Phường Thới Sơn, Tỉnh Đồng Tháp ( Mỹ Tho Cũ )
                </span>
              </li>

              <li className="flex items-center gap-3 mt-4">
                <Phone className="w-5 h-5 text-brand-orange" />
                <span>
                  Hotline: <Link href="tel:0911 204 954">0911 204 954</Link>
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-orange" />
                <span>vanchuyenklat.express@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tier 2: Footer Bottom */}
        <div className="pt-8 border-t border-slate-700/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} www.khocantho.klatexpress.com. All
            rights reserved.
            <br />
            Website được thiết kế bởi{" "}
            <Link target="_blank" href="https://www.facebook.com/DuyThanhCTU/">
              Duy Thanh
            </Link>
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <Link
              href="/dieu-khoan"
              className="hover:text-white transition-colors"
            >
              Điều khoản sử dụng
            </Link>
            <span className="hidden md:inline text-slate-600">|</span>
            <Link
              href="/bao-mat"
              className="hover:text-white transition-colors"
            >
              Chính sách bảo mật
            </Link>
            <span className="hidden md:inline text-slate-600">|</span>
            <Link href="/gpkd" className="hover:text-white transition-colors">
              Giấy phép kinh doanh
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
