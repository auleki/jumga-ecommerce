import React from 'react'
import './App.scss'
import Sidebar from './components/Sidebar'
import PageRoutes from './components/PageRoutes'

const App = () => {
    
    return (
      <div class="main">
        <Sidebar />
        <PageRoutes />
      </div>

  )
}

export default App