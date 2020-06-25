import React from 'react';
import Posts from './Posts/Posts'
import "./Profile.css";

const Profile = () => {
    return (
        <div className="profile">
            <div className="container">
                <div>CONTENT</div>
                <img src="https://images.pexels.com/photos/4321944/pexels-photo-4321944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            <div>
            Привет Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda optio doloribus quod beatae, in ipsum! Cumque in, veritatis odit excepturi animi vitae quisquam, recusandae pariatur laudantium unde consectetur alias.
            </div>
            <Posts />
            </div>
        </div>
    )
}
export default Profile;