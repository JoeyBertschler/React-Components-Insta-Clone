// Look at the number of likes on line 26. Right now it's hard coded to '100'.
// Use a piece of data coming in through props to display the correct number of likes.
// You will also add an onClick handler that utilizes `likePost` to increase the count of likes.
// (As a stretch goal, you might want to prevent your user from "liking" the same post more than once.)
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const LikeSection = props => {
  // 🔥 Make sure the parent of LikeSection is passing the right props!

  //check the props and make sure they pass the correct values
  const { likePost, likeCount, post } = props;

  return (
    <div>
      <div
        className='like-section'
        key='likes-icons-container'
      >
{/* 
        bind onclick event to div, allows iterating through like count and add */}
        <div onClick={e => likePost(post.id)} className='like-section-wrapper'> 
          <FontAwesomeIcon icon={faHeart} />
        </div>


        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>

{/* grab amount of likes from dummy data / prop will take likes from dummy and return key/key value pair */}
{/* 
likes: 400 (hard coded)
likes: {props.likeCount} */}

      <p className='like-number'> {likeCount} likes</p>
    </div>
  );
};

export default LikeSection;
