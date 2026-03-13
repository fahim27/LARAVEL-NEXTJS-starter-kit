import { Suspense } from "react";
import SkeletonPost from "./SkeletonPost";
import PostList from "./PostList";

export default async function Posts() {
  return (
    <div className="container py-5">
      <h1 className="text-2xl font-bold mb-4">All Post</h1>
      <Suspense
        fallback={
          <>
            <SkeletonPost />
            <SkeletonPost />
            <SkeletonPost />
          </>
        }
      >
        <PostList />
      </Suspense>
    </div>
  );
}
