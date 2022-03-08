import React, { useEffect, useState } from 'react'
import avatar1 from '../assets/img/avatar1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faClose } from '@fortawesome/free-solid-svg-icons'
import Close from '../assets/svgs/x.svg'
import Card from '../components/Card'
import Modal from 'react-bootstrap/Modal'
import edit2 from '../assets/svgs/edit-2.svg'
import desc from '../assets/svgs/menu.svg'
import Spinner from 'react-bootstrap/Spinner'
import emtpyTasklist from '../assets/svgs/tasklist.svg'
// import AddTaskModal from '../components/AddTaskModal'

const Dashboard = () => {

    const [ screen, setScreen ] = useState(0)
    const [ active, setActive ] = useState(false)
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ time, setTime ] = useState('')
    const [ date, setDate ] = useState('')
    var data = ''
    let pendingClass = ''
    let completedClass = ''
    

    const thisTask = () => {
        
        data = {
            title : title,
            desc : description,
            time : time,
            date : date
        }

        // timer is prone to change... bcuz we'd need to wait for 
        //response from firebase b4 we close the modal
        setTimeout(() => {
            setActive(false)    
        }, 500);
        
        console.log(data);
    }

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
        <button className="btn btn-close" style={{float : 'right'}}  onClick={()=> setActive(false)} icon={faClose}>
                    <img src={Close} alt="" className="img-fluid" />
                </button>
          <Modal.Title id="example-custom-modal-styling-title">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <h3 className="header mt-3 mb-4" style={{fontSize : 18, overflowY : 'hidden'}}>
            Get Something Done Today!
        </h3>

        <div class="input-group mb-4">
            <div class="input-group-prepend">
                <span class="input-group-text modal-form" id="basic-addon1">
                <img src={edit2} width={20} className='img-fluid' alt="" />
                </span>
                
            </div>
            <input type="text" class="form-control" onChange={(e) => setTitle(e.target.value)}  placeholder="“Walk the dog”"  />
        </div>

        <div class="input-group mb-4">
            <div class="input-group-prepend modal-form">
                <span class="input-group-text " id="basic-addon1">
                <img src={desc} width={20} className='img-fluid' alt="" />
                </span>
                
            </div>
            <input type="text" class="form-control"  onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        </div>

        <div className="d-flex mb-5" style={{justifyContent : 'space-between'}}>
            <div class="input-group mb-3 mr-2 w-40">
                
                <input type="time" className='form-control' onChange={(e) => setTime(e.target.value)} name="" id="" />
            </div>

            <div class="input-group w-40 mb-3">
                
                <input type="date" className='form-control ml-2' onChange={(e) => setDate(e.target.value)} name="" id="" />
            </div>
        </div>
        <div className="d-flex justify-content-center">
                <button className="btn btn-primary w-100" onClick={thisTask} >
                <Spinner animation="border" size="sm" className='mr-3' variant="light" />
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
                    {/* Empty Completed Screen */}
                    <div className="d-flex mt-5 justify-content-center">
                        <img src={emtpyTasklist} alt="" className="img-fluid" />
                    </div>                            
                    
                    <h6 style={{color : '#808080', textAlign : 'center'}}>Your task willl appear here when they are ticked complete</h6>
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
                    <h3 className="header" style={{fontSize : 18, overflowY : 'hidden'}}>
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