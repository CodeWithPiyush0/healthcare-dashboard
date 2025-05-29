import React from 'react';
import AnatomySection from './AnatomySection'
import CalendarView from './CalendarView'
import UpcomingSchedule from './UpcomingSchedule'
import ActivityFeed from './ActivityFeed';
import './DashboardMainContent.css';

const DashboardMainContent = () => {
    return (
        <main className="dashboard-main">
            <div className="dashboard-content">
                <div className="dashboard-left">
                    <div className="anatomy-wrapper">
                        <AnatomySection />
                    </div>
                    <div className="activity-wrapper">
                        <ActivityFeed />
                    </div>
                </div>

                <div className="dashboard-right">
                    <div className="calendar-wrapper">
                        <CalendarView />
                    </div>
                    <div className="schedule-wrapper">
                        <UpcomingSchedule />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DashboardMainContent;