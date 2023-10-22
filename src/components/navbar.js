import React, { useState } from 'react';
import './navbar.css'
import {Sidebar} from './sidebar';
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = ()=> setSidebar(!sidebar);
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>InfoVizion</h1>
        <button onClick={showSidebar}><img className='menubar' src='./images/menu.png' alt='sidebar'/></button>
      </header>
     
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='menu-items'>
            <li className='navbar-toggle'>
                <button onClick={showSidebar}><img className='close' src='./images/close_FILL0_wght400_GRAD0_opsz48.png' alt='close' /></button>
            </li>
            {Sidebar.map((item,index)=>{
              return (
                <li key={index} className={item.name}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
        </ul>
      </nav>
      </div>
    </>
  )
}
