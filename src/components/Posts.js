import React from 'react'
import Post from './Post.js'
import {connect} from 'react-redux'


const Posts =  ({ myPosts }) => {
    const postLength = myPosts.length
    return (
        !postLength ? <h4>Постов еще нет</h4>: (myPosts.map(post => <Post post={post} key={post.id}/>))
    )
}
const mapStateToPropse = state => {
    return {
        myPosts: state.posts.posts
    }
}

export default connect(mapStateToPropse,null)(Posts)