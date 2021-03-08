/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState } from 'react';
import "./App.css";
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
import Posts from './components/Posts/Posts'
import SearchBar from './components/SearchBar/SearchBar'
// Import the dummyData
import dummyData from './dummy-data'
// console.log(dummyData)

    // tests and examples
    // import "./App.css" //this is a css file, so you need to specify it's extension
    // import App from "./App.js" //this is a javascript file, 
    // so it already assumes it's either a .js or .jsx file
    //--------------------

    // function App() {
    // } alternatively

    
const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  const [posts, setPosts] = useState(dummyData) //this whole line is a 'state'

  // This state is the source of truth for the data inside the app. 
  // You won't be needing dummyData anymore. We are using posts now which contains dummyData (i.e.)
  // ----> no import of dummyData on other files needed anymore
 
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [theSearchBar, setTheSearchBar] = useState('') //~props is child of state, passing data to lower compon.
  // state is a changing thing but also a prompt (when passed to child)
  // actually a library, react --->pathing, only parent to child

//theSearchBar - contains data, setTheSearchBar - contains original data with no changes

//after importing data set it to setstate too as well as posts

    const likePost = postId => {
    setPosts(posts.map((post) =>{ //same as without ()
      return posts.id === postId //dummyData.post.id?
      ? {...post, likes: post.likes + 1}
      : post
    }))
    }

    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.
      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.
      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator which is ...).
        - otherwise just return the post object unchanged.
     */

  return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them */}
      
      {/* <SearchBar searchBar = { SearchBar('') } /> 
      <Posts posts = { posts }/ > TECHNICALLY NOT NEEDED */}
      <SearchBar searchBar = { SearchBar('') } /> 

{/* 
      we take the tag for posts then we pass props that we created inside the other components
      post -> <Post/>
      for ex. likePost={likePost} being taken from the LikeSection */}
      
      <Posts posts = { posts }  likePost = {likePost}/>
  {/* posts = { posts } --> this is added into (also) props */}

      {/* Check the implementation of each component,
       to see what props they require, if any! */}

    </div>
  );
};

export default App;









