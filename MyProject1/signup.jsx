import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./signup.css"

function SignupProject(){
    const [data, setData] = useState({
        fullname:"",
        email:"",
        password:""
    });
    const navigation = useNavigate();
    function inputName(e){
        setData({
            ...data,fullname:e.target.value
        });
    }
    function inputEmail(e){
        setData({
            ...data,email:e.target.value
        });
    }
    function inputPassword(e){
        setData({
            ...data,password:e.target.value
        });
    }
    function register(e){
        e.preventDefault();
        axios.post("http://localhost:3000/registers", data);
        alert("Successfully Submitted");
        navigation("/signin");
    }

    return(<>
        <h2>Shopeez</h2>
        <div className="external">
        <form className="form" onSubmit={register}>
            <div className="internal">
            <div>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" onChange={inputName}/>
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" onChange={inputEmail}/>
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Strong password" onChange={inputPassword}/>
            </div>
            <div className="registerForm">
            <input type="submit" value="Register"/>
            </div>
            </div>
        </form>
        </div>
        </>);
}

export default SignupProject;