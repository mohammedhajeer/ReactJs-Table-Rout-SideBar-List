import React, { useState } from 'react';
import {
    FaRegBuilding,
    FaBars,
    FaUserAlt,
    FaRegCheckSquare,
    FaClock,
    FaShareAlt,
    FaRegCopy,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaRegBuilding/>
        },
        {
            path:"/available",
            name:"Available units",
            icon:<FaUserAlt/>
        },
        {
            path:"/invoices",
            name:"Invoices",
            icon:<FaRegCheckSquare/>
        },
        {
            path:"/projects",
            name:"Projects",
            icon:<FaClock/>
        },
        {
            path:"/socialmedia",
            name:"Social media",
            icon:<FaShareAlt/>
        },
        {
            path:"/integrations",
            name:"Integrations",
            icon:<FaThList/>
        },
        {
            path:"/documentation",
            name:"Documentation",
            icon:<FaRegCopy/>
        }
    ]
    return (
        <div className='mains'>
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Investly.</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;

//Dashboard
//Available units
//Invoices
//Projects
//Social media
//Integrations
//Documentation