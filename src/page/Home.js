/**
 @Name: Home
 @Author: zpc20
 @Date: 2023-10-13 10:38
 @Description:
 @Update: 2023-10-13 10:38
 */
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navigation from "../components/Navigation";
import {redirect, Route, Routes, useHref, useInRouterContext, useLocation, useSubmit} from "react-router-dom";
import store from "../util/store/store";


// export async function action({request,params})
// {
//
//     const Store = new store()
//     const token = Store.getStore('token')
//     console.log(request)
//
//     return redirect("/login")
//     // 判断当前路径是否存在路由中
//     if(token==null){
//         console.log("ddd")
//         return redirect("/login")
//     }
// }
function Home(){
    // 发送表单到相应路由
    // let submit = useSubmit();
    // submit({test:'test'}, {
    //     method: "delete",
    //     action: "/123",
    // });
    const location =useLocation()
    // const href = useInRouterContext()
    //  console.log(href)
    return (
        <div className={'Home'}>
            <div className={'backgroundMain'}>
            </div>
            <Navigation />
            <Main />
            <Footer/>
        </div>
    )
}

export default Home