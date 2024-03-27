import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/pioneer-logo.png"
import { GoHome } from "react-icons/go";
import { CgOrganisation } from "react-icons/cg";
import { IoCubeOutline, IoWalletOutline } from "react-icons/io5";
import { TbMobiledata } from "react-icons/tb";
import { FaRegHourglass, FaBars } from "react-icons/fa6";

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<GoHome/>
        },
        {
            path:"/organisation",
            name:"Organisation",
            icon:<CgOrganisation/>
        },
        {
            path:"/assets",
            name:"Assets",
            icon:<IoCubeOutline/>
        },
        {
            path:"/trade",
            name:"Trade",
            icon:<TbMobiledata/>
        },
        {
            path:"/history",
            name:"History",
            icon:<FaRegHourglass/>
        },
        {
            path:"/wallet",
            name:"Wallet",
            icon:<IoWalletOutline/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   
                   <img src={Logo} style={{display: isOpen ? "block" : "none"}} className="logo" alt="pioneer"/>
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