import React from 'react';
import './AnatomySection.css'
import { healthData } from '../../data/healthData'
import anatomy from '../../assets/anatomy.png'
import { FaSearch, FaHeart, FaTooth } from 'react-icons/fa'
import { GiLungs, GiBrokenBone, GiLeg } from 'react-icons/gi';

const AnatomySection = () => {
    const getHealthIcon = (iconType) => {
        const iconMap = {
            'lungs': GiLungs,
            'tooth': FaTooth,
            'bone': GiBrokenBone
        };
        return iconMap[iconType] || FaHeart;
    };

    return (
        <div className="anatomy-section">
            <div className="dashboard-header">
                <h1 className="dashboard-title">Dashboard</h1>
                <button className="this-week-btn">
                    This Week <span className="dropdown-arrow">▼</span>
                </button>
            </div>

            <div className="anatomy-container">
                <div className="anatomy-image-container">
                    <img src={anatomy} alt="Human Anatomy" className="anatomy-image" />
                    <div className="magnify-icon">
                        <FaSearch className="magnify-icon-svg" />
                    </div>
                    <div className="anatomy-indicators">
                        <div className="indicator healthy-heart">
                            <FaHeart className="indicator-icon-svg" />
                            <span className="indicator-text">Healthy Heart</span>
                        </div>
                        <div className="indicator healthy-leg">
                            <GiLeg className="indicator-icon-svg" />
                            <span className="indicator-text">Healthy Leg</span>
                        </div>
                    </div>
                    <div className="anatomy-base"></div>
                </div>

                <div className="health-status-cards">
                    {healthData.map((item, index) => {
                        const IconComponent = getHealthIcon(item.icon);
                        return (
                            <div key={index} className="health-card">
                                <div className="card-header">
                                    <div className="card-icon-container">
                                        <IconComponent className="card-icon-svg" />
                                    </div>
                                    <div className="card-info">
                                        <h3 className="card-title">{item.title}</h3>
                                        <p className="card-date">{item.date}</p>
                                    </div>
                                </div>
                                <div className="progress-container">
                                    <div className="progress-bar">
                                        <div
                                            className="progress-fill"
                                            style={{
                                                width: `${item.progress}%`,
                                                backgroundColor: item.color
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <button className="details-btn">
                        Details <span className="details-arrow">→</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AnatomySection;