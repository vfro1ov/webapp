import React from 'react';
import Post from './Post/Post';
import s from "./Posts.module.css"

const Posts = (props) => {
    return (
        <div className={s.posts}>
          <div> <Post  message='Привет как ты? '/> </div>
           <Post message = 'Давно не было в уличных гонках!'/>
           <Post />
         
            </div>
    )
}
export default Posts;