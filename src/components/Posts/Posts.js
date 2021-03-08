import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = props => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! 
      MEANS: check what you need from the data i.e. likes, id, post itself */}

    {posts.map(post =>{
      return <Post key={post.id} post={post} likePost={likePost} /> //need Post or doesnt know what to render
    })}

    </div>
  );
};

export default Posts;
