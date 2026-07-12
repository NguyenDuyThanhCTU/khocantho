"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Info,
  Globe,
  ChevronDown,
} from "lucide-react";
import Papa from "papaparse";
import Link from "next/link";

// DÁN LINK GOOGLE SHEET CSV CỦA BẠN VÀO ĐÂY
const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vS7AEgKZDjgti2wnTg5yJJ-_vj5wTsxALNjjb_Nxcb8lwW9vkOdc7wrtMPlUIMxpg/pub?gid=2130172263&single=true&output=csv";

const parseCurrency = (value: any) => {
  if (!value) return 0;
  return parseInt(String(value).replace(/\./g, "").trim(), 10);
};

export default function ShippingCalculator() {
  const [pricingData, setPricingData] = useState<any>({});
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    Papa.parse(GOOGLE_SHEET_CSV_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsedData: any = {};
        results.data.forEach((row: any) => {
          if (row.id) {
            parsedData[row.id] = {
              ...row,
              features: row.features
                ? row.features.split(";").map((f: any) => f.trim())
                : [],
            };
          }
        });
        console.log(`Dữ liệu đã được tải thành công:`, parsedData, results);
        setPricingData(parsedData);
        if (Object.keys(parsedData).length > 0) {
          setSelectedCountry(Object.keys(parsedData)[0]);
        }
        setIsLoadingData(false);
      },
      error: (error) => {
        console.error("Lỗi khi tải dữ liệu:", error);
        setIsLoadingData(false);
      },
    });
  }, []);

  const currentConfig = pricingData[selectedCountry];

  const calculate = () => {
    if (!currentConfig) return;

    const actualWeight = Number(weight) || 0;
    const l = Number(length) || 0;
    const w = Number(width) || 0;
    const h = Number(height) || 0;

    if (actualWeight === 0 && l * w * h === 0) {
      alert("Vui lòng nhập trọng lượng hoặc kích thước kiện hàng!");
      return;
    }

    const divisor = Number(currentConfig.divisor) || 5000;
    const volumetricWeight = (l * w * h) / divisor;

    // So sánh lấy số lớn hơn
    let baseWeight = Math.max(actualWeight, volumetricWeight);

    // Làm tròn 0.5kg (vd: 1.2 -> 1.5 | 1.6 -> 2.0 | 1.5 -> 1.5)
    let chargeableWeight = Math.ceil(baseWeight * 2) / 2;
    if (chargeableWeight < 1) chargeableWeight = 1;

    let totalPrice = 0;

    // Helper function kiểm tra xem số kg có lọt vào một Tier cụ thể không
    const getTierRate = (minStr: any, maxStr: any, rateStr: any) => {
      if (!minStr || !rateStr) return null;

      const min = Number(minStr);
      const max = maxStr ? Number(maxStr) : Infinity;

      if (chargeableWeight >= min && chargeableWeight <= max) {
        return parseCurrency(rateStr);
      }
      return null;
    };

    // Kiểm tra tuần tự từ T1 đến T4
    let appliedTierRate =
      getTierRate(
        currentConfig.t1_min,
        currentConfig.t1_max,
        currentConfig.t1_rate,
      ) ||
      getTierRate(
        currentConfig.t2_min,
        currentConfig.t2_max,
        currentConfig.t2_rate,
      ) ||
      getTierRate(
        currentConfig.t3_min,
        currentConfig.t3_max,
        currentConfig.t3_rate,
      ) ||
      getTierRate(
        currentConfig.t4_min,
        currentConfig.t4_max,
        currentConfig.t4_rate,
      );

    if (appliedTierRate !== null) {
      totalPrice = chargeableWeight * appliedTierRate;
    } else {
      if (chargeableWeight % 1 === 0) {
        let columnName = `kg_${chargeableWeight}`;
        totalPrice = parseCurrency(currentConfig[columnName]);
      } else {
        let lowerWeight = Math.floor(chargeableWeight);
        let upperWeight = Math.ceil(chargeableWeight);

        let priceLower = parseCurrency(currentConfig[`kg_${lowerWeight}`]);
        let priceUpper = parseCurrency(currentConfig[`kg_${upperWeight}`]);

        totalPrice = (priceLower + priceUpper) / 2;
      }
    }

    setResult({
      price: totalPrice,
      chargeableWeight: chargeableWeight,
      actualWeight: actualWeight,
      volumetricWeight: volumetricWeight,
    });
  };

  const handleCountryChange = (e: any) => {
    setSelectedCountry(e.target.value);
    setResult(null);
  };

  if (isLoadingData) {
    return (
      <section className="py-20 bg-brand-900 text-white min-h-[600px] flex flex-col items-center justify-center">
        <Loader2 className="w-12 h-12 text-brand-400 animate-spin mb-4" />
        <p className="text-xl font-bold">Đang đồng bộ bảng giá mới nhất...</p>
      </section>
    );
  }

  return (
    <>
      <section
        id="calculator"
        className="py-20 bg-brand-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 bg-repeat"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left: Intro & Services */}
            <div className="lg:w-1/3 space-y-6 pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 text-xs font-bold uppercase tracking-wider border border-accent-500/20">
                <Calculator className="w-4 h-4" /> Công cụ ước tính
              </div>

              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                Tra Cứu <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-400">
                  Giá Cước Online
                </span>
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed">
                Hệ thống tự động tính toán cước phí tối ưu nhất cho kiện hàng
                của bạn dựa trên khối lượng và kích thước.
              </p>

              {/* Dịch vụ miễn phí */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-lg font-bold text-white mb-4">
                  Dịch vụ đi kèm miễn phí:
                </h3>
                <div className="space-y-3">
                  {[
                    "Lấy hàng & Giao tận nhà",
                    "Đóng thùng Carton chuyên dụng",
                    "Hút chân không thực phẩm",
                    "Hỗ trợ thủ tục, nhãn mác",
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="p-1 rounded-full bg-green-500/20">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      </div>
                      <span className="text-slate-200 font-medium">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div className="lg:w-2/3 w-full">
              <div className="bg-white rounded-3xl p-6 md:p-8 text-slate-900 shadow-2xl relative overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-10 pb-8 border-b border-slate-200">
                  {/* Khu vực Chọn Quốc gia */}
                  <div className="w-full md:w-auto relative group">
                    <label className="text-xs font-black text-brand-600 uppercase tracking-widest flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                      Bước 1: Chọn quốc gia đến
                    </label>

                    <div className="relative flex items-center bg-slate-50 border-2 border-slate-100 hover:border-brand-300 transition-all rounded-2xl p-2 pr-14 cursor-pointer focus-within:border-brand-500 focus-within:bg-white focus-within:shadow-[0_0_20px_rgba(37,99,235,0.05)]">
                      <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 text-brand-600 mr-4 border border-slate-100">
                        <Globe className="w-6 h-6 animate-[spin_10s_linear_infinite]" />
                      </div>

                      <select
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        className="w-full min-w-[200px] bg-transparent font-black text-xl md:text-2xl text-slate-900 outline-none cursor-pointer appearance-none"
                      >
                        {Object.values(pricingData).map((cfg: any) => (
                          <option key={cfg.id} value={cfg.id}>
                            {cfg.name}
                          </option>
                        ))}
                      </select>

                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-brand-500 transition-colors">
                        <ChevronDown className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Huy hiệu Đơn vị Tiền tệ */}
                  <div className="hidden md:flex flex-col items-end">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Đơn vị tiền tệ
                    </span>
                    <div className="px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-100 font-black text-slate-600 text-sm shadow-sm flex items-center gap-2">
                      VNĐ
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Input Column */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Trọng lượng (kg)
                      </label>
                      <div className="relative group">
                        <input
                          type="number"
                          min="0"
                          step="0.1"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          placeholder="Nhập số kg..."
                          className="w-full h-14 pl-4 pr-12 rounded-xl border-2 border-slate-200 focus:border-brand-500 outline-none text-xl font-bold transition-all group-hover:border-slate-300"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                          KG
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <label className="block text-sm font-bold text-slate-700">
                          Kích thước (cm)
                        </label>
                        <span className="text-xs text-slate-400">
                          Không bắt buộc
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {["Dài", "Rộng", "Cao"].map((label, idx) => (
                          <input
                            key={label}
                            type="number"
                            min="0"
                            placeholder={label}
                            value={
                              idx === 0 ? length : idx === 1 ? width : height
                            }
                            onChange={(e) => {
                              if (idx === 0) setLength(e.target.value);
                              if (idx === 1) setWidth(e.target.value);
                              if (idx === 2) setHeight(e.target.value);
                            }}
                            className="w-full h-12 px-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-500 outline-none text-center font-semibold text-slate-700 transition-all"
                          />
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={calculate}
                      className="w-full h-14 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-lg shadow-brand-500/30 transition-all flex items-center justify-center gap-2 text-lg active:scale-95"
                    >
                      Tra cứu ngay <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Result Column */}
                  <div className="relative">
                    <AnimatePresence mode="wait">
                      {!result ? (
                        <motion.div
                          key="empty"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="h-full flex flex-col items-center justify-center text-center p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-300"
                        >
                          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                            <Calculator className="w-8 h-8 text-slate-300" />
                          </div>
                          <p className="text-slate-500 font-medium">
                            Nhập thông tin bên trái để xem kết quả
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="result"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="h-full bg-brand-50 rounded-2xl border border-brand-100 p-6 flex flex-col"
                        >
                          {/* Hộp so sánh cân nặng Highlight */}
                          <div className="grid grid-cols-2 gap-3 mb-6">
                            {/* Cân nặng thực tế */}
                            <div
                              className={`p-3 rounded-xl border-2 transition-all relative ${result.actualWeight >= result.volumetricWeight ? "border-brand-500 bg-white shadow-sm" : "border-brand-100/50 bg-brand-100/30 opacity-60"}`}
                            >
                              {result.actualWeight >=
                                result.volumetricWeight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                                  Áp dụng
                                </div>
                              )}
                              <p className="text-[11px] text-slate-500 font-bold uppercase text-center mb-1 mt-1">
                                Khối lượng
                              </p>
                              <p
                                className={`text-center font-black ${result.actualWeight >= result.volumetricWeight ? "text-xl text-brand-700" : "text-lg text-slate-600"}`}
                              >
                                {result.actualWeight}{" "}
                                <span className="text-xs font-medium">kg</span>
                              </p>
                            </div>

                            {/* Trọng lượng thể tích */}
                            <div
                              className={`p-3 rounded-xl border-2 transition-all relative ${result.volumetricWeight > result.actualWeight ? "border-brand-500 bg-white shadow-sm" : "border-brand-100/50 bg-brand-100/30 opacity-60"}`}
                            >
                              {result.volumetricWeight >
                                result.actualWeight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                                  Áp dụng
                                </div>
                              )}
                              <div className="flex justify-center items-center gap-1 mb-1 mt-1">
                                <p className="text-[11px] text-slate-500 font-bold uppercase">
                                  Thể tích
                                </p>
                                <div className="group relative cursor-help">
                                  <Info className="w-3 h-3 text-slate-400" />
                                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                                    Quy đổi: (Dài x Rộng x Cao) /{" "}
                                    {currentConfig.divisor || 5000}
                                  </div>
                                </div>
                              </div>
                              <p
                                className={`text-center font-black ${result.volumetricWeight > result.actualWeight ? "text-xl text-brand-700" : "text-lg text-slate-600"}`}
                              >
                                {result.volumetricWeight}{" "}
                                <span className="text-xs font-medium">kg</span>
                              </p>
                            </div>
                          </div>

                          {/* Tổng tiền */}
                          <div className="text-center mb-6">
                            <p className="text-sm text-brand-600 font-bold uppercase tracking-wider mb-1">
                              Tổng cước phí ước tính
                            </p>
                            <div className="text-4xl font-black text-slate-900">
                              {result.price > 0 ? (
                                new Intl.NumberFormat("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(result.price)
                              ) : (
                                <span className="text-red-500 text-lg leading-tight block">
                                  Mốc này cần báo giá trực tiếp
                                </span>
                              )}
                            </div>

                            {!result.price && (
                              <Link
                                href="tel:0777697056"
                                className="mt-4 w-full bg-brand-700 hover:bg-brand-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                              >
                                <Calculator className="w-5 h-5" />
                                Nhận báo giá chính xác
                              </Link>
                            )}

                            {/* HIỂN THỊ MỨC KG VÀ ĐƠN GIÁ TRUNG BÌNH */}
                            {result.price > 0 && (
                              <div className="mt-3 p-3 bg-white rounded-xl border border-brand-100 shadow-sm inline-block">
                                <p className="text-sm font-semibold text-slate-600">
                                  Tính cước cho mức:{" "}
                                  <span className="text-brand-700 font-black text-base">
                                    {result.chargeableWeight} kg
                                  </span>
                                </p>
                                <p className="text-xs font-medium text-slate-500 mt-1">
                                  Tương đương:{" "}
                                  <span className="text-slate-800 font-bold">
                                    {new Intl.NumberFormat("vi-VN", {
                                      style: "currency",
                                      currency: "VND",
                                    }).format(
                                      Math.round(
                                        result.price / result.chargeableWeight,
                                      ),
                                    )}
                                  </span>
                                  /kg
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Note Rules */}
                          <div className="mt-auto pt-5 border-t border-brand-200">
                            <p className="text-xs font-bold text-slate-800 mb-2 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4 text-orange-500" />{" "}
                              Lưu ý quan trọng:
                            </p>
                            <ul className="text-[11px] text-slate-600 space-y-1.5 list-disc pl-4 marker:text-brand-300">
                              <li>Giá chưa bao gồm phí phụ thu (Nếu có).</li>
                              <li>
                                Số kg thực tế sau khi đóng thùng có thể chênh
                                lệch ~1kg/Kiện.
                              </li>
                              <li>
                                Hàng đi tối đa 25kg/kiện (Gửi nhiều hơn sẽ tự
                                động tách kiện).
                              </li>
                              <li>
                                Hàng quá khổ sẽ tính theo thể tích thay vì khối
                                lượng.
                              </li>
                              <li>
                                <span className="font-semibold text-red-500">
                                  Không nhận:
                                </span>{" "}
                                thịt heo, bò, gà, trứng, yến, hàng fake...
                              </li>
                              <li>
                                <span className="font-semibold text-red-500">
                                  Tuyến tàu biển:
                                </span>{" "}
                                Nhận tối thiểu từ 5kg trở lên.
                              </li>
                              <li>
                                Giá trị hàng hoá trên 3 triệu VNĐ khuyến nghị
                                mua bảo hiểm.
                              </li>
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
