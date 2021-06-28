import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, Route, Switch } from "react-router-dom";
import { SideBarData } from "./SidebarData";
import {IconContext } from 'react-icons';


const Navbar = () => {
    const [sideBar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sideBar);
    return(
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <Link to = "#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSideBar}/>
                </Link>
                <Link to = "/" className='logout'>
                    <AiIcons.AiOutlineLogout />
                </Link>
            </div>
            <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideBar}>
                    <li className="navbar-toggle">
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path} href={item.path} >
                                    {item.icon}
                                    <span>
                                        {item.title}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    );    
}

export default Navbar;