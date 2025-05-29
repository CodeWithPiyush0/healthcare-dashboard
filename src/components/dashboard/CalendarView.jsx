import React from 'react';
import { calendarAppointments, appointmentCards } from '../../data/appointment'
import './CalendarView.css';

const CalendarView = () => {
    const dayHeaders = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
    const weekDates = [25, 26, 27, 28, 29, 30, 31];
    
    const timeSlotGrid = [
        ['10:00', '08:00', '12:00', '10:00', '—', '12:00', '09:00'],
        ['11:00', '09:00', '—', '11:00', '14:00', '14:00', '10:00'],
        ['12:00', '10:00', '13:00', '—', '16:00', '15:00', '11:00']
    ];

    const getSlotStyle = (time, rowIndex, colIndex) => {
        if (time === '—') return 'empty-slot';
        if ((rowIndex === 1 && colIndex === 1) || 
            (rowIndex === 0 && colIndex === 5) || 
            (rowIndex === 0 && colIndex === 6)) {
            return 'highlighted-slot';
        }        
        if (rowIndex === 1 && colIndex === 3) {
            return 'secondary-slot';
        }
        
        return 'normal-slot';
    };

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <h2 className="month-title">May 2025</h2>
                <div className="nav-arrows">
                    <button className="nav-arrow prev">◀</button>
                    <button className="nav-arrow next">▶</button>
                </div>
            </div>

            <div className="calendar-grid">
                <div className="days-row">
                    {dayHeaders.map((day, idx) => (
                        <div key={idx} className="day-header">{day}</div>
                    ))}
                </div>

                <div className="dates-row">
                    {weekDates.map((date, idx) => (
                        <div key={idx} className="date-cell">
                            {date}
                        </div>
                    ))}
                </div>

                <div className="time-slots-grid">
                    {timeSlotGrid.map((row, rowIndex) => (
                        <div key={rowIndex} className="time-row">
                            {row.map((time, colIndex) => {
                                const slotClass = getSlotStyle(time, rowIndex, colIndex);
                                
                                return (
                                    <div key={colIndex} className="time-slot">
                                        <div className={`time-pill ${slotClass}`}>
                                            {time}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            <div className="appointment-cards">
                {appointmentCards.map((card, idx) => (
                    <div key={idx} className={`appointment-card ${idx === 0 ? 'dentist-card' : 'physio-card'}`}>
                        <div className="card-content">
                            <div className="card-text">
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-time">{card.time}</p>
                                <p className="card-doctor">{card.doctor}</p>
                            </div>
                            <div className="card-icon">
                                <span className="icon">{card.icon}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalendarView;
