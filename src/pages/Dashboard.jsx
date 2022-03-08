import React, { useEffect, useState } from 'react'
import avatar1 from '../assets/img/avatar1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faClose } from '@fortawesome/free-solid-svg-icons'
import Card from '../components/Card'
import Modal from 'react-bootstrap/Modal'
// import AddTaskModal from '../components/AddTaskModal'

const Dashboard = () => {

    const [ screen, setScreen ] = useState(0)
    const [ active, setActive ] = useState(false)
    let pendingClass = ''
    let completedClass = ''
    

    const showModal = () =>{
        return(
            <Modal
        // show={active}
        show={active}
        onHide={() => setActive()}
        dialogClassName="modal-90w"
        
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
        <button className="btn btn-close" style={{float : 'right'}}>
                    <FontAwesomeIcon onClick={()=> setActive(false)} icon={faClose} style={{fontSize : 24}} />
                </button>
          <Modal.Title id="example-custom-modal-styling-title">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body scrollable={true}>
        <h3 className="header" style={{fontSize : 18}}>
            Get Something Done Today
        </h3>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                {/* <img src={} width={24} className='img-fluid' alt="" /> */}
                </span>
                
            </div>
            <input type="email" class="form-control" placeholder="“Walk the dog”" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                {/* <img src={} width={24} className='img-fluid' alt="" /> */}
                </span>
                
            </div>
            <input type="email" class="form-control" placeholder="Description" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="d-flex" style={{justifyContent : 'space-between'}}>
            <div class="input-group mb-3  w-40">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                    {/* <img src={} width={24} className='img-fluid' alt="" /> */}
                    </span>
                    
                </div>
                <input type="time" name="" id="" />
            </div>

            <div class="input-group w-40 mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                    {/* <img src={} width={24} className='img-fluid' alt="" /> */}
                    </span>
                    
                </div>
                <input type="date" name="" id="" />
            </div>
        </div>
        <div className="d-flex justify-content-center">
                <button className="btn btn-primary w-100">
                    Add Task
                </button>
            </div>
        </Modal.Body>
      </Modal>
        )
    }

    const showContent = () => {
        if(screen === 0) {
            // setpendingClass("btn btn-default tab-btn active mr-4")
            return (
                <div className="main-content p-3" >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    
                </div>
            )
        }else if(screen === 1){
            return(
                <div className="main-content p-3">
                    Completed Screen
                </div>
            )
        }
    }


        if (screen === 0) {
            pendingClass = 'btn btn-default tab-btn active mr-4';
            completedClass = "btn btn-default tab-btn"
        }else{
            pendingClass = 'btn btn-default tab-btn mr-4'
            completedClass = "btn btn-default active tab-btn"
        }

  return (
    <div className=''>
        {showModal()}
        {/* <AddTaskModal active={active} /> */}
        <div className="head-part p-2 pb-0 shadow-sm">
            <div className="d-flex mt-2 w-100" style={{justifyContent : 'space-between', alignItems : 'center'}}>
                <div>
                    {/* motivation text */}
                    <h3 className="header" style={{fontSize : 18}}>
                        Welcome back, Lad!
                        {/* To Do List App */}
                    </h3>
                </div>
                    {/* image goes here */}
                    <img src={avatar1} className='img-fluid avatar' alt="" />
            </div>

            <div className='d-flex p-0 justify-content-start'>
                <button onClick={() => setScreen(0)} className={pendingClass}>
                    Pending
                </button>
                <button onClick={() => setScreen(1)} className={completedClass}>
                    Completed
                </button>
            </div>
            
        </div>

        {showContent()}


        {/* add button fixed at the bottom */}
        <div className="fixed-bottom">
            <div className="d-flex mb-5 justify-content-center">
                <button className="btn rounded-btn shadow-lg"
                onClick={() => setActive(true)} >
                    <FontAwesomeIcon icon={faAdd} />
                </button>
                
            </div>
            
        </div>
    </div>
  )
}

export default Dashboard