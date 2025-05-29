import React from 'react';
import { FaHeartbeat, FaEye, FaBrain, FaStethoscope, FaHospital } from 'react-icons/fa';
import './UpcomingSchedule.css';
import { upcomingAppointments } from '../../data/appointment';

const UpcomingSchedule = () => {
    const getIconComponent = (iconType) => {
        const iconMap = {
            'heart-pulse': FaHeartbeat,
            'eye': FaEye,
            'brain': FaBrain,
            'stethoscope': FaStethoscope
        };
        return iconMap[iconType] || FaHospital;
    };

    return (
        <div className="upcoming-schedule-container">
            <h1 className="schedule-title">The Upcoming Schedule</h1>
            
            {upcomingAppointments.map((daySchedule, dayIndex) => (
                <div key={dayIndex} className="day-section">
                    <h2 className="day-title">On {daySchedule.day}</h2>
                    
                    <div className="appointments-row">
                        {daySchedule.appointments.map((appointment, appointmentIndex) => {
                            const IconComponent = getIconComponent(appointment.icon);
                            return (
                                <div key={appointmentIndex} className="appointment-card">
                                    <div className="appointment-content">
                                        <div className="appointment-text">
                                            <h3 className="appointment-title">{appointment.title}</h3>
                                            <p className="appointment-time">{appointment.time}</p>
                                        </div>
                                        <div className="appointment-icon">
                                            <IconComponent className="icon-component" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UpcomingSchedule;