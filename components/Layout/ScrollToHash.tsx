"use client";

import { useEffect } from "react";

export default function ScrollToHash() {
  useEffect(() => {
    // Lấy phần hash từ URL (ví dụ: "#calculator")
    const hash = window.location.hash;

    if (hash) {
      // Dùng setTimeout để delay một chút, make sure DOM đã render 100%
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // 100 milliseconds thường là đủ
    }
  }, []);

  return null; // Component này chạy ngầm, không render ra UI
}
