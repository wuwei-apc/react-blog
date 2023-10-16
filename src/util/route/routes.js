/**
 @Name: routes
 @Author: zpc20
 @Date: 2023-10-15 10:59
 @Description:
 @Update: 2023-10-15 10:59
 */
import Home from "../../page/Home";
import {Container} from "../../page/Container";
import {createBrowserRouter, redirect} from "react-router-dom";
import ErrorPage from "../../page/ErrorPage";
import Content from "../../components/Content";
import HotEssay from "../../page/HotEssay";
import NewEssay from "../../page/NewEssay";
import IssueEssay from "../../page/IssueEssay";
import EssayDetail from "../../page/EssayDetail";
import Recommend from "../../page/Recommend";
import UserInfo from "../../page/UserInfo";
import Message from "../../page/Message";
import ViewHistory from "../../page/ViewHistory";
import Store from "../store/store";
import AuthRoute from "./AuthRoute";

// const routes={
//     App:[
//         { path: "/login", element: <Container />, auth: false },
//         { path:'/register', element:<Container />, auth: false},
//         { path: '*',element: <ErrorPage/>,auth: false}
//     ],
//     main:[
//         // 子路由顶级路由
//         { path:'*' ,element: <Content/>, auth: false},
//         { path:'history',element:<ViewHistory />, auth: true},
//         { path:'hotEssay', element:<HotEssay />, auth: false},
//         { path:'newEssay', element:<NewEssay />, auth: false},
//         { path:'issueEssay', element:<IssueEssay />, auth: true},
//         { path:'essayDetail', element:<EssayDetail />, auth: false},
//         { path:'recommend', element:<Recommend />, auth: true},
//         { path:'userInfo', element:<UserInfo />, auth: true},
//         { path:'message', element:<Message />, auth: true}
//     ]
// }

// const handle=()=>{
//     console.log("hello")
// }
async function logOut() {
    const store =new Store()
    //清除token
    store.delStore('token')
    //清除userInfo
    store.delStore('userInfo')
    return redirect("/home");
}
const router =createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        errorElement:<ErrorPage/>,
        // 页面渲染时触发
        // loader:async({request,params})=> {
        //     return null
        //     // if (!new Store().getStore('token')) {
        //     //     return redirect("/login")
        //     // }
        //     // return null
        // },
        // 发送form表单时触发
        // action:async (params,request)=>{
        //     console.log(params,request)
        //     // let formData = await request.formData();
        //     return redirect('/login');
        // },
        // 子路由配置
        children:[
            {
                index:true,
                element:<Content/>
            },
            {
                path:"home",
                element:<Content/>
            },
            {
                path:"history",
                element:<ViewHistory/>,
                loader:AuthRoute,
            },
            {
                path:"hotEssay",
                element:<HotEssay/>
            },
            {
                path:"newEssay",
                element:<NewEssay />
            },
            {
                path:'issueEssay',
                element:<IssueEssay/>,
                loader:AuthRoute
            },
            {
                path:'essayDetail',
                element:<EssayDetail/>
            },
            {
                path:"recommend",
                element:<Recommend/>
            },
            {
                path:"userInfo",
                element:<UserInfo/>,
                loader:AuthRoute
            },
            {
                path:"message",
                element:<Message/>,
                loader:AuthRoute
            }

        ]

    },
    {
        path:'/login',
        element:<Container/>,
        // action:async (params,request)=>{
        //     let formData = await request.formData();
        //     console.log(formData)
        //     return handle();
        // },
    },
    {
      path:'/register',
      element:<Container/>
    },
    {
        path:'/logOut',
        loader:logOut

    }
])


export default router