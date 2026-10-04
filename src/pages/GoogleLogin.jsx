import "./GoogleLogin.css"
function Googlelogin (){


    const handleGoogleLogin =()=>{
        window.location.href = "http://localhost:3000/auth/google";

    };
    return(

       <button className="google-login-btn" onClick={handleGoogleLogin}> <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" /> Continue with Google </button>
    )
}
export default Googlelogin;