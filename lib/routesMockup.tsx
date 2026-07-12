// src/lib/routesMockup.ts

// 1. ĐỊNH NGHĨA KIỂU DỮ LIỆU (TYPES)
export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceRoute {
  id: string;
  slug: string;
  country: string;
  region: string;
  title: string;
  excerpt: string;
  basePrice: string;
  estimatedTime: string;
  coverImage: string;
  features: string[];
  description: string; // Nội dung HTML chuẩn SEO
  allowedItems: string[];
  restrictedItems: string[];
  faqs: FAQ[];
}

// 2. DỮ LIỆU GIẢ LẬP ĐẦY ĐỦ CÁC TUYẾN
export const SERVICE_ROUTES: ServiceRoute[] = [
  // --- CHÂU MỸ & ÚC ---
  {
    id: "route-us",
    slug: "gui-hang-di-my",
    country: "Mỹ (USA)",
    region: "Châu Mỹ & Úc",
    title: "Dịch Vụ Gửi Hàng Đi Mỹ Bao Thuế, Nhanh Chóng Từ Miền Tây",
    excerpt:
      "Chuyên tuyến gửi hàng đi Mỹ (Hoa Kỳ) từ Cần Thơ và Miền Tây. Xử lý trọn gói giấy phép FDA, bao thuế nhập khẩu, thời gian bay thẳng chỉ từ 5-7 ngày.",
    basePrice: "190.000",
    estimatedTime: "5-7 ngày",
    coverImage:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
    features: ["Bao thuế FDA", "Bay thẳng", "Giao tận nhà"],
    description: `
      <h2>Tại sao chọn An Tâm Express để gửi hàng đi Mỹ?</h2>
      <p>Mỹ (Hoa Kỳ) là một trong những thị trường có quy định hải quan khắt khe nhất thế giới, đặc biệt đối với thực phẩm và mỹ phẩm. Với kinh nghiệm lâu năm, An Tâm Express cung cấp giải pháp <strong>gửi hàng đi Mỹ bao thuế trọn gói</strong> an toàn tuyệt đối.</p>
      <h3>Ưu điểm vượt trội:</h3>
      <ul>
        <li><strong>Xử lý FDA miễn phí:</strong> Đăng ký mã số Cục Quản lý Thực phẩm và Dược phẩm Hoa Kỳ miễn phí.</li>
        <li><strong>Nhãn mác tiếng Anh:</strong> Dịch và làm lại tem nhãn cho các loại khô, mắm nhà làm.</li>
        <li><strong>Bay thẳng không lưu kho:</strong> Kết nối trực tiếp đến California, Texas, New York.</li>
      </ul>
    `,
    allowedItems: [
      "Thực phẩm khô: Cá khô, tôm khô, mực khô (không mùi)",
      "Đồ ăn vặt: Bánh pía, mứt, kẹo, trái cây sấy",
      "Quần áo, giày dép, túi xách (không nhái thương hiệu lớn)",
      "Hồ sơ, chứng từ du học",
    ],
    restrictedItems: [
      "Thịt động vật trên cạn (heo, bò, gà) dưới mọi hình thức",
      "Hàng fake, nhái thương hiệu lớn",
    ],
    faqs: [
      {
        question: "Gửi mắm đi Mỹ có được không?",
        answer:
          "Hoàn toàn được. Chúng tôi đóng hũ nhựa seal nhôm, quấn xốp và hút chân không 3 lớp đảm bảo không rò rỉ mùi.",
      },
      {
        question: "Cước 190k/kg áp dụng khi nào?",
        answer:
          "Áp dụng cho các lô hàng từ 21kg trở lên. Các mức kg nhỏ hơn có bảng giá bậc thang riêng.",
      },
    ],
  },
  {
    id: "route-aus",
    slug: "gui-hang-di-uc",
    country: "Úc (AUS)",
    region: "Châu Mỹ & Úc",
    title: "Gửi Hàng Đi Úc Siêu Tốc Giá Rẻ Từ Cần Thơ",
    excerpt:
      "Kết nối đường bay thẳng đi Sydney, Melbourne. Miễn phí đóng gói, cước phí siêu tiết kiệm chỉ từ 150.000đ/kg.",
    basePrice: "150.000",
    estimatedTime: "6-10 ngày",
    coverImage:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop",
    features: ["Phí siêu tiết kiệm", "Bao thuế", "Giao tận nhà"],
    description: `
      <h2>Giải pháp gửi hàng đi Úc tối ưu chi phí</h2>
      <p>Chính phủ Úc có quy định cực kỳ nghiêm ngặt về An toàn sinh học (Biosecurity). Bất kỳ sản phẩm nào dính hạt giống, rễ cây, lông vũ... đều bị tiêu hủy.</p>
      <h3>Lợi ích khi gửi qua An Tâm Express:</h3>
      <ul>
        <li>Hỗ trợ kiểm tra, loại bỏ thành phần rủi ro sinh học trước khi bay.</li>
        <li>Khai báo tờ khai nguồn gốc xuất xứ rõ ràng.</li>
        <li>Hỗ trợ hút chân không nệm Kymdan, quần áo để giảm cước thể tích.</li>
      </ul>
    `,
    allowedItems: [
      "Đồ dùng gia đình: Nồi niêu, chén bát, nệm Kymdan",
      "Quần áo, đồ cưới, đồ thủ công mỹ nghệ",
      "Thực phẩm khô công nghiệp (có bao bì)",
    ],
    restrictedItems: [
      "Thịt động vật trên cạn (heo, bò, gà) dưới mọi hình thức",
      "Sản phẩm từ trứng và sữa (kể cả bánh nhân trứng muối)",
      "Hạt giống",
      "Sản phẩm làm từ gỗ có dính vỏ cây",
    ],
    faqs: [
      {
        question: "Tôi gửi nệm Kymdan đi Úc được không?",
        answer:
          "Được. Chúng tôi có máy ép xẹp nệm và cuộn tròn giúp tiết kiệm đến 40% chi phí thể tích.",
      },
    ],
  },
  {
    id: "route-can",
    slug: "gui-hang-di-canada",
    country: "Canada (CAN)",
    region: "Châu Mỹ & Úc",
    title: "Gửi Hàng Đi Canada An Toàn, Khai Báo Điện Tử Trọn Gói",
    excerpt:
      "Dịch vụ gửi hàng đi Toronto, Vancouver với hệ thống khai báo hải quan điện tử (E-manifest) thông minh, giúp thông quan nhanh chóng, minh bạch.",
    basePrice: "190.000",
    estimatedTime: "5-7 ngày",
    coverImage:
      "https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?q=80&w=2070&auto=format&fit=crop",
    features: ["Khai báo điện tử", "Bay thẳng", "Giao tận nhà"],
    description: `
      <h2>Thông quan điện tử đi Canada nhanh chóng</h2>
      <p>Canada áp dụng hệ thống hải quan điện tử nghiêm ngặt. An Tâm Express tích hợp sẵn hệ thống khai báo E-manifest, giúp hàng hóa từ Miền Tây qua Canada hợp lệ ngay khi vừa hạ cánh.</p>
      <ul>
        <li><strong>Xử lý hàng mây tre đan:</strong> Chúng tôi hỗ trợ giấy chứng nhận hun trùng (Fumigation) cho các mặt hàng thủ công mỹ nghệ.</li>
        <li><strong>Giao tận nơi:</strong> Door-to-door đến tận nhà người thân tại Toronto, Vancouver, Montreal.</li>
      </ul>
    `,
    allowedItems: [
      "Quần áo giữ ấm, đồ đan len, áo khoác",
      "Sản phẩm thủ công mỹ nghệ (đã qua hun trùng)",
      "Sách vở, tài liệu, hồ sơ định cư",
      "Thực phẩm khô đóng gói chuẩn",
    ],
    restrictedItems: [
      "Thịt động vật trên cạn (heo, bò, gà) dưới mọi hình thức",
      "Sản phẩm từ trứng và sữa (kể cả bánh nhân trứng muối)",

      "Chất lỏng không rõ nguồn gốc",
    ],
    faqs: [
      {
        question: "Hàng thủ công bằng dừa có cần hun trùng không?",
        answer:
          "Có, hải quan Canada bắt buộc hun trùng với các sản phẩm gốc thực vật/gỗ. Chúng tôi hỗ trợ làm giấy tờ này trọn gói.",
      },
    ],
  },

  // --- CHÂU Á ---
  {
    id: "route-tw-kr",
    slug: "gui-hang-di-dai-loan-han-quoc",
    country: "Đài Loan - Hàn Quốc",
    region: "Châu Á",
    title: "Chuyên Tuyến Châu Á: Gửi Hàng Đi Đài Loan, Hàn Quốc",
    excerpt:
      "Bay thẳng hàng ngày giúp hàng hóa đến Đài Loan, Hàn Quốc trong 48 giờ. Hỗ trợ thông quan siêu tốc, cước phí chỉ từ 120.000đ/kg.",
    basePrice: "120.000",
    estimatedTime: "4-6 ngày",
    coverImage:
      "https://images.unsplash.com/photo-1538626611419-f538741bc25f?q=80&w=2070&auto=format&fit=crop",
    features: ["Chuyến bay mỗi ngày", "Thông quan siêu tốc"],
    description: `
      <h2>Kết nối kiều bào Đài Loan & Hàn Quốc</h2>
      <p>Với lợi thế địa lý gần, tuyến gửi hàng đi Đài Loan và Hàn Quốc của An Tâm Express hoạt động như một hệ thống chuyển phát nhanh nội địa.</p>
      <ul>
        <li><strong>Không giới hạn trọng lượng:</strong> Phù hợp cho bà con gửi quà quê hoặc doanh nghiệp buôn bán tiểu ngạch.</li>
        <li><strong>Thông quan dễ dàng:</strong> Tỷ lệ thông quan nhanh, ít bị giữ hàng hơn so với thị trường Âu Mỹ.</li>
      </ul>
    `,
    allowedItems: [
      "Quần áo thời trang, phụ kiện",
      "Bánh kẹo, trà, cà phê",
      "Hàng mẫu doanh nghiệp",
    ],
    restrictedItems: [
      "Thịt động vật trên cạn (heo, bò, gà) dưới mọi hình thức",
      "Sản phẩm từ trứng và sữa (kể cả bánh nhân trứng muối)",
      "Vũ khí, chất nổ",
      "Tiền mặt, trang sức quý",
    ],
    faqs: [
      {
        question: "Gửi đi Đài Loan có đi trong ngày được không?",
        answer:
          "Nếu gửi trước 10h sáng, hàng sẽ bay chuyến đêm và có thể tới Đài Bắc trong 2 ngày làm việc.",
      },
    ],
  },
  {
    id: "route-jp",
    slug: "gui-hang-di-nhat-ban",
    country: "Nhật Bản (JPN)",
    region: "Châu Á",
    title: "Gửi Hàng Đi Nhật Bản Uy Tín, Bao Thuế Hàng Khó",
    excerpt:
      "Gửi thực phẩm, mỹ phẩm, linh kiện điện tử sang Nhật Bản an toàn. Bao thuế trọn gói, xử lý tờ khai nhập khẩu khắt khe của Hải quan Nhật.",
    basePrice: "160.000",
    estimatedTime: "6-8 ngày",
    coverImage:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
    features: ["Hàng khó bao thuế", "Giao tận nhà"],
    description: `
      <h2>Vượt qua hàng rào kiểm dịch Nhật Bản</h2>
      <p>Nhật Bản nổi tiếng với hệ thống kiểm dịch vô cùng chi tiết. An Tâm Express cung cấp giải pháp bao thuế và lo trọn thủ tục thông quan cho các đơn hàng gửi cho thực tập sinh, du học sinh tại Nhật.</p>
    `,
    allowedItems: [
      "Quần áo, giày dép",
      "Gia vị Việt Nam (dạng khô, đóng gói chuẩn)",
      "Hồ sơ, giấy tờ",
    ],
    restrictedItems: [
      "Thịt động vật trên cạn (heo, bò, gà) dưới mọi hình thức",
      "Sản phẩm từ trứng và sữa (kể cả bánh nhân trứng muối)",
      "Hàng giả nhái",
    ],
    faqs: [
      {
        question: "Có gửi thuốc nam sang Nhật được không?",
        answer:
          "Được, nhưng phải là loại sấy khô 100%, có nhãn mác nhà thuốc và không chứa rễ cây còn dính đất.",
      },
    ],
  },
  {
    id: "route-cn",
    slug: "gui-hang-di-trung-quoc",
    country: "Trung Quốc (CHN)",
    region: "Châu Á",
    title: "Vận Chuyển Việt - Trung Phục Vụ Thương Mại Toàn Diện",
    excerpt:
      "Đa dạng phương thức Đường bộ & Hàng không. Giao thương tiểu ngạch và chính ngạch đi Trung Quốc với chi phí tối ưu.",
    basePrice: "190.000",
    estimatedTime: "8-10 ngày",
    coverImage:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2070&auto=format&fit=crop",
    features: ["Đường bộ & Hàng không", "Door to Door"],
    description: `
      <h2>Giải pháp giao thương Việt - Trung</h2>
      <p>Đáp ứng nhu cầu trao đổi hàng mẫu, chứng từ và xuất khẩu tiểu ngạch sang Trung Quốc, chúng tôi cung cấp giải pháp vận tải linh hoạt kết hợp đường bộ và hàng không, bao thông quan 2 đầu.</p>
    `,
    allowedItems: [
      "Hàng mẫu (vải, nhựa, linh kiện)",
      "Chứng từ, hợp đồng",
      "Nông sản sấy khô (có chứng nhận)",
    ],
    restrictedItems: [
      "Sách báo có nội dung chính trị nhạy cảm",
      "Hóa chất nguy hiểm",
      "Vật phẩm cấm theo pháp luật TQ",
    ],
    faqs: [
      {
        question: "Bên mình có nhận đường bộ đi Quảng Châu không?",
        answer:
          "Có, đường bộ đi Quảng Châu là tuyến thế mạnh giúp doanh nghiệp tiết kiệm đến 50% chi phí so với bay.",
      },
    ],
  },
  {
    id: "route-my",
    slug: "gui-hang-di-malaysia",
    country: "Malaysia (MYS)",
    region: "Châu Á",
    title: "Gửi Hàng Đi Malaysia Nhanh Chóng, Giá Sỉ Cho Doanh Nghiệp",
    excerpt:
      "Kết nối khối ASEAN mạnh mẽ với tuyến bay thẳng đi Kuala Lumpur. Chiết khấu cao cho khách buôn sỉ.",
    basePrice: "150.000",
    estimatedTime: "4-6 ngày",
    coverImage:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2070&auto=format&fit=crop",
    features: ["Bay thẳng", "Giá sỉ cực tốt"],
    description: `
      <h2>Tối ưu chi phí cho hàng buôn sỉ</h2>
      <p>Tuyến Malaysia được An Tâm Express thiết kế riêng cho các shop kinh doanh online, doanh nghiệp xuất khẩu thời trang, phụ kiện với bảng giá sỉ cực tốt.</p>
      <p>Lưu ý: Malaysia là quốc gia Hồi giáo, việc gửi hàng thực phẩm cần đặc biệt lưu ý về tiêu chuẩn Halal và tránh các sản phẩm liên quan đến thịt heo.</p>
    `,
    allowedItems: [
      "Quần áo thời trang, túi xách",
      "Cà phê, trà, hạt điều",
      "Phụ tùng ô tô, xe máy",
    ],
    restrictedItems: [
      "Thịt động vật trên cạn (heo, bò, gà) dưới mọi hình thức",
      "Sản phẩm từ trứng và sữa (kể cả bánh nhân trứng muối)",
      "Rượu bia, đồ uống có cồn",
    ],
    faqs: [
      {
        question: "Có cần chứng nhận Halal khi gửi thực phẩm không?",
        answer:
          "Nếu gửi số lượng ít cho cá nhân thì không bắt buộc. Nếu đi hàng thương mại số lượng lớn, bạn cần có chứng nhận Halal.",
      },
    ],
  },
  {
    id: "route-th",
    slug: "gui-hang-di-thai-lan",
    country: "Thái Lan (THA)",
    region: "Châu Á",
    title: "Gửi Hàng Đi Thái Lan Giá Rẻ, Không Giới Hạn Số Lượng",
    excerpt:
      "Giao nhận Door-to-Door 2 chiều Việt - Thái. Bay thẳng hàng ngày, hỗ trợ thủ tục hải quan tiểu ngạch chuyên nghiệp.",
    basePrice: "170.000",
    estimatedTime: "6-8 ngày",
    coverImage:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2070&auto=format&fit=crop",
    features: ["Bay thẳng hàng ngày", "Không giới hạn KG"],
    description: `
      <h2>Chuyên tuyến Việt - Thái nhanh gọn</h2>
      <p>Thái Lan là đối tác thương mại lớn trong khu vực. Chúng tôi hỗ trợ nhận gửi mọi loại hàng hóa từ hàng cá nhân đến máy móc công nghiệp đi Bangkok và các tỉnh thành khác tại Thái Lan.</p>
    `,
    allowedItems: [
      "Hàng tiêu dùng, mỹ phẩm",
      "Đồ trang trí nội thất",
      "Máy móc, thiết bị",
    ],
    restrictedItems: [
      "Thịt động vật trên cạn (heo, bò, gà) dưới mọi hình thức",
      "Sản phẩm từ trứng và sữa (kể cả bánh nhân trứng muối)",
      "Thuốc lá điện tử",
      "Hàng hóa vi phạm sở hữu trí tuệ",
    ],
    faqs: [
      {
        question: "Gửi thuốc lá điện tử sang Thái Lan được không?",
        answer:
          "Tuyệt đối không. Thái Lan cấm nghiêm ngặt thuốc lá điện tử, có thể bị phạt tù.",
      },
    ],
  },

  // --- CHÂU ÂU ---
  {
    id: "route-uk",
    slug: "gui-hang-di-anh",
    country: "Anh (UK)",
    region: "Châu Âu",
    title: "Gửi Hàng Đi Anh (UK) Bao Thuế Hậu Brexit Chuyên Nghiệp",
    excerpt:
      "Giài quyết rắc rối thủ tục hải quan hậu Brexit. Bao thuế nhập khẩu trọn gói, hỗ trợ giấy tờ MSDS cho hàng mỹ phẩm.",
    basePrice: "320.000",
    estimatedTime: "10-15 ngày",
    coverImage:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    features: ["Bao thuế nhập khẩu", "Xử lý MSDS"],
    description: `
      <h2>Vận chuyển đi Anh không lo rào cản thuế quan</h2>
      <p>Sau Brexit, luật hải quan của Vương quốc Anh đã thay đổi phức tạp hơn rất nhiều. An Tâm Express cung cấp giải pháp DDP (Delivered Duty Paid - Giao hàng đã nộp thuế) giúp người nhận tại Anh không phải đóng thêm bất kỳ khoản phí nào.</p>
      <ul>
        <li><strong>Thế mạnh mỹ phẩm:</strong> Bao trọn gói làm giấy MSDS để xuất khẩu an toàn các loại kem dưỡng, serum, dụng cụ làm nail đi Anh.</li>
      </ul>
    `,
    allowedItems: [
      "Dụng cụ làm nail, mi giả",
      "Mỹ phẩm chăm sóc da (có MSDS)",
      "Quần áo giữ nhiệt, áo khoác",
    ],
    restrictedItems: [
      "Thịt động vật trên cạn (heo, bò, gà) dưới mọi hình thức",
      "Sản phẩm từ trứng và sữa (kể cả bánh nhân trứng muối)",
      "Vũ khí lạnh, dao kéo",
      "Hàng giả nhái thương hiệu",
    ],
    faqs: [
      {
        question: "Người nhận ở Anh có phải ra bưu điện đóng thuế không?",
        answer:
          "Không. Tuyến này chúng tôi đã bao thuế trọn gói (DDP). Hàng sẽ được giao tận cửa mà không phát sinh phí.",
      },
    ],
  },
  {
    id: "route-ger",
    slug: "gui-hang-di-duc",
    country: "Đức (GER)",
    region: "Châu Âu",
    title: "Gửi Hàng Đi Đức - Cửa Ngõ Thông Quan Châu Âu",
    excerpt:
      "Đức là trạm trung chuyển lớn nhất EU. Vận chuyển an toàn, kê khai hóa đơn minh bạch giúp hàng hóa dễ dàng thâm nhập thị trường EU.",
    basePrice: "320.000",
    estimatedTime: "10-15 ngày",
    coverImage:
      "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=2070&auto=format&fit=crop",
    features: ["Cửa ngõ EU", "Thông quan nhanh"],
    description: `
      <h2>Đức - Trái tim Logistics của Châu Âu</h2>
      <p>Hàng hóa gửi đi Đức yêu cầu tính chính xác tuyệt đối trong việc kê khai Commercial Invoice (Hóa đơn thương mại). Bất kỳ sự sai lệch nào về giá trị hàng hóa cũng có thể bị Hải quan Đức (Zoll) giữ lại.</p>
      <p>An Tâm Express sẽ thay bạn lập danh sách packing list và hóa đơn đạt chuẩn Châu Âu, giúp lô hàng qua ải hải quan Frankfurt một cách êm ái nhất.</p>
    `,
    allowedItems: [
      "Hàng hóa cá nhân, quà tặng",
      "Hàng khô truyền thống Việt Nam",
      "Linh kiện máy móc",
    ],
    restrictedItems: [
      "Thịt động vật trên cạn (heo, bò, gà) dưới mọi hình thức",
      "Sản phẩm từ trứng và sữa (kể cả bánh nhân trứng muối)",
      "Thuốc lá, rượu mạnh",
    ],
    faqs: [
      {
        question: "Hải quan Đức có gắt gao về hàng fake không?",
        answer:
          "Rất gắt gao. Nếu phát hiện hàng nhái (Quần áo, túi xách giả thương hiệu), Hải quan Đức sẽ tiêu hủy ngay lập tức và có thể phạt tiền người nhận.",
      },
    ],
  },
  {
    id: "route-fra",
    slug: "gui-hang-di-phap",
    country: "Pháp (FRA)",
    region: "Châu Âu",
    title: "Gửi Hàng Đi Pháp Nhanh Chóng, Hỗ Trợ Chứng Từ Khó",
    excerpt:
      "Vận chuyển door-to-door đến Paris và mọi tỉnh thành tại Pháp. Thời gian ổn định, hỗ trợ đóng gói chuẩn chống va đập cho chặng đường dài.",
    basePrice: "320.000",
    estimatedTime: "10-15 ngày",
    coverImage:
      "https://images.unsplash.com/photo-1502602898657-3e90760020c5?q=80&w=2070&auto=format&fit=crop",
    features: ["Giao tận nhà", "Hỗ trợ chứng từ"],
    description: `
      <h2>Giao nhận an toàn tới kinh đô ánh sáng</h2>
      <p>Pháp là quốc gia yêu cầu tiêu chuẩn bảo vệ môi trường và đóng gói khá cao. An Tâm Express sử dụng 100% thùng carton mới, thân thiện với môi trường, kết hợp xốp hơi giảm chấn để bảo vệ kiện hàng của bạn vượt qua hành trình hơn 10,000 km.</p>
      <p>Chúng tôi cung cấp mã tracking quốc tế liên kết trực tiếp với La Poste (Bưu điện Pháp) để bạn theo dõi lộ trình chính xác nhất.</p>
    `,
    allowedItems: [
      "Quần áo, hàng thời trang Việt Nam",
      "Đồ thủ công mỹ nghệ trang trí",
      "Hàng thực phẩm khô có nhãn mác",
    ],
    restrictedItems: [
      "Thịt động vật trên cạn (heo, bò, gà) dưới mọi hình thức",
      "Sản phẩm từ trứng và sữa (kể cả bánh nhân trứng muối)",

      "Thuốc lá",
    ],
    faqs: [
      {
        question: "Có gửi khô gà lá chanh sang Pháp được không?",
        answer:
          "Giống như phần lớn EU, Pháp cấm nghiêm ngặt việc nhập khẩu các sản phẩm từ thịt gia cầm, gia súc không qua kiểm dịch y tế Châu Âu.",
      },
    ],
  },
];

// 3. CÁC HÀM TRUY VẤN GIẢ LẬP (MOCK API HELPERS)
// ... (Các hàm này giữ nguyên như phiên bản trước)
export async function getAllRoutes(): Promise<ServiceRoute[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve([...SERVICE_ROUTES]), 200),
  );
}

export async function getRouteBySlug(
  slug: string,
): Promise<ServiceRoute | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(SERVICE_ROUTES.find((r) => r.slug === slug));
    }, 200);
  });
}

export async function getRelatedRoutes(
  currentSlug: string,
  region: string,
  limit: number = 3,
): Promise<ServiceRoute[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        SERVICE_ROUTES.filter(
          (r) => r.slug !== currentSlug && r.region === region,
        ).slice(0, limit),
      );
    }, 200);
  });
}
