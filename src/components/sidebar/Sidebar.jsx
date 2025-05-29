import React from 'react';
import { navigationData, toolsData, settingsData } from '../../data/navigationData';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-content">
                <div className="sidebar-section">
                    <h3 className="sidebar-title">General</h3>
                    <nav className="sidebar-nav">
                        {navigationData.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <a
                                    key={index}
                                    href="#"
                                    className={`nav-item ${item.active ? 'active' : ''}`}
                                >
                                    <span className="nav-icon">
                                        <IconComponent />
                                    </span>
                                    <span className="nav-text">{item.text}</span>
                                </a>
                            );
                        })}
                    </nav>
                </div>

                <div className="sidebar-section">
                    <h3 className="sidebar-title">Tools</h3>
                    <nav className="sidebar-nav">
                        {toolsData.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <a
                                    key={index}
                                    href="#"
                                    className={`nav-item ${item.active ? 'active' : ''}`}
                                >
                                    <span className="nav-icon">
                                        <IconComponent />
                                    </span>
                                    <span className="nav-text">{item.text}</span>
                                </a>
                            );
                        })}
                    </nav>
                </div>
            </div>

            <div className="sidebar-bottom">
                {settingsData.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <a
                            key={index}
                            href="#"
                            className={`nav-item ${item.active ? 'active' : ''}`}
                        >
                            <span className="nav-icon">
                                <IconComponent />
                            </span>
                            <span className="nav-text">{item.text}</span>
                        </a>
                    );
                })}
            </div>
        </aside>
    );
};

export default Sidebar;