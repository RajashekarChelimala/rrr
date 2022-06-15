import React from "react";
import "./Footer.css";

const Footer = props =>{
    return (
        <footer id="contact">
   <ul>
      <div id="icon-container">
         <a href="#">
            <div className="icon">
               <li><i className="fab fa-twitter"></i></li>
            </div>
         </a>
         <a href="#">
            <div className="icon">
               <li><i className="fab fa-instagram"></i></li>
            </div>
         </a>
         <a href="#">
            <div className="icon">
               <li><i className="fab fa-facebook-f"></i></li>
            </div>
         </a>
         <a href="#">
            <div className="icon">
               <li><i className="far fa-envelope"></i></li>
            </div>
         </a>
      </div>
   </ul>
   <p>&copy; 2022-2023, Roomie</p>
</footer>
 
    );
};
export default Footer;