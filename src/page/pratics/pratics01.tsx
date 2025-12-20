import React, { useState } from 'react'
import './App.css'


type LoginFormProps = {
  email: string;
  password: string;
}

export default  function Pratics() {
  const [email, setEmail] = useState<LoginFormProps['email']>('');
  const [password, setPassword] = useState<LoginFormProps['password']>('');

  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);



  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if(email === 'admin@example.com' && password === 'admin123') {
      setIsLoggedIn(true);

      console.log('User logged in:', );

      alert('Login successful!');

    } else {
      alert('Invalid email or password');
    }
  }



  return (
   <div className='containerApp'>
    <div className="contentApp">
      <h1>Entre or Accounts</h1>

      <form action="" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="">Email:</label>
          <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="">Password:</label>
          <input
         
          type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='primary-button' type='submit' >Sign In</button>
      </form>

    </div>
   </div> 
  )
}
