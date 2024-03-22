import React from 'react'
import './Navbar.scss';
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';
const Navbar = () => {
  return (
    <div className='navbar'>
     <div className="container">
        <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo" />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New</span>
            <span>Popular</span>
            <div className="right">
            <Search/>
            <span>KID</span>
            <Notifications/>
            <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
 alt="" />
             <ArrowDropDown/>

            </div>
        </div>
     </div>
    </div>
  )
}

export default Navbar
