import React, {createRef, useEffect, useState} from "react";
import {Form, Link, useNavigate} from "react-router-dom";
import MyTip from "../components/Mytip";
import MyUpload from "../components/MyUpload";

/**
 @Name: Register
 @Author: zpc20
 @Date: 2023-10-13 10:39
 @Description:
 @Update: 2023-10-13 10:39
 */
// import {useState} from "react";
import Send from "../util/request/send";
import send from "../util/request/send";

function Register(props){
    let navigator =useNavigate()
    let [file,setFile] = useState('')
    let username = createRef()
    let password = createRef()
    let repassword = createRef()
    const register =()=>{
        console.log(file)
        let form = new FormData()
        if(!username.current.value){
            alert('Please input username!')
        }
        else if(!password.current.value){
            alert('Please input password!')
        }
        else if(!repassword.current.value){
            alert('Please input repasswor!')
        }
        else if(repassword.current.value!==password.current.value){
            alert('The password inconsistent,Please try again!')
            repassword.current.value=''
            password.current.value=''
        }
        else if (file==''){
            alert('Please Upload Avatar!')
        }else {
            form.append('username',username.current.value)
            form.append('password',password.current.value)
            form.append('status',0)
            form.append('file',file)
            const Send = new send()
            Send.register(form).then(res=>{
                if (res.code==200){
                       alert(res.msg+"请登录!")
                       navigator('/login')
                }
            })
        }
    }
    function reset(){
        username.current.value=''
        password.current.value=''
        repassword.current.value=''
        setFile('')
    }
    return (
        <div className={props.register} id={'register'}>
            <h3>Welcome to the Register</h3>
            <div className="slide"></div>
            <div className="form">
                <label>UserName :</label>
                <input  ref={username}  type="text" placeholder="you name"/>
                <label>PassWord :</label>
                <input  ref={password} type="password" placeholder="password"/>
                <label>RePassWord :</label>
                <input  ref={repassword} type="password" placeholder="password"/>
                <MyUpload  getfile={
                    (files)=>{
                        setFile(files)
                        console.log(files)
                }} />
                {/*<label>Email :</label>*/}
                {/*<input type="email" placeholder="eamil"/>*/}
                {/*<label>Phone :</label>*/}
                {/*<input  type="text" placeholder="phone"/>*/}
                <div className="submit">
                    <button className={'loginButton'} onClick={register}>Submit</button>
                    <button className={'loginButton'} onClick={reset}>Reset</button>
                </div>
                <div className="exchange">
                    Has not an account?<Link to={'/login'} onClick={
                    ()=>{
                        props.toLogin('conmon login')
                        reset()
                    }
                }>Login Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Register