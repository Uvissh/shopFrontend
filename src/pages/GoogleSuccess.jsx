import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {jwtDecode} from "jwt-decode"

function GoogleSuccess(){

    const[searchParams] = useSearchParams();
    const navigate = useNavigate();
    useEffect(()=>{
        const token = searchParams.get("token");
        if(token){
            localStorage.setItem("token",token);
            const decoded = jwtDecode(token);
            localStorage.setItem("googleName",decoded.name)
            
            navigate("/")
        }
        else{
            navigate("/login");
        }
    },[searchParams,navigate]);
    return(
        <div>
            Logging in...
        </div>
    )
}

export default GoogleSuccess;