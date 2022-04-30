import React from 'react';
import { Post } from "../typings";
import PostCard from "./PostCard";

interface Props { 
  posts: [Post];
}

const Posts = ({posts}: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
      {posts.map(post => (
          <PostCard post={post} />
      ))}
    </div>
  )
}

export default Posts;
