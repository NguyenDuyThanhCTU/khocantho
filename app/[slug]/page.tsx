import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts } from "@/lib/blogsMockup";
import BlogDetailHero from "@/components/blog/BlogDetailHero";
import BlogContent from "@/components/blog/BlogContent";
import { getAllRoutes } from "@/lib/routesMockup";
// import RelatedPosts from "@/components/blog/RelatedPosts"; // Giả định bạn đã tạo grid 3 bài viết tương tự trang chủ

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const routes = await getAllRoutes();
  return routes.map((route) => ({
    slug: route.slug,
  }));
}

// 1. GENERATE DYNAMIC METADATA (SEO)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return { title: "Không tìm thấy bài viết" };
  }

  return {
    title: `${post.title} | An Tâm Express`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: "article",
    },
  };
}

// 2. MAIN PAGE COMPONENT
export default async function BlogPostPage({ params }: Props) {
  // Fetch data từ mockup service
  const post = await getPostBySlug(params.slug);

  // Xử lý 404 nếu slug không tồn tại
  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.slug, post.category, 3);

  return (
    <main className="min-h-screen">
      {/* Header bài viết */}
      <BlogDetailHero post={post} />

      {/* Nội dung chi tiết */}
      <BlogContent post={post} />

      {/* Bài viết liên quan (Nền êm dịu) */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h3 className="text-2xl font-black text-brand-blue">
              Có thể bạn quan tâm
            </h3>
            <div className="w-20 h-1.5 bg-brand-orange mt-4 rounded-full" />
          </div>

          {/* Reuse lại logic Grid bài viết đã làm ở trang chủ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all"
              >
                {/* ... Render mini card của bài viết ... */}
                <div className="h-48 bg-slate-200">
                  <img
                    src={p.coverImage}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-slate-800 line-clamp-2 mb-4">
                    {p.title}
                  </h4>
                  <a
                    href={`/${p.slug}`}
                    className="text-sm font-bold text-brand-orange flex items-center gap-2"
                  >
                    Xem chi tiết
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
