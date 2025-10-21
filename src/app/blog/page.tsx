import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Donaldson Agency',
  description: 'Marketing insights, strategies, and industry news',
};

export default function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-12 text-4xl font-bold">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post._id} className="rounded-lg border p-6">
            <Link href={post.url}>
              <h2 className="mb-2 text-2xl font-semibold hover:underline">
                {post.title}
              </h2>
              <p className="mb-4 text-muted-foreground">{post.description}</p>
              <time className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
