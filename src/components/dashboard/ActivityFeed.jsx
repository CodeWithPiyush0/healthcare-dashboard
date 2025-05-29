import React from 'react'
import { weeklyActivity } from '../../data/activity'
import './ActivityFeed.css'

const colors = ['#B8F2E6', '#7BDFF2', '#00BFFF', '#4A90E2']

const ActivityFeed = () => {
    const totalAppointments = weeklyActivity.reduce((total, day) => total + day.count, 0)

    const generateBars = (count) => {
        const bars = []
        const baseHeights = [25, 45, 35, 60, 30, 50]
        
        for (let i = 0; i < count; i++) {
            const height = baseHeights[i % baseHeights.length] + Math.random() * 20
            const color = colors[i % colors.length]
            
            bars.push(
                <div key={i} className='bar' style={{ height: `${height}px`, backgroundColor: color}} />
            )
        }
        return bars
    }

    return (
        <section className='activity-feed card'>
            <div className='activity-header'>
                <h3>Activity</h3>
                <span className='activity-subtitle'>{totalAppointments} appointment{totalAppointments !== 1 ? 's' : ''} on this week</span>
            </div>
            <div className='activity-chart'>
                {weeklyActivity.map((day, dayIndex) => (
                    <div className='activity-bar-group' key={dayIndex}>
                        <div className='bars-container'>
                            {generateBars(day.count)}
                        </div>
                        <div className='bar-label'>{day.day}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ActivityFeed