import React,  { useEffect, useState } from 'react'
import editIcon from '../assets/svgs/edit.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock, faCheck, faClose } from '@fortawesome/free-solid-svg-icons'
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db, auth } from '../pages/Dashboard';
import 'animate.css';
import Toaster from './Toaster'; 
import { useAuthState } from 'react-firebase-hooks/auth'

const Card = ({ datas, docId, openModal }) => {

    const [user] = useAuthState(auth)
    const [ toastDisplay, settoastDisplay ] = useState('')

    

    const editTask = (status = false) => {
        openModal(docId, status, datas)
    }


    // delete current task
    const deleteTask = async () =>{
        try{
            await deleteDoc(doc(db, "users", user.uid, "tasklist", docId))
            console.log('Task Deleted!')
            // settoastDisplay(<Toaster title={datas.title} status='Task Deleted!' active={true} />)
        }catch(e){
            console.log(e.message)
        }
        
    }

    // update current task
    const updateTask = async () =>{
        try{
            await updateDoc(doc(db, "users", user.uid, "tasklist", docId), {
                completed : true
            })
            console.log('Task Completed!')
        }catch(e){
            console.log(e.message)
        }
    }
    
  return (
    <div>
        
        <div className='task-card p-4 mb-4 animate__animated animate__fadeIn'>
            <div className="d-flex" style={{justifyContent : 'space-between', alignItems : 'center'}}>
                <div style={{width : '70%'}}>
                    <h5 className='task-title'>{datas.title}</h5>
                    <p className="task-desc">
                        {datas.description}
                    </p>
                    
                    <div>
                        {toastDisplay}
                    </div>
                    <div className="d-flex justify-content-start">
                        <div className="d-flex justify-content-start mr-4">
                            <FontAwesomeIcon className='info-color mr-2' style={{fontSize : 14}} icon={faCalendar} />
                            <span className='info-color' style={{fontSize : 10}}>{datas.date}</span>
                        </div>
                        <div className="d-flex justify-content-start mr-2">
                            <FontAwesomeIcon className='info-color mr-2' style={{fontSize : 14}} icon={faClock} />
                            <span className='info-color' style={{fontSize : 10}}>{datas.time}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='d-flex justify-content-end'>
                        <button onClick={() => editTask(true)} className="btn btn-default" 
                        style={{color : '#0197F6',
                                padding : 0,
                                fontSize : 14,
                                borderRadius : 0
                            }}>
                                <img src={editIcon} className='img-fluid mr-2' alt="" />
                            Edit
                        </button>
                    </div>

                    <div className="d-flex justify-content-center mt-5">
                        <button className='btn btn-opt  mr-3'>
                            <FontAwesomeIcon className='info-color' onClick={deleteTask} style={{fontSize : 12, color : '#0197F6'}} icon={faClose} />
                        </button>
                        <button className='btn btn-opt '>
                            <FontAwesomeIcon className='info-color' onClick={updateTask} style={{fontSize : 12, color : '#0197F6'}} icon={faCheck} />
                    </button>
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Card