import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="container mx-auto max-w-3xl px-4 py-16">
      <header className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
        <div className="flex items-center gap-4 text-muted-foreground">
          <time>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>•</span>
          <span>{post.author}</span>
        </div>
      </header>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXContent />
      </div>
    </article>
  );
}
