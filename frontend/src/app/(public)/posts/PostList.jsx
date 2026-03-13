import ErrorManager from '@/components/custom_error/ErrorManager';
import { fetchPosts } from '@/lib/api/post';
import { truncateString } from '@/lib/utilities/helpers';
import Link from 'next/link';
import React from 'react'

export default async function PostList() {
    const { success, data: { posts }, message } = await fetchPosts();
    if (!success) return <ErrorManager message={message} showPage={false} />
    return (
        <div className="container py-5">
            {posts.map((post) => (
                <div key={post.id} className="border p-4 rounded mb-3 shadow-sm">
                    <h2 className="font-bold text-lg">{post.title}</h2>
                    <p className="text-gray-700">{truncateString(post.body, 500)}</p>
                    <Link href={"posts/" + post.id}>Read More</Link>
                </div>
            ))}
        </div>
    );
}

