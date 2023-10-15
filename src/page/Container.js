/**
 @Name: Container
 @Author: zpc20
 @Date: 2023-10-13 10:39
 @Description:
 @Update: 2023-10-13 10:39
 */

import '../assets/css/login.css'
import React, {useEffect, useState} from "react";
import Register from "./Register";
import Login from "./Login";
import {Link, Route, Routes, useLocation, useParams} from "react-router-dom";
import register from "./Register";
export function Container(){
    let [state,setState] =useState({
          logins:'conmon login',
          register:"conmon register"
    })
    let params = useLocation()
    if(params.pathname==='/login'){
       state={
           logins:'conmon login',
           register:"conmon register"
       }
    }
    if(params.pathname==='/register'){
        state={
            logins:'conmon loginRote',
            register:"conmon registerRote"
        }
    }
    return (
            <div className={'loginContainer'}>
                <div className="background"></div>
                <div id="app">
                    <div className="containerL">
                        <Register  register={state.register} toLogin={(logins)=>{
                                  setState({
                                      logins:logins,
                                      register:'conmon register'
                                  })
                        }} />
                        <Login login={state.logins} toRegister={(register)=>{
                            setState({
                                logins:'conmon loginRote',
                                register: register
                            })
                        }}/>
                    </div>
                </div>
            </div>
        )

}

// export default Container