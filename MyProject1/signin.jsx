
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"; 
import {useNavigate} from "react-router-dom";
import "./signin.css"

function SigninProject(){
    const [inputValue, setInputValue] = useState({
        email:"",
        password:""
    });
    const [value, setValue] = useState([]);
    const navigation = useNavigate();
    function inputEmail(e){
        setInputValue({
            ...inputValue,email:e.target.value
        });
    }
    function inputPassword(e){
        setInputValue({
            ...inputValue,password:e.target.value
        });
    }
    useEffect(()=>{
        axios.get("http://localhost:3000/registers").then((res)=>{setValue(res.data);
        console.log(res.data);
    });
    },[]);
    function validate(e){
        e.preventDefault();
        if((inputValue.email!=="")&&(inputValue.password!=="")){
       value.map(val=>{
        if(val.email===inputValue.email&&val.password===inputValue.password){
            alert("Successfully Logined");
            navigation("/profiles");
        }})
    }
    else{
        alert("Invalid Inputs");
    }
    }
    return(<>
        <h2>Shopeez</h2>
        <div className="external">
        <form className="form" onSubmit={validate}>
        <div className="internal">
            <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" onChange={inputEmail}/>
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Strong password" onChange={inputPassword}/>
            </div>
            <div className="registerForm">
            <input type="submit" value="Sign in"/>
            </div>
            </div>
        </form>
        </div>
        </>
        );
}

export default SigninProject;