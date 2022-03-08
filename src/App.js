import React from 'react'
import './assets/css/style.css'
import Login from './pages/auth/Login'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="App" style={{maxWidth : 414}}>
      <Dashboard />
      {/* <Login /> */}
    </div>
  );
}

export default App;
