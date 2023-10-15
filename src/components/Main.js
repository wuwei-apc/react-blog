/**
 @Name: Main
 @Author: zpc20
 @Date: 2023-10-13 13:57
 @Description:
 @Update: 2023-10-13 13:57
 */
import {Outlet} from "react-router-dom";

function Main(){
    return(
        <div className={'main'}>
            {/*// 路由配置*/}
            <div className={'container'}>
                {/*子路由视图位置*/}
                <Outlet></Outlet>
            </div>

        </div>
    )
}

export default Main