import React from 'react';
import Posts from './Posts/Posts'
import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>CONTENT
            <div><img src="https://images.pexels.com/photos/4321944/pexels-photo-4321944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </div>
                <p>Привет Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda optio doloribus quod beatae, in ipsum! Cumque in, veritatis odit excepturi animi vitae quisquam, recusandae pariatur laudantium unde consectetur alias.
            </p>
            </div>
            <div className={s.container}>
                <div>
                    <Posts />
                </div>

            </div>
        </div>
    )
}
export default Profile;