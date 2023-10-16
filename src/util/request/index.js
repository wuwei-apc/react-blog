/**
 @Name: index
 @Author: zpc20
 @Date: 2023-10-13 19:43
 @Description: axiosutil 引入
 @Update: 2023-10-13 19:43
 */
import axios from "axios";
import Store from "../store/store";

const  instance = axios.create(
    {
        baseURL:'http://localhost:8083/blog',
    }
)
function createInstance(){
    // 创建instance实例，解决store更新而实例配置未更新问题
    let store =new Store()
    let token =store.getStore('token')
    instance.defaults.headers.common['Authorization'] = token
    return instance
}


export default createInstance

