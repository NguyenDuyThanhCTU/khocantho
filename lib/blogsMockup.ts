// src/lib/blogsMockup.ts

// 1. ĐỊNH NGHĨA KIỂU DỮ LIỆU (TYPES)
export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Nội dung HTML để render
  coverImage: string;
  date: string;
  category: string;
  tags: string[];
  author: Author;
  readTime: string;
  isFeatured?: boolean;
}

// 2. DỮ LIỆU GIẢ LẬP (MOCK DATA)
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    slug: "huong-dan-dong-goi-thuc-pham-gui-my-chuan-fda",
    title: "Hướng dẫn đóng gói cá khô, mắm gửi đi Mỹ qua mặt kiểm tra FDA 100%",
    excerpt:
      "Gửi thực phẩm đi Mỹ luôn là rào cản lớn với bà con Miền Tây. Tìm hiểu cách An Tâm Express hút chân không và làm nhãn mác chuẩn FDA giúp hàng hóa thông quan an toàn.",
    content: `
      <p>Gửi thực phẩm mang hương vị quê nhà như cá khô, tôm khô, mắm thái... sang Mỹ cho người thân là nhu cầu rất lớn của bà con Miền Tây. Tuy nhiên, Cục Quản lý Thực phẩm và Dược phẩm Hoa Kỳ (FDA) có những quy định cực kỳ khắt khe.</p>
      
      <h3>1. Tại sao hàng thực phẩm hay bị Hải quan Mỹ giữ lại?</h3>
      <p>Nguyên nhân chính thường rơi vào 3 trường hợp:</p>
      <ul>
        <li>Không có nhãn mác tiếng Anh rõ ràng về thành phần.</li>
        <li>Hàng hóa bốc mùi do đóng gói không kín (đặc biệt là mắm, khô cá).</li>
        <li>Thiếu giấy chứng nhận FDA theo quy định nhập khẩu.</li>
      </ul>

      <h3>2. Quy chuẩn đóng gói "Bất bại" tại An Tâm Express</h3>
      <p>Để đảm bảo tỷ lệ thông quan 100%, quy trình xử lý thực phẩm tại kho của chúng tôi bao gồm:</p>
      <ul>
        <li><strong>Hút chân không nhiều lớp:</strong> Ngăn chặn tuyệt đối việc rò rỉ mùi. Đối với các loại mắm, chúng tôi đóng vào hũ nhựa có nắp seal nhôm, quấn mút xốp và hút chân không lớp ngoài cùng.</li>
        <li><strong>Xử lý tem nhãn song ngữ:</strong> Đội ngũ chứng từ sẽ làm lại toàn bộ tem nhãn có chứa thành phần bằng Tiếng Anh, ghi rõ NSX/HSD chuẩn quy định lưu hành của Mỹ.</li>
        <li><strong>Đăng ký mã FDA miễn phí:</strong> An Tâm Express hỗ trợ khách hàng đăng ký FDA cho lô hàng mà không thu thêm phụ phí.</li>
      </ul>

      <blockquote>"Đừng để những món quà quê hương bị hủy bỏ oan uổng tại cửa khẩu. Hãy để các chuyên gia chứng từ của chúng tôi giúp bạn."</blockquote>

      <p>Hãy liên hệ ngay với hotline của chúng tôi để được tư vấn cụ thể cho từng loại thực phẩm bạn muốn gửi!</p>
    `,
    coverImage:
      "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/klatexpress/gui-ca-kho-di-my-3.jpg", // Hình minh họa đóng gói/thực phẩm
    date: "10/04/2026",
    category: "Cẩm nang gửi hàng",
    tags: ["Gửi hàng đi Mỹ", "FDA", "Thực phẩm", "Đóng gói"],
    author: {
      name: "An Tâm Express",
      role: "Chuyên viên tư vấn",
      avatar:
        "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/klatexpress/Logo.png",
    },
    readTime: "5 phút",
    isFeatured: true,
  },
  {
    id: "post-2",
    slug: "cach-tinh-trong-luong-the-tich-hang-cong-kenh",
    title:
      "Cách tính trọng lượng thể tích (Dimensional Weight) khi gửi hàng cồng kềnh",
    excerpt:
      "Tại sao gửi một con gấu bông nhẹ hều lại có cước phí cao bằng một kiện quần áo? Bài viết này sẽ giúp bạn hiểu rõ luật tính cước hàng không.",
    content: `
      <p>Một trong những thắc mắc phổ biến nhất của khách hàng khi gửi hàng qua đường hàng không là: <em>"Tại sao thùng hàng của tôi cân lên chỉ có 5kg, nhưng hãng bay lại thu tiền cước 15kg?"</em>.</p>
      
      <p>Câu trả lời nằm ở khái niệm <strong>Trọng lượng thể tích (Dimensional Weight - DIM)</strong>.</p>

      <h3>1. Trọng lượng thể tích là gì?</h3>
      <p>Khoang chứa hàng của máy bay có giới hạn. Nếu bạn gửi một món hàng rất nhẹ nhưng chiếm diện tích lớn (ví dụ: thú nhồi bông, nệm mút, lồng đèn...), hãng bay sẽ bị lỗ nếu chỉ tính tiền theo cân nặng thực tế. Do đó, quy tắc chung của hàng không quốc tế là: <strong>So sánh giữa Cân nặng thực tế và Cân nặng thể tích, cái nào lớn hơn sẽ lấy cái đó làm căn cứ tính cước (Chargeable Weight).</strong></p>

      <h3>2. Công thức tính Trọng lượng thể tích</h3>
      <div style="background-color: #f8fafc; padding: 20px; border-left: 4px solid #F97316; margin: 20px 0;">
        <strong>(Dài x Rộng x Cao) / 5000 = Trọng lượng thể tích (kg)</strong>
        <br/><small>*Lưu ý: Kích thước đo bằng centimet (cm).</small>
      </div>

      <h3>Ví dụ thực tế:</h3>
      <p>Bạn gửi một kiện hàng là Gấu bông có kích thước thùng sau khi đóng gói là: Dài 60cm, Rộng 50cm, Cao 40cm. Cân nặng thực tế đặt lên cân là <strong>5kg</strong>.</p>
      <ul>
        <li>Áp dụng công thức: (60 x 50 x 40) / 5000 = <strong>24kg</strong>.</li>
        <li>So sánh: 24kg (Thể tích) > 5kg (Thực tế).</li>
      </ul>
      <p>=> Hãng bay sẽ tính cước phí của kiện hàng này là <strong>24kg</strong>.</p>

      <h3>3. Mẹo tối ưu chi phí từ An Tâm Express</h3>
      <p>Để tránh bị tính phí thể tích cao, nhân viên bưu cục của An Tâm Express luôn hỗ trợ khách hàng:</p>
      <ul>
        <li>Hút chân không tối đa các mặt hàng bồng bềnh (quần áo, gấu bông, chăn drap).</li>
        <li>Cắt gọt thùng carton cho vừa khít với hàng hóa bên trong, không để khoảng trống thừa.</li>
      </ul>
    `,
    coverImage:
      "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/klatexpress/6491a266a60627587e17.jpg", // Hình kiện hàng carton/thước dây
    date: "05/04/2026",
    category: "Kiến thức Logistics",
    tags: ["Tính cước", "Kinh nghiệm", "Hàng cồng kềnh"],
    author: {
      name: "An Tâm Express",
      role: "Chuyên viên tư vấn",
      avatar:
        "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/klatexpress/Logo.png",
    },
    readTime: "4 phút",
    isFeatured: false,
  },
  {
    id: "post-3",
    slug: "cap-nhat-lich-bay-can-tho-sydney-thang-nay",
    title:
      "Tin vui: Tăng cường chuyến bay thẳng Cần Thơ - Sydney (Úc) trong tháng này",
    excerpt:
      "Nhằm đáp ứng nhu cầu gửi hàng cho kiều bào tại Úc ngày càng tăng cao, An Tâm Express chính thức kết nối chuyến bay thẳng giúp rút ngắn thời gian chỉ còn 4 ngày.",
    content: `
      <p>Thị trường Úc (đặc biệt là Sydney và Melbourne) luôn là một trong những điểm đến nhộn nhịp nhất của bà con Miền Tây gửi hàng cho người thân và đối tác.</p>
      
      <h3>Tối ưu hóa thời gian toàn trình</h3>
      <p>Trước đây, hàng hóa từ Miền Tây thường phải trung chuyển lên sân bay Tân Sơn Nhất (TP.HCM), chờ gom chuyến rồi mới cất cánh bay sang Úc. Quy trình này tốn từ 6-8 ngày làm việc.</p>
      
      <p>Bắt đầu từ giữa tháng này, An Tâm Express đã ký kết thành công thỏa thuận hợp tác phân bổ tải trọng (block space) trực tiếp trên các chuyến bay thẳng. Điều này mang lại lợi ích khổng lồ cho khách hàng:</p>
      <ul>
        <li><strong>Thời gian rút ngắn kỷ lục:</strong> Chỉ từ 4-5 ngày là hàng hóa đã gõ cửa nhà người nhận tại Sydney.</li>
        <li><strong>An toàn cho hàng thực phẩm:</strong> Việc giảm bớt thời gian lưu kho trung chuyển giúp thực phẩm (bánh pía, lạp xưởng, mắm) giữ được độ tươi ngon nhất định.</li>
        <li><strong>Cước phí bình ổn:</strong> Dù bay thẳng, cước phí vẫn được trợ giá nhờ sản lượng hàng hóa ổn định của hệ thống bưu cục toàn Miền Tây.</li>
      </ul>

      <p>Mạng lưới nhận hàng tận nhà miễn phí của chúng tôi tại Cần Thơ, Vĩnh Long, Tiền Giang, Bến Tre vẫn đang hoạt động hết công suất để phục vụ kịp chuyến bay mỗi ngày. Liên hệ ngay Hotline để giữ chỗ cho kiện hàng của bạn!</p>
    `,
    coverImage:
      "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/klatexpress/vzvmnbw5xkbxrwhj7kva.jpg", // Hình máy bay
    date: "02/04/2026",
    category: "Bản tin hoạt động",
    tags: ["Gửi hàng đi Úc", "Sydney", "Lịch bay", "Cần Thơ"],
    author: {
      name: "An Tâm Express",
      role: "Chuyên viên tư vấn",
      avatar:
        "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/klatexpress/Logo.png",
    },
    readTime: "3 phút",
    isFeatured: false,
  },
  {
    id: "post-4",
    slug: "giay-to-msds-la-gi-khi-gui-my-pham-quoc-te",
    title:
      "MSDS là gì? Tại sao bắt buộc phải có khi gửi mỹ phẩm ra nước ngoài?",
    excerpt:
      "Gửi son môi, kem dưỡng da hay nước hoa đi quốc tế không hề đơn giản. Bài viết giải thích tầm quan trọng của bảng chỉ dẫn an toàn hóa chất MSDS.",
    content: `
      <p>Mỹ phẩm (đặc biệt là các loại dạng lỏng, gel, hoặc bình xịt áp suất) được xếp vào nhóm hàng hóa nhạy cảm khi vận chuyển bằng đường hàng không. Để được phép mang lên máy bay, chúng bắt buộc phải có <strong>Bảng chỉ dẫn an toàn hóa chất (MSDS - Material Safety Data Sheet)</strong>.</p>

      <h3>1. Giấy MSDS chứa thông tin gì?</h3>
      <p>MSDS là một tài liệu chứa thông tin về đặc tính của một chất hóa học (hoặc hỗn hợp). Trong ngữ cảnh vận chuyển mỹ phẩm, nó chứng minh rằng sản phẩm của bạn:</p>
      <ul>
        <li>Không chứa cồn (Alcohol) vượt ngưỡng gây cháy nổ.</li>
        <li>Không có tính ăn mòn kim loại (ảnh hưởng đến thân máy bay).</li>
        <li>Thành phần an toàn đối với sức khỏe con người khi thay đổi áp suất, nhiệt độ.</li>
      </ul>

      <h3>2. Nếu gửi mỹ phẩm handmade thì sao?</h3>
      <p>Đây là vấn đề đau đầu nhất của khách hàng kinh doanh mỹ phẩm tự pha chế (handmade) tại Việt Nam vì không có nhà máy cấp giấy MSDS chuẩn. Nếu bạn khai báo gian dối, lô hàng có thể bị hải quan tịch thu ngay lập tức và đưa vào danh sách đen (Blacklist).</p>

      <h3>3. Giải pháp từ An Tâm Express</h3>
      <p>Bạn không cần phải là một chuyên gia hóa học hay lo lắng về giấy tờ phức tạp này. Khi gửi hàng mỹ phẩm tại An Tâm Express, chúng tôi cung cấp dịch vụ:</p>
      <ul>
        <li><strong>Miễn phí kiểm tra và phân tích thành phần:</strong> Đánh giá mức độ khả thi khi bay.</li>
        <li><strong>Bao trọn gói phí làm chứng từ MSDS:</strong> Đội ngũ hải quan của chúng tôi sẽ đứng ra khai báo và xin cấp MSDS hợp lệ cho từng lô hàng của bạn, đảm bảo hàng bay an toàn 100%.</li>
      </ul>
      <p>Lưu ý: Chúng tôi từ chối vận chuyển các loại sơn móng tay, nước hoa dạng xịt có cồn cao do vi phạm nghiêm trọng luật an toàn bay quốc tế.</p>
    `,
    coverImage:
      "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/klatexpress/phan-loai-hang-hoa-nguy-hiem.jpg", // Hình mỹ phẩm/hóa chất
    date: "28/03/2026",
    category: "Cẩm nang gửi hàng",
    tags: ["Mỹ phẩm", "MSDS", "Chứng từ", "Thủ tục"],
    author: {
      name: "An Tâm Express",
      role: "Chuyên viên tư vấn",
      avatar:
        "https://pub-4123c2c442724ca69ecec2223d713b91.r2.dev/klatexpress/Logo.png",
    },
    readTime: "5 phút",
    isFeatured: false,
  },
];

