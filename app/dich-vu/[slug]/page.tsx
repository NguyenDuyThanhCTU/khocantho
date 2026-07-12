import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRouteBySlug, getAllRoutes } from "@/lib/routesMockup";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceDetails from "@/components/service/ServiceDetails";

interface Props {
  params: { slug: string };
}

// Hàm này giúp Next.js tạo sẵn các đường dẫn tĩnh (SSG) khi build, web sẽ chạy nhanh như điện
export async function generateStaticParams() {
  const routes = await getAllRoutes();
  return routes.map((route) => ({
    slug: route.slug,
  }));
}

// TẠO METADATA ĐỘNG CHUẨN SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const route = await getRouteBySlug(params.slug);

  if (!route) {
    return { title: "Không tìm thấy dịch vụ | An Tâm Express" };
  }

  return {
    title: `${route.title} | An Tâm Express`,
    description: route.excerpt,
    keywords: `gửi hàng đi ${route.country}, gửi hàng ${route.country} từ Cần Thơ, chuyển phát nhanh ${route.country}`,
    openGraph: {
      title: route.title,
      description: route.excerpt,
      images: [route.coverImage],
      type: "website",
    },
  };
}

// GIAO DIỆN CHÍNH (LẮP RÁP CÁC COMPONENT)
export default async function ServiceDetailPage({ params }: Props) {
  // Lấy dữ liệu từ Mockup API (Giả lập Database)
  const route = await getRouteBySlug(params.slug);

  // Nếu nhập sai URL (VD: /dich-vu/nuoc-la), trả về trang 404
  if (!route) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Khối 1: Hero Banner (Client Component) */}
      <ServiceHero route={route} />

      {/* Khối 2: Chi tiết nội dung, Quy định, FAQs (Client Component) */}
      <ServiceDetails route={route} />
    </main>
  );
}
