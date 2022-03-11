import React from 'react'
import editIcon from '../assets/svgs/edit.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock, faCheck, faClose } from '@fortawesome/free-solid-svg-icons'

const Card = ({ datas }) => {
    // console.log(datas)
  return (
    <div>
        <div className='task-card p-4 mb-4'>
            <div className="d-flex" style={{justifyContent : 'space-between', alignItems : 'center'}}>
                <div style={{width : '70%'}}>
                    <h5 className='task-title'>{datas.title}</h5>
                    <p className="task-desc">
                        {datas.description}
                    </p>
                    
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
                        <button className="btn btn-default" 
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
                            <FontAwesomeIcon className='info-color' style={{fontSize : 12, color : '#0197F6'}} icon={faClose} />
                        </button>
                        <button className='btn btn-opt '>
                            <FontAwesomeIcon className='info-color' style={{fontSize : 12, color : '#0197F6'}} icon={faCheck} />
                    </button>
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Card