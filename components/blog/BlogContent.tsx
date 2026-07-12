import { BlogPost } from "@/lib/blogsMockup";

export default function BlogContent({ post }: { post: BlogPost }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Featured Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-16 -mt-24 z-20">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Body */}
        <article
          className="prose prose-lg prose-slate max-w-none 
            prose-headings:text-brand-blue prose-headings:font-black
            prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-brand-orange prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:rounded-r-xl
            prose-strong:text-brand-blue prose-img:rounded-3xl prose-img:shadow-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-slate-100 text-slate-600 text-sm font-bold rounded-full hover:bg-brand-orange/10 hover:text-brand-orange transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
