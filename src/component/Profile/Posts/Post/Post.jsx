import React from 'react';

import s from "./Post.module.css"

const Post = (props) => {
    let name = 'Гомер';

    return (
        <div className={s.post}>
            <div className={s.postName}>{name}</div>
            <div className={s.ava}> <img src="https://s56.radikal.ru/i153/0905/fa/399cfb233fed.jpg" alt="" /> </div>
            <div className={s.postItem}>{props.message}</div>
            
        </div>
    )
}
export default Post;