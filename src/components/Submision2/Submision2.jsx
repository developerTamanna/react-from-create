import React, { useState } from 'react';

const Submision2 = () => {


    //text function

const [name, setName] = useState('');
   
    //email function

  const [email, setEmail] = useState('')

//password function
 

const [pass, setPass] = useState('')

// error function

const [ error, setError] = useState('')


//onsubmit function
const submitForm = (event)=>{
    event.preventDefault()
    if(pass.length <8 ){
        setError('your password is incorrect')
    }
    else{
        setError('')
        console.log(name)
        console.log(email)
        console.log(pass)
    }

   
}

// const nameInput=(e)=>{
//     setName(e.target.value)
// }


    return (
        <div className='border p-2 text-center bg-red-50 rounded-md'>
<form  onSubmit={submitForm}>

<input onChange={(event)=>{setName(event.target.value)}} className='border border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" name="text" placeholder='type your name' required />
<br/>
<br/>

<input onChange={(event)=>{setEmail(event.target.value)}} className='border border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="email" name="email"  placeholder='type your email' required/>
<br/>
<br/>

<input onChange={(event)=>{setPass(event.target.value)}} className='border border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="password" name="" placeholder='enter your password' required/>
<br/>
<br/>
   <small className='text-red-800 font-semibold'>{error}</small>

<br/>
<br/>

<input className='border border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="submit" value="submit"/>
</form>
        </div>
    );
};

export default Submision2;