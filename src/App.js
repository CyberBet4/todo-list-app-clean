import React from 'react'
import './assets/css/style.css'
import Login from './pages/auth/Login'
import Dashboard from './pages/Dashboard'
import { Spinner } from 'react-bootstrap'
import 'animate.css';
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
// import { GoogleAuthProvider } from 'firebase/compat/app'

function App() {

  const auth = getAuth()

  const [user, loading] = useAuthState(auth)
  // console.log(user)
  
  return (
    <div className="App" style={{maxWidth : 414}}>
      { (loading) ?
        (
          <div>
            <div className="d-flex justify-content-center" style={{
              height : '100vh',
              alignItems: 'center'}} >
              <Spinner animation="border"  className='mr-3' variant="dark" />
            </div>
          </div>
        )
        
        :
      user ? <Dashboard /> : <Login />}
      {/* <Login /> */}
    </div>
  );
}

export default App;
