import React, { Suspense } from 'react'
import SkeletonPost from '../SkeletonPost';
import Link from 'next/link';
import SinglePost from './SinglePost';

export default async function PostDetails({ params }) {
    const allParams = await params;
    return (
        <div className="container py-5">
            <div className='d-flex gap-2 justify-content-between flex-wrap'>
                <h1 className="text-2xl font-bold mb-4">Post Details</h1>
                <Link href="/posts">Back to Post</Link>
            </div>
            <Suspense
                fallback={<SkeletonPost />}>
                <SinglePost id={allParams.id} />
            </Suspense>
        </div>
    );
}
