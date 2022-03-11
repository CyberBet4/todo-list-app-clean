import React, { useState } from 'react'
import firebase from 'firebase/compat/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import lockIcon from '../../assets/svgs/lock.svg'
import atIcon from '../../assets/svgs/at.svg'
import authImg from '../../assets/svgs/authentication.svg'
import { firebaseConfig } from '../../Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Spinner } from 'react-bootstrap'
import googleIcon from '../../assets/svgs/google.svg'
const Login = () => {

    const [loginError, setloginError] = useState()

    // initialize firebase app
    let provider = new GoogleAuthProvider()
    firebase.initializeApp(firebaseConfig)

    const auth = getAuth()

    // login user using google sign in popup
    const loginUserWithGoogle = async () => {
        try{
            await signInWithPopup(auth, provider)
        }catch(e) {
            setloginError(e.message)
        }
        
    }

    // get error state
    const [error] = useAuthState(auth)

  return (
    <div className='container'>
        <div className="d-flex mt-4 justify-content-center">
            <img src={authImg} className='img-fluid' alt="" />
        </div>
        <div className="d-flex justify-content-center">
            <h3 className="mt-4 header">Login to access your tasks</h3>
        </div>
        <div className='mt-4'>
            {/* Print Login errors */}
            {loginError ?
                (
                    <div className="alert alert-danger">
                        {loginError}
                    </div>
                ):
                error ? (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )
                :<></>
            }
            
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                <img src={atIcon} width={24} className='img-fluid' alt="" />
                </span>
                
            </div>
            <input type="email" className="form-control" placeholder="e.g. “johndoe.com" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                <img src={lockIcon} width={24} className='img-fluid' alt="" />
                </span>
                
            </div>
            <input type="password" className="form-control" placeholder="**********" aria-label="Username" aria-describedby="basic-addon1" autoComplete={false} />
        </div>

            <div className="d-flex justify-content-center">
                <button className="btn btn-primary w-100">
                    Login
                </button>
            </div>
            <div className="d-flex mt-3 justify-content-center">
                <button onClick={loginUserWithGoogle} className="btn btn-secondary w-100">
                    <img src={googleIcon} width="24px" className='img-fluid mr-3' alt="" />
                    Login with Google
                </button>
            </div>
            <div className="d-flex mt-3 justify-content-center">
                <button className="btn btn-link w-100">
                    Create an Account
                </button>
            </div>
            
        </div>
        
    </div>
  )
}

export default Login