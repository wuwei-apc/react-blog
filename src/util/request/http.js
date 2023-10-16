/**
 @Name: http
 @Author: zpc20
 @Date: 2023-10-13 19:42
 @Description: axois封装
 @Update: 2023-10-13 19:42
 */
import instance from './index'

class http {
    post(path,params){
        return new Promise(
            (resolve,reject)=>{
                instance.post(path,params).then(
                    (res)=>{
                        // console.log(res)
                        // 只返回数据部分
                        resolve(res.data)

                    }
                ).catch(error=>{
                    reject(error)
                })
            }
        )}
    get(path,params){
        return new Promise(
            (resolve,reject)=>{
                instance.get(path,params).then(
                    (res)=>{
                        resolve(res.data)
                    }
                ).catch(error=>{
                    reject(error)
                })
            }
        )}
    delete(path,params){
        return new Promise(
            (resolve,reject)=>{
                instance.delete(path,params).then(
                    (res)=>{
                        // console.log(res)
                        resolve(res)

                    }
                ).catch(error=>{
                    reject(error)
                })
            }
        )}
    put(path,params){
        return new Promise(
            (resolve,reject)=>{
                instance.put(path,params).then(
                    (res)=>{
                        // console.log(res)
                        resolve(res)

                    }
                ).catch(error=>{
                    reject(error)
                })
            }
        )}
    patch(path,params){
        return new Promise(
            (resolve,reject)=>{
                instance.patch(path,params).then(
                    (res)=>{
                        // console.log(res)
                        resolve(res)

                    }
                ).catch(error=>{
                    reject(error)
                })
            }
        )}
}


export default http