
import React from 'react'
import PostForm from './components/PostForm.js'
import Posts from './components/Posts.js'
import FetchedPosts from './components/FetchedPosts.js'


function App() {
  return (
    <div className="containern pt-3">
      <div className="row">
        <div className="col">
          <PostForm/>
      </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts/>
      </div>
      </div>
      <div className="col">
        <h2>Асинхронные посты</h2>
         <FetchedPosts/> 
   </div>
    </div>
  );
}

export default App;
