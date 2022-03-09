import React from 'react'
import firebase from 'firebase/compat/app'


export const firebaseConfig = {
    apiKey: "AIzaSyAOA2c6KP9rXypwOTNbYvAyp4kNtGl0sxI",
    authDomain: "todolistapp-6034c.firebaseapp.com",
    projectId: "todolistapp-6034c",
    storageBucket: "todolistapp-6034c.appspot.com",
    messagingSenderId: "1038905685891",
    appId: "1:1038905685891:web:c32b0ca77004614f3f28b6",
    measurementId: "G-W6LL6Q05CX"
  };

  
  firebase.initializeApp(firebaseConfig)

const Firebase = () => {

    

    //   const auth = firebase.auth()
  return (
    <div>
        
    </div>
  )
}

// export const auth = firebase.auth()

export default Firebase