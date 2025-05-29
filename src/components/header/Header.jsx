import React from 'react';
import { IoSearch, IoNotifications, IoAdd } from 'react-icons/io5'
import avatar from '../../assets/avatar.png'
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <h1 className="logo">
                    <span className="logo-health">Health</span>
                    <span className="logo-care">care.</span>
                </h1>
            </div>
            
            <div className="header-center">
                <div className="search-container">
                    <IoSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-input"
                    />
                </div>
                
                <div className="notification-container">
                    <IoNotifications className="notification-icon" />
                </div>
            </div>
            
            <div className="header-right">
                <div className="user-profile">
                    <img
                        src={avatar}
                        alt="User Avatar"
                        className="user-avatar"
                    />
                </div>
                
                <button className="add-button">
                    <IoAdd />
                </button>
            </div>
        </header>
    )
}

export default Header;