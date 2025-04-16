import React, { useState } from 'react';

const SubmitFrom = () => {
    //name function    
  const [text, setText] = useState('');
  console.log(text)
const [email, setEmail] = useState('');
console.log(email)

const [pass, setPass] = useState('');
console.log(pass)

    const submitForm =(event)=>{
        event.preventDefault()
        console.log(event.target.text.value)
        console.log(event.target.email.value)
        console.log(event.target.password.value)
    }


    const nameText =(event)=>{
       setText(event.target.value)
    }


    //email function

    const emailValue = (event)=>{
        setEmail(event.target.value)
    }


    //password function
const passwordValue =(event)=>{
    setPass(event.target.value)
}
    

    return (
<div className='border p-2 text-center bg-red-50 rounded-md'>

<form onSubmit={submitForm} >
<input  onChange={nameText}
  type="text" name='text'
  placeholder="Type your name..." 
  className="border border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>


<br/>
<br/>

<input onChange={emailValue} className='border border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ' type="email" name="email" placeholder='type your email' />
<br/>
<br/>
<input onChange={passwordValue} className='border border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="password" name="password" />

<br/>
<br/>

<input className='border border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="submit" value="Submit"/>

</form>
        </div>
    );
};

export default SubmitFrom;