import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Toast from 'react-bootstrap/Toast'
import { faAdd, faClose, faCircle } from '@fortawesome/free-solid-svg-icons'


const Toaster = ({ title, status, active = false }) => {
    const [ toastAnimation, settoastAnimation ] = useState('animate__animated animate__bounceInDown')
    const [ show, setShow ] = useState(false)

  return (
  <Toast onClose={()=> settoastAnimation('animate__animated animate__bounceOutUp')} show={active}
    delay={3000} animation={true}
    autohide
    className={toastAnimation}
    >
    <Toast.Header>

      <FontAwesomeIcon icon={faCircle} className='mr-2' style={{color : '#008148'}} />
      <strong className="mr-auto">{status}</strong>
      <small>11 mins ago</small>
    </Toast.Header>
    <Toast.Body style={{paddingBottom : 0}}>{title}
      <br />
      <button className="btn btn-default w-100" onClick={()=> {
        settoastAnimation('animate__animated animate__bounceOutUp')
        // setShow(false)
        }} style={{padding : 6, fontSize : 14, marginTop : 12, color : '#0197F6'}} >
        <FontAwesomeIcon icon={faClose} className='mr-1' /> Close</button>
    </Toast.Body>

  </Toast>
  )
  }

export default Toaster