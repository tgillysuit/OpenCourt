import './Temp.css'
//import './App.css'
import { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material"

import ConfirmationsPage from './pages/ConfirmationsPage'
import EventsPage from './pages/GamesPage'
import HomePage from './pages/HomePage'


function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage />
      case "events":
        return <EventsPage />
      case "confirmations":
        return <ConfirmationsPage />
      default:
        return <HomePage />
    }
  };

  return (

      <Box sx={{ width: '100vw' }}>
        <AppBar position="fixed" 
          color="primary">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Button 
              color="inherit"
              onClick={() => setActivePage("home")}>
                Home
              </Button>
              <Button 
              color="inherit"
              onClick={() => setActivePage("events")}>
                Events
              </Button>
              <Button 
              color="inherit"
              onClick={() => setActivePage("confirmations")}>
                Confirmations
              </Button>
            </Toolbar>
          </AppBar>
          <Box sx={{ padding: 3}}>
          {renderPage()}
        </Box>
      </Box>

      
    
  )
}

export default App
