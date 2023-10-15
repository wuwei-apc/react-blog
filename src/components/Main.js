/**
 @Name: Main
 @Author: zpc20
 @Date: 2023-10-13 13:57
 @Description:
 @Update: 2023-10-13 13:57
 */
import {Outlet, Route, Routes} from "react-router-dom";
import AuthRoute from "../util/route/AuthRoute";
import routes from "../util/route/routes";


function Main(){
    return(
        <div className={'main'}>
            {/*// 路由配置*/}
            <div className={'container'}>
                <Outlet></Outlet>
            </div>

        </div>
    )
}

export default Main