/**
 @Name: index
 @Author: zpc20
 @Date: 2023-10-13 19:43
 @Description: axiosutil 引入
 @Update: 2023-10-13 19:43
 */
import axios from "axios";
import Store from "../store/store";


const instance = axios.create(
    {
        baseURL:'http://localhost:8083/blog',
    }
)

const store =new Store()
const token =store.getStore('token')
if (token)
{
    instance.defaults.headers.common['Authorization'] = token
}

export default instance

