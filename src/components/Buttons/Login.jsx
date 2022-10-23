const Login = ({show, setShow}) => {

  const handleClick = () => {
   setShow(!show)
  }
    return (
      <>
      {/* Creating a login modal */}
       <button onClick={handleClick} className="btn-login">Login <span className = "fa fa-sign-in me-1"></span></button>
      </>
    );
}

export default Login;








 