/**
 @Name: UserInfo
 @Author: zpc20
 @Date: 2023-10-13 10:36
 @Description:
 @Update: 2023-10-13 10:36
 */
import GetInfo from "../util/request/getInfo";
import {useEffect, useState} from "react";
function UserInfo(){
    const [data, setData] = useState([])

    useEffect(() => {
        // getAllUserInfo()
    }, []);

    function getAllUserInfo(){
        const getInfo = new GetInfo()
        getInfo.getAllUser().then(data => {
                if(data.obj){
                    setData(data.obj)
                }
            console.log(data)

        })
    }
    return (
        <div>
            <button onClick={getAllUserInfo}>获取信息</button>
            {
               data.map((item,index)=>{
                   return (
                       <div key={index}>
                            {/*不能直接渲染对象*/}
                            {item.username}
                       </div>
                   )
               })
            }
        </div>
    )
}

export default UserInfo