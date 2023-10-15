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
import {Route, Routes, useHref, useInRouterContext, useLocation} from "react-router-dom";

function Home(){
    const location =useLocation()
    const href = useInRouterContext()
     console.log(href)
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