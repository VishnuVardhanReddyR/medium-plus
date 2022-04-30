import React from 'react';
import Link from 'next/link';
import { Post } from '../typings';
import { urlFor } from '../sanity';

interface Props {
  post: Post;
}

const PostCard = ({post}: Props) => {
  return (
    <Link key={post._id} href={`/post/${post.slug.current}`}>
      <div className="group cursor-pointer overflow-hidden">
        <img 
          className="rounded-md h-60 w-full object-cover group-hover:scale-105 transition-transform 
          duration-200 ease-in-out" 
          src={urlFor(post.mainImage).url()!} 
          alt="post image" />
        <div className="flex justify-between p-5 bg-white">
            <div>
                <p className="text-lg font-bold">{post.title}</p>
                <p className="text-xs ">{post.description}</p>
                <span className="opacity-50 text-xs">by {post.author.name}</span>
            </div>
            <img className="h-12 w-12 rounded-full" src={urlFor(post.author.image).url()!} alt="" />
        </div>
      </div>
    </Link>
  )
}

export default PostCard;
