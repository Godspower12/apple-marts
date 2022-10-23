import React, {useState} from 'react'

const SignUpModal = ({showSignup, setShowSignup}) => {
   
  const [focused, setFocused] = useState(false);
  
        const handleFocus = () => {
          setFocused(!focused)
      }
   
    const removeToggle = () => {
        setShowSignup(!showSignup)
    }
  return (
    <div>
          
           <div onClick={removeToggle} className={`${showSignup ? "signup-modal-container": "hide"}`}>
           </div>
           <div className= {`${showSignup ? "signup-modal show": "hide"}`}>
                    <h2 className='login-heading'>Sign Up</h2>
                    <div className="social-btn">
                    <button className='google-signIn'><span className = "fa fa-google me-2"></span>Sign up with Google</button>
                    <button className='facebook-signIn'> <span className = "fa fa-facebook me-2"></span>Sign up with Facebook</button>
                    </div>
                    <h5>Or</h5>
               <form>
                <label>Username</label>
                <input type="text" className = "username-field" placeholder="Enter Name" required onBlur = {handleFocus} focused ={focused.toString()} />
                <div className="input-name-error">A valid username must be entered</div>
                <label>Email</label>
                <input type="email" className = "email-field" placeholder="Enter Email" required onBlur = {handleFocus} focused ={focused.toString()}/>
                <div className="email-error">A valid email must be entered</div>
                <label>Password</label>
                <input type="password"  placeholder="Enter password" required/>
                <div className="password-error"> A valid password must be entered, password should not be less than 8 characters</div>
                <button className="submit-reg-btn">Register</button>
               </form>
           </div>
          
    </div>
  )
}

export default SignUpModal