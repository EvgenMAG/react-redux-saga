import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchPosts } from '../redux/actions.js'
import Post from './Post.js'

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  const loader = useSelector(state => state.app.loading);
  const postLength = posts.length;
  console.log(loader);

  if (loader) {
    return (<h1>Loading...</h1>)
  }
  
  return ( 
  !postLength ? (<button className="btn btn-primary" onClick={()=> dispatch(fetchPosts())}>Загрузить</button>) :
                (posts.map(post => <Post post={post} key={post.id} />))
    )   
}