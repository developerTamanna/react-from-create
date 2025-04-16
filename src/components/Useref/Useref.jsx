import React, { useRef, useState } from 'react';

const Useref = () => {
   //ref function name
   const nameRef = useRef(null)

   //email
   const emailRef = useRef(null)


//pass

const passRef = useRef(null)

  //error 

const [error, setError] = useState('')

///submitForm section
    const submitForm =(event)=>{
        event.preventDefault()
  
          if(passRef.current.value.length <8){
            setError('password must be 8 characters')
          }
          else{
            setError('')
            console.log(nameRef.current.value)
            console.log(emailRef.current.value)
            console.log(passRef.current.value)

            //clear input field
            nameRef.current.value = ''
            emailRef.current.value =''
            passRef.current.value =''
          }

       
    }
    return (
        <div>
              <div className='border p-2 text-center bg-red-50 rounded-md'>
<form  onSubmit={submitForm}>

<input ref={nameRef} className='border border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" name="text" placeholder='type your name' required />
<br/>
<br/>

<input ref={emailRef} className='border border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="email" name="email" defaultValue={'sathi@gmail.com'}  placeholder='type your email' required/>
<br/>
<br/>

<input ref={passRef}  className='border border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="password" name="" placeholder='enter your password' required/>
<br/>
<br/>
   
<small className='font-bold text-red-800'>{error}</small>
<br/>
<br/>

<input className='border border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="submit" value="submit"/>
</form>
        </div>
        </div>
    );
};

export default Useref;