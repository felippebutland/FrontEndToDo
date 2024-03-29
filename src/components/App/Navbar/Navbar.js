import React, {useContext, useState} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, Route, Switch } from "react-router-dom";
import { SideBarData } from "./SidebarData";
import {IconContext } from 'react-icons';
import link from "next/link";
import { AuthContext } from "../../../context/AuthContext";


const Navbar = () => {
    const [sideBar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sideBar);

    const { Logout } = useContext(AuthContext);
    
    return(
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <Link to = "#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSideBar}/>
                </Link>
                <Link to = "/" className='logout'>
                    <AiIcons.AiOutlineLogout onClick={Logout}/>
                </Link>
                <link rel="icon" href="./app/prioridade" />
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