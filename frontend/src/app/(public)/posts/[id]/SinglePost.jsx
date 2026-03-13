import ErrorManager from '@/components/custom_error/ErrorManager';
import { fetchPost } from '@/lib/api/post';
import React from 'react'

export default async function SinglePost({ id }) {

  const { success, data: { post }, message } = await fetchPost(id);
  if (!success) return <ErrorManager message={message} showPage={false} />
  return (
    <div className="container py-5">
      <div className="border p-4 rounded mb-3 shadow-sm">
        <h2 className="font-bold text-lg mb-4 text-primary">{post.title}</h2>
        <p className="text-gray-700">{post.body}</p>
      </div>
    </div>
  );
}
