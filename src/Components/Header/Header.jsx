import React from 'react'
import EcoIcon from '@material-ui/icons/Eco';
import "../../Styles/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import IconButton from '@material-ui/core/IconButton';


const Header = () => {
    return (
        <nav className="header_main">
            {/* Logo */}
            <div className='header'>
                <div className="header_logo">
                    <h3>Savannah <br/>Bag Co.</h3>
                    <EcoIcon fontSize='small'/>
                </div>
                {/* Right Nav */}
                <div className="header_right">
                    {/* Search */}
                    <div className="header_search">
                        <input type="text" placeholder="Search"/>
                        <SearchIcon/>
                    </div>
                    {/* Links */}
                    <div className="header_links">
                        <div className="header_links_name">
                            <p>Vision</p>
                            <p>Products</p>
                            <p>Contact Us</p>
                        </div>
                        <IconButton>
                            <LocalMallIcon fontSize="small"/>
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className="header_hr">
                
            </div>
            <hr/>
        </nav>
    )
}

export default Header
