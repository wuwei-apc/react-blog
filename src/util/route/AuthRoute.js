/**
 @Name: AuthRoute
 @Author: zpc20
 @Date: 2023-10-15 10:44
 @Description:
 @Update: 2023-10-15 10:44
 */
import {redirect, useNavigate} from "react-router-dom";
import store from "../store/store";
import Store from "../store/store";




async function AuthRoute({request,params}){
    if (!new Store().getStore('token')) {
        return redirect("/login")
    }
    return null
}

export default AuthRoute