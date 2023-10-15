/**
 @Name: AuthRoute
 @Author: zpc20
 @Date: 2023-10-15 10:44
 @Description:
 @Update: 2023-10-15 10:44
 */
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import main from "../../components/Main";
import routes from "./routes";
import NotFound from "../../page/NotFound";
// import NotFound from "../../page/NotFound";

const inRoute=(path)=>{
    Object.keys(main).map(obj=>{
        routes[obj].map(route=>{
            if (path===route.path){
                 return true
            }
        })
    })
    return false

}

function AuthRoute({children,auth}){
    const  navigation = useNavigate()
    const token =''
     const location =useLocation()
    useEffect(() => {
        // 判断当前路径是否存在路由中
        if(inRoute(location.pathname))
        {
            if(token=="" && auth){
                navigation("/login")

            }
        }

    }, []);
    return children
}

export default AuthRoute