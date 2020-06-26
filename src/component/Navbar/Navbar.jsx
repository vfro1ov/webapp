import React from 'react';

//import s from "Navbar.module.css";
import s from "./Navbar.module.css"


const Navbar = () => {
    return(
 <nav >
     <div> Навигация страницы
         <div className={s.nav}><a href = '/profile' >Profile</a></div>
         <div className={s.nav}><a href = '/dialogs'>Message</a></div>
         
     </div>
      </nav> 
   
    );
}
export default Navbar;