// 3. CÁC HÀM TRUY VẤN GIẢ LẬP (MOCK API HELPERS)

/**
 * Lấy toàn bộ danh sách bài viết (Sắp xếp mới nhất lên đầu)
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  // Dùng Promise để giả lập độ trễ của API thật
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...BLOG_POSTS]);
    }, 300); // Fake delay 300ms
  });
}

/**
 * Lấy danh sách bài viết nổi bật
 */
export async function getFeaturedPosts(): Promise<BlogPost[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(BLOG_POSTS.filter((post) => post.isFeatured));
    }, 200);
  });
}

/**
 * Lấy chi tiết một bài viết dựa vào slug (dùng cho trang /[slug])
 */
export async function getPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = BLOG_POSTS.find((p) => p.slug === slug);
      resolve(post);
    }, 200);
  });
}

/**
 * Lấy các bài viết liên quan (Cùng Category hoặc Tags), loại trừ bài hiện tại
 */
export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit: number = 3,
): Promise<BlogPost[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const related = BLOG_POSTS.filter(
        (p) => p.slug !== currentSlug && p.category === category,
      ).slice(0, limit);

      // Nếu không đủ bài cùng category, lấy thêm bài viết mới nhất đắp vào cho đủ layout
      if (related.length < limit) {
        const morePosts = BLOG_POSTS.filter(
          (p) => p.slug !== currentSlug && !related.find((r) => r.id === p.id),
        ).slice(0, limit - related.length);
        resolve([...related, ...morePosts]);
      } else {
        resolve(related);
      }
    }, 200);
  });
}

/**
 * Lấy danh sách tất cả các Categories đang có
 */
export async function getCategories(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const categories = new Set(BLOG_POSTS.map((post) => post.category));
      resolve(Array.from(categories));
    }, 100);
  });
}
