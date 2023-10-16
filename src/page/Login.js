/**
 @Name: Login
 @Author: zpc20
 @Date: 2023-10-13 19:15
 @Description:
 @Update: 2023-10-13 19:15
 */
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Send from "../util/request/send";
import Store from "../util/store/store";
import send from "../util/request/send";
import instance from "../util/request";

function Login(props){
    const  navigate = useNavigate()

    let  [form,setForm]=useState({
            username:'',
            password:''
     })
    const reset=()=>{
        setForm({
            username:'',
            password:''
        })
    }

    return(
         <div className={props.login}>
             <h3>Welcome to the Login</h3>
             <div className="slide"></div>
             <div className="form">
                 <label>UserName :</label>
                 <input onChange={(e)=>{
                     setForm({
                         password: form.password,
                         username: e.target.value
                     })
                 }} value={form.username} type="text" placeholder="you name"/>
                 <label>PassWord :</label>
                 <input onChange={e=>{
                     setForm({
                         username: form.username,
                         password: e.target.value
                     })
                 }}  value={form.password} type="password" placeholder="password"/>
                 <div className="submit">
                     <button className={'loginButton'} onClick={()=>{
                         const Send = new send()
                         Send.Login(form).then(data=>{
                             // == 不能用 ===
                             if(data.code==200){
                                 const store =new Store()
                                 store.setStore('userInfo',data.loginUser)
                                 store.setStore('token','Bearer '+data.token)
                                 alert(data.msg)
                                 navigate('/')
                             }else{
                                 alert(data.msg)
                             }
                         })
                     }}>Submit</button>
                     <button className={'loginButton'} onClick={reset}>Reset</button>
                 </div>
                 <div className="exchange">
                     Has not an account?<Link to={'/register'}  onClick={()=>{
                     reset()
                     props.toRegister('conmon registerRote')
                 }}>Register Now</Link>
                 </div>
             </div>
         </div>
     )
}

export default Login