/**
 @Name: ErrorPage
 @Author: zpc20
 @Date: 2023-10-15 14:15
 @Description:
 @Update: 2023-10-15 14:15
 */
import {useRouteError} from "react-router-dom";


// 路由失败页面
function ErrorPage(){

    const error = useRouteError()
    console.log(error)
    return (
        <div id="error-page">
            <h1>Error!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
export default ErrorPage