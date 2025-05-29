import { MdDashboard, MdHistory, MdCalendarToday, MdLocalHospital, MdShowChart, MdChat, MdHelp, MdSettings } from 'react-icons/md'

export const navigationData = [
    {
        icon: MdDashboard,
        text: 'Dashboard',
        active: true
    },
    {
        icon: MdHistory,
        text: 'History',
        active: false
    },
    {
        icon: MdCalendarToday,
        text: 'Calendar',
        active: false
    },
    {
        icon: MdLocalHospital,
        text: 'Appointments',
        active: false
    },
    {
        icon: MdShowChart,
        text: 'Statistics',
        active: false
    },
];

export const toolsData = [
    {
        icon: MdChat,
        text: 'Chat',
        active: false
    },
    {
        icon: MdHelp,
        text: 'Support',
        active: false
    },
];

export const settingsData = [
    {
        icon: MdSettings,
        text: 'Setting',
        active: false
    },
];