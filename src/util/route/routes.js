/**
 @Name: routes
 @Author: zpc20
 @Date: 2023-10-15 10:59
 @Description:
 @Update: 2023-10-15 10:59
 */
import Home from "../../page/Home";
import {Container} from "../../page/Container";
import NotFound from "../../page/NotFound";
import Content from "../../components/Content";
import ViewHistory from "../../page/ViewHistory";
import HotEssay from "../../page/HotEssay";
import NewEssay from "../../page/NewEssay";
import IssueEssay from "../../page/IssueEssay";
import EssayDetail from "../../page/EssayDetail";
import Recommend from "../../page/Recommend";
import UserInfo from "../../page/UserInfo";
import Message from "../../page/Message";
import {Navigate} from "react-router-dom";




const routes={
    App:[
        { path: "/login", element: <Container />, auth: false },
        { path:'/register', element:<Container />, auth: false},
        { path: '*',element: <NotFound/>,auth: false}
    ],
    main:[
        // 子路由顶级路由
        { path:'*' ,element: <Content/>, auth: false},
        { path:'history',element:<ViewHistory />, auth: true},
        { path:'hotEssay', element:<HotEssay />, auth: false},
        { path:'newEssay', element:<NewEssay />, auth: false},
        { path:'issueEssay', element:<IssueEssay />, auth: true},
        { path:'essayDetail', element:<EssayDetail />, auth: false},
        { path:'recommend', element:<Recommend />, auth: true},
        { path:'userInfo', element:<UserInfo />, auth: true},
        { path:'message', element:<Message />, auth: true}
    ]
}




export default routes