import React, { useEffect, useState } from 'react'
import defaultAvatar from '../assets/img/avatar-default.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faClose } from '@fortawesome/free-solid-svg-icons'
import Close from '../assets/svgs/x.svg'
import Card from '../components/Card'
import Modal from 'react-bootstrap/Modal'
import edit2 from '../assets/svgs/edit-2.svg'
import desc from '../assets/svgs/menu.svg'
import Spinner from 'react-bootstrap/Spinner'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { v4 as uuidv4 } from 'uuid';
import emtpyTasklist from '../assets/svgs/tasklist.svg'
import Toaster from '../components/Toaster'
import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { getFirestore, collection, addDoc, updateDoc, doc } from 'firebase/firestore'


// initialize cloud firestore
export const db = getFirestore()

export const auth = getAuth()
 

const Dashboard = () => {

    const [ screen, setScreen ] = useState(0)
    const [ active, setActive ] = useState(false)
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ time, setTime ] = useState('')
    const [ date, setDate ] = useState('')
    const [ toastDisplay, settoastDisplay ] = useState('')
    const [ pendingList, setpendingList ] = useState([])
    const [ completedList, setcompletedList ] = useState([])
    const [ loader, setLoader ] = useState('')
    const [ loadingLoad, setloadingLoad ] = useState(false)
    const [ errorMsg, seterrorMsg ] = useState('')
    const [taskId, settaskId] = useState('')
    const [buttonText, setbuttonText] = useState('Add Task')
    
    // var data = ''
    let pendingClass = ''
    let completedClass = ''
    
    
        
    // get user auth state
    const [user] = useAuthState(auth)

    // sign out user
    const signoutUser = async () =>{
        try{
            await signOut(auth)
        }catch(e){
            console.log(e)
        }
    }
    

    // get all data from the database using firebase react hooks
    const [ value, loading, error ] = useCollection(collection(db, "users", user.uid, "tasklist"))

    useEffect(()=>{
        
        const getList = async () =>{
            
            try{
                
                loading ? setloadingLoad(loading) : setloadingLoad(loading)

                error ? seterrorMsg(error) : seterrorMsg(null) // check for error message
                
                setcompletedList(value.docs.filter(doc => doc.data().completed)) //filter to completed list
                setpendingList(value.docs.filter(doc => !doc.data().completed)) //filter to pending list 
                
            }catch(e){
                console.log(e.message)
            }
        }

        getList()

    }, [value, error, loading])
    

    const updateTaskDetails = async () =>{
        // Updates every task field
        try{
            setLoader(<Spinner animation="border" size="sm" className='mr-3' variant="light" />) 
            await updateDoc(doc(db, "users", user.uid, "tasklist", taskId), {
                title: title,
                description: description,
                time: time,
                date: date
            })
            
            settoastDisplay(<Toaster title={title} status={'Task Updated'} active={true} />)
            setActive(false)
            setLoader('')
        }catch(e){
            console.log(e.message)
        }
    }
    
    // get task input
    const addTask = async () => {

        try{
            let data = {
                id : uuidv4(),
                completed : false,
                date : date,
                description : description,
                time : time,
                title : title
            }
            setLoader(<Spinner animation="border" size="sm" className='mr-3' variant="light" />) 

            await addDoc(collection(db, "users", user.uid, "tasklist"), data)
           
            settoastDisplay(<Toaster title={title} status={'New Task Added'} active={true} />)
            setActive(false)    
            setLoader('')
            
        }catch(e) {
            console.log(e.message)
        }
        
    }


    // passes a function to the card child component and does the following:
    // gets the id of the task
    // show the modal
    // set the task details
    
    const showUpdateModal = (id, status, data) =>{
        setActive(status) 
        settaskId(id) //sets the id of task to be updated
        setTitle(data.title)
        setDescription(data.description)
        setTime(data.time)
        setDate(data.date)
        setbuttonText('Update Task')
    }

    

    // Display Modal
    const showModal = () =>{
        return(
            <Modal        
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

        <div className="input-group mb-4">
            <div className="input-group-prepend">
                <span className="input-group-text modal-form" id="basic-addon1">
                <img src={edit2} width={20} className='img-fluid' alt="" />
                </span>
                
            </div>
            <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)}  placeholder="“Walk the dog”" value={title}  />
        </div>

        <div className="input-group mb-4">
            <div className="input-group-prepend modal-form">
                <span className="input-group-text " id="basic-addon1">
                <img src={desc} width={20} className='img-fluid' alt="" />
                </span>
                
            </div>
            <input type="text" className="form-control"  onChange={(e) => setDescription(e.target.value)} placeholder="Description" value={description} />
        </div>

        <div className="d-flex mb-5" style={{justifyContent : 'space-between'}}>
            <div className="input-group mb-3 mr-2 w-40">
                
                <input type="time" className='form-control' onChange={(e) => setTime(e.target.value)} value={time} id="" />
            </div>

            <div className="input-group w-40 mb-3">
                
                <input type="date" className='form-control ml-2' onChange={(e) => setDate(e.target.value)} value={date} id="" />
            </div>
        </div>
        <div className="d-flex justify-content-center">
                <button className="btn btn-primary w-100" onClick={taskId !== '' ? updateTaskDetails : addTask} >
                {loader}
                    {buttonText}
                </button>
            </div>
        </Modal.Body>
      </Modal>
        )
    }

    const showContent = () => {

        if(screen === 0) {
            return (
                
                <div className="main-content p-3" >
                    {/* checks error message */}
                    {errorMsg ? <div className='alert alert-danger'>{errorMsg}</div> :

                    // checks loading state
                    loadingLoad ? <div><Skeleton height={140} count={2} /> </div> : 

                    // checks for empty list
                    pendingList ?
                    pendingList.map(doc => {
                        return <Card key={doc.id} docId={doc.id} datas={doc.data()} openModal={showUpdateModal} />
                    }) :
                    (
                        // Empty Pending Screen 
                        <div className="d-flex mt-5 justify-content-center">
                            <img src={emtpyTasklist} alt="" className="img-fluid" />
                            <h6 style={{color : '#808080', textAlign : 'center'}}>Your task willl appear here when they are ticked complete</h6>
                        </div>
                    )
                    }
                </div>
            )
        }else if(screen === 1){
            
            return(

                <div className="main-content p-3">
                    
                    {/* checks error message */}
                    {errorMsg ? <div className='alert alert-danger'>{errorMsg}</div> :

                    // checks loading state
                    loadingLoad ? <div><Skeleton height={140} count={2} /> </div> : 

                    // checks for empty list with completed list length
                    completedList.length === 0 ? 
                        // Empty Completed Screen 
                        <div className="d-flex mt-5">
                            <img src={emtpyTasklist} alt="" className="img-fluid" />
                            <h6 style={{color : '#808080', textAlign : 'center'}}>Your task willl appear here when they are ticked complete</h6>
                        </div>
                     :
                    completedList.map(doc => {
                        return <Card key={doc.id} docId={doc.id} datas={doc.data()} />
                    }) 
                    
                    

                    // !completedList ?
                    // completedList.map(doc => {
                    //     return <Card key={doc.id} docId={doc.id} datas={doc.data()} />
                    // }) 
                    // :
                    // (
                    //     // Empty Completed Screen 
                    //     <div className="d-flex mt-5">
                    //         <img src={emtpyTasklist} alt="" className="img-fluid" />
                    //         <h6 style={{color : '#808080', textAlign : 'center'}}>Your task willl appear here when they are ticked complete</h6>
                    //     </div>
                    // )
                    }
                                                
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
        <div className="">
            {toastDisplay}
        </div>
        
        {/* <AddTaskModal active={active} /> */}
        <div className="head-part p-2 pb-0 shadow-sm">
            <div className="d-flex mt-2 w-100" style={{justifyContent : 'space-between', alignItems : 'center'}}>
                <div>
                    {/* motivation text */}
                    <h3 className="header" style={{fontSize : 18, overflowY : 'hidden', maxWidth : 200}}>
                        Welcome back, {user.displayName}!
                        {/* To Do List App */}
                    </h3>
                </div>
                    {/* image goes here */}
                    <button className="btn btn-default" onClick={signoutUser} >Sign Out</button>  
                    <img src={user.photoURL ? user.photoURL : defaultAvatar} className='img-fluid avatar' alt="" />
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
                onClick={() => {
                    // initializes every field to empty
                    setTitle('');
                    setDescription('');
                    setTime('');
                    setDate('');
                    settaskId('');
                    setActive(true)
                }
                } >
                    <FontAwesomeIcon icon={faAdd} />
                </button>
                
            </div>
            
        </div>
    </div>
  )
}

export default Dashboard