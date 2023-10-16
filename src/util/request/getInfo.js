/**
 @Name: getInfo
 @Author: zpc20
 @Date: 2023-10-13 23:11
 @Description: 封装获取信息请求
 @Update: 2023-10-13 23:11
 */


import http from './http'


class GetInfo extends http{
    // 获取所有用户信息
      getAllUser(){
          return new Promise(
              (resolve,reject)=>{
                  super.get('/user/getAllUsers').then(
                      res=>{
                          resolve(res)
                      }
                  ).catch(error=>{
                      reject(error)
                  })
              }
          )

      }
    getAllArticle(){
        return new Promise(
            (resolve,reject)=>{
                super.get('/article/getAllArticle').then(
                    res=>{
                        resolve(res)
                    }
                ).catch(error=>{
                    reject(error)
                })
            }
        )

    }
}

export default GetInfo