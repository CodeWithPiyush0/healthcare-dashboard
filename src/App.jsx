import React from 'react'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import DashboardMainContent from './components/dashboard/DashboardMainContent' 
import './App.css'

function App() {

  return (
    <div className="main">
      <Header />
      <div className="main-body">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  )
}

export default App
