import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faClose, faSpaghettiMonsterFlying } from '@fortawesome/free-solid-svg-icons'

const AddTaskModal = ({ active }) => {

    // const [show, setShow] = useState(false)
    const [ activeDisplay, setactiveDisplay ] = useState(true)
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ time, setTime ] = useState('')
    const [ date, setDate ] = useState('')

    var data = ''

    const setActive = () =>{

        if(active && activeDisplay === false){
            active = false
            // setactiveDisplay(f)
        }else{
            active = true
        }

    }

    const getthisTask = () => {
        
        // data = {
        //     title : title,
        //     desc : description,
        //     time : time,
        //     date : date
        // }

        console.log(title);
    }

    console.log(title)

  return (
    <div>
        <Modal
        // show={active}
        show={active}
        onHide={() => setActive()}
        dialogClassName="modal-90w"
        
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
        <button className="btn btn-close" style={{float : 'right'}}>
                    <FontAwesomeIcon onClick={()=> setactiveDisplay(false)} icon={faClose} style={{fontSize : 24}} />
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
            <input type="text" class="form-control" onChange={(e) => setTitle(e.current.value)} placeholder="“Walk the dog”" />
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                {/* <img src={} width={24} className='img-fluid' alt="" /> */}
                </span>
                
            </div>
            <input type="text" class="form-control" onChange={(e) => setDescription(e.current.value)} placeholder="Description"  />
        </div>

        <div className="d-flex" style={{justifyContent : 'space-between'}}>
            <div class="input-group mb-3  w-40">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                    {/* <img src={} width={24} className='img-fluid' alt="" /> */}
                    </span>
                    
                </div>
                <input type="time" name="" onChange={(e) => setTime(e.current.value)} />
            </div>

            <div class="input-group w-40 mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                    {/* <img src={} width={24} className='img-fluid' alt="" /> */}
                    </span>
                    
                </div>
                <input type="date" name="" onChange={(e) => setDate(e.current.value)} />
            </div>
        </div>
        <div className="d-flex justify-content-center">
                <button onClick={getthisTask()} className="btn btn-primary w-100">
                    Add Task
                </button>
            </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AddTaskModal