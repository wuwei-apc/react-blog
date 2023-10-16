/**
 @Name: Content
 @Author: zpc20
 @Date: 2023-10-13 10:34
 @Description:
 @Update: 2023-10-13 10:34
 */
import EssayBlock from "./EssayBlock";
import AuthorInfo from "./AuthorInfo";
import Catalog from "./Catalog";
import React, {useEffect, useState} from "react";
import GetInfo from "../util/request/getInfo";

function Content(){
    const [data,setData] = useState([])
    useEffect(() => {
        const getInfo = new GetInfo()
        getInfo.getAllArticle().then(data=>{
            setData(data.obj)
        })
    }, []);
    return(
        <div className={'content'}>
            <div className={'left'}>
                <div className={'authorInfo'}>
                    <AuthorInfo/>
                </div>

            </div>
            <div className={'middle'}>
                {
                    data.map((item,index )=> (
                        <div key={index}>
                           <EssayBlock item={item}></EssayBlock>
                        </div>
                    ))
                }
            </div>
            <div className={'right'}>
                <div className={'catalog'}>
                    <Catalog/>
                </div>
            </div>
        </div>

    )

}

export default Content