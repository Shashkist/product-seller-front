import React from 'react'
import { NavLink } from 'react-router-dom';
import App from '../../App';
import logo from '../../logo.svg';


function NavigationBar() {
  return (
    
    <nav class="navbar navbar-expand navbar-dark bg-dark">
         <a href='http://localhost:8080/' className='navbar-brand ms-1'>
            <img src={logo} className="App-logo" alt="logo" />
        </a>

        <div className='navbar-nav me-auto'>
            <li className='nav-item'>
                <NavLink to='/admin' className='nav-link'>
                    Admin
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/home' className='nav-link'>
                    Home
                </NavLink>
            </li>
            
        </div>

        <div className='navbar-nav ms-auto'>
            <li className='nav-item'>
                <NavLink to='/login' className='nav-link'>
                    Log in
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/signUp' className='nav-link'>
                    Sign up
                </NavLink>
            </li>
            
        </div>
    </nav>
    
   
    
  )
}

export default NavigationBar