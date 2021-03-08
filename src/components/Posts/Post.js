import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';


const Post = props => { //function
  // 🔥 Make sure the parent of Post is passing the right props!
  // console.log(post, likePost)

//trevor: make sure props passes correct (or multiple) values

  const { post, likePost } = props; //react "variable" (post) // likePost is setPost like in axios

  return ( //everything in return, below divs & html content
    <div className='post-border'>
      <PostHeader //html tag, import name (capital letter) 
        username={post.username} //keyName = {path}
        thumbnailUrl={post.thumbnailUrl}
        props = {post} //interpolation
      />
    
    <div className='post-image-wrapper'>
      <img
        alt='post thumbnail'
        className='post-image'
        src={post.imageUrl}
        //dummy data image url callback
      />

    </div>
      {/* Is LikeSection getting all the props it needs 
      to work correctly? */}
      <LikeSection likePost={ likePost} likeCount = {post.likes} post = {post} //could also write props.post.likes
      />
      {/* like section missing post.likes to work */}
      {/* i.e. it's like passing
      likes: {post.likes} */}
     
      {/* Comments also wants its props! */}
      {/* here comments still needs prop to work so we pass {post.comments}  */}
      <Comments comments= {post.comments}/>
    </div>
  );

};

export default Post;
