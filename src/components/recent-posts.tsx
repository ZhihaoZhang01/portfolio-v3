import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RecentPostsProps {
  delay?: number;
}

export async function RecentPosts({ delay = 0 }: RecentPostsProps) {
  const posts = await getBlogPosts();

  const sortedPosts = posts
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .slice(0, 2); // Get only the 2 most recent posts

  return (
    <section id="recent-posts">
      <div className="w-full py-12 pb-0">
        <BlurFade delay={delay}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">
              Recent Posts
            </h2>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto mb-6">
          {sortedPosts.map((post, id) => (
            <BlurFade key={post.slug} delay={delay + 0.01 + id * 0.05}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <Card className="h-full border border-border p-4 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-gray-600 transition-all cursor-pointer flex flex-col hover:scale-[1.01] hover:-translate-y-1">
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-xl">
                      {post.metadata.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {formatDate(post.metadata.publishedAt)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    <p className="text-sm line-clamp-4">
                      {post.metadata.summary}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </BlurFade>
          ))}
        </div>
        <BlurFade delay={delay + 0.01 + sortedPosts.length * 0.05}>
          <div className="flex justify-center">
            <Button asChild variant="outline">
              <Link href="/blog">View all posts</Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
