import React from 'react'
import avatar1 from '../assets/img/avatar1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
  return (
    <div className=''>
        <div className="head-part p-2 pb-0 shadow-sm">
            <div className="d-flex mt-4 w-100" style={{justifyContent : 'space-between', alignItems : 'center'}}>
                <div>
                    {/* motivation text */}
                    <h3 className="header" style={{fontSize : 18}}>Get something done today!</h3>
                </div>
                    {/* image goes here */}
                    <img src={avatar1} className='img-fluid avatar' alt="" />
            </div>

            <div className='d-flex justify-content-start p-3'>
                <button className="btn btn-default tab-btn">
                    Pending
                </button>
                <button className="btn btn-default tab-btn">
                    Pending
                </button>
            </div>
            
        </div>


        {/* add button fixed at the bottom */}
        <div className="fixed-bottom">
            <div className="d-flex mb-5 justify-content-center">
                <button className="btn rounded-btn">
                    <FontAwesomeIcon icon={faAdd} />
                </button>
                
            </div>
            
        </div>
    </div>
  )
}

export default Dashboard