import PostTeaserSkeleton from "@/components/blog/PostTeaserSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto my-8 space-y-8">
      <Skeleton className="h-6 w-[100px] rounded-full" />

      <div className="mx-auto flex w-full max-w-prose flex-col items-center gap-4">
        <Skeleton className="my-3 h-8 w-24 rounded-full" />

        <div className="flex w-full flex-col items-center space-y-4">
          <Skeleton className="h-4 w-3/4"></Skeleton>
          <Skeleton className="h-4 w-5/6"></Skeleton>
          <Skeleton className="h-4 w-full"></Skeleton>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <PostTeaserSkeleton className="lg:col-span-2" />
        <PostTeaserSkeleton />
        <PostTeaserSkeleton />
      </div>
    </div>
  );
}
