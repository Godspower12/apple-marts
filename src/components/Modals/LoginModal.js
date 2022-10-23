import React from 'react'
import { useState } from 'react'

const LoginModal = ({show, setShow}) => {

    const removeToggle = () => {
        setShow(!show)
    }

    const [focused, setFocused] = useState(false);
    const [focu, setFocu] = useState(false);
    const [submit, setSubmit] = useState(false);
    
   



    const handleFocus = () => {
        setFocused(!focused)
    }
    const handleFoc = () => {
        setFocu(!focu)
    }
    
  

      
      const handleChange = (e) => {
        const {value} = e.target;
        console.log(value);
      }

    
  return (
    <div>
          
           <div onClick={removeToggle} className={`${show ? "login-modal-container": "hide"}`}>
           </div>
           <div className= {`${show ? "login-modal show": "hide"}`}>
                    <h2 className='login-heading'>Login</h2>
                    <div className="social-btn">
                    <button className='google-signIn'><span className = "fa fa-google me-2"></span>Sign in with Google</button>
                    <button className='facebook-signIn'> <span className = "fa fa-facebook me-2"></span>Sign in with Facebook</button>
                    </div>
                    <h5>Or</h5>
               <form>
                <label>Username</label>
                <input name = 'username' className = "username-field" type="text" placeholder="Enter Name" required pattern = "^[A-Za-z0-9]{8,16}$" onBlur = {handleFocus} focused ={focused.toString()}/>
                <div className="name-error">A valid username must be entered</div>
                <label>Password</label>
                <input name = 'password' className = "password-field" type="password"  placeholder="Enter password" required pattern = "^[A-Za-z0-9]{8,16}$"  focus ={focu.toString()} onFocus = {handleFoc}/>
                <div className="password-error"> A valid password must be entered, password should not be less than 8 characters</div>
                <button type = 'submit' className="submit-btn">Submit</button>
               </form>

           </div>
          
    </div>
  )
}

export default LoginModal