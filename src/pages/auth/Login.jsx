import React from 'react'
// import '../assets/css/style.css'
import lockIcon from '../../assets/svgs/lock.svg'
import atIcon from '../../assets/svgs/at.svg'
import authImg from '../../assets/svgs/authentication.svg'
const Login = () => {
  return (
    <div className='container'>
        <div className="d-flex mt-4 justify-content-center">
            <img src={authImg} className='img-fluid' alt="" />
        </div>
        <div className="d-flex justify-content-center">
            <h3 className="mt-4 header">Login to access your tasks</h3>
        </div>
        <div className='mt-4'>
            
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                <img src={atIcon} width={24} className='img-fluid' alt="" />
                </span>
                
            </div>
            <input type="email" class="form-control" placeholder="e.g. “johndoe.com" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                <img src={lockIcon} width={24} className='img-fluid' alt="" />
                </span>
                
            </div>
            <input type="password" class="form-control" placeholder="**********" aria-label="Username" aria-describedby="basic-addon1" autoComplete={false} />
        </div>

            <div className="d-flex justify-content-center">
                <button className="btn btn-primary w-100">
                    Login
                </button>
            </div>
            <div className="d-flex mt-3 justify-content-center">
                <button className="btn btn-secondary w-100">
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