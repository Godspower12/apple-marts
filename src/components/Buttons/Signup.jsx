const Signup = ({showSignup, setShowSignup}) => {

  const handleReg = () => {
    setShowSignup(!showSignup)
  }
    return (
      <div>
        {/* Button trigger modal  */}
        <button onClick={handleReg} className="btn-reg" >Register<span className="fa fa-user-plus me-1"></span></button>

        
      </div>
    );
}

export default Signup
