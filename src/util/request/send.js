/**
 @Name: send
 @Author: zpc20
 @Date: 2023-10-13 23:11
 @Description:
 @Update: 2023-10-13 23:11
 */
import http from './http'


class Send{

      addArticle(params){
          return new Promise(
              (resolve,reject)=>{http.post('/article/insertArticle',params).then(
                  res=>{
                      resolve(res)
                        // console.log(res)
                   }).catch(error=>{
                       reject(error)
              })
              }
          )
      }
      Login(params){
          return new Promise(
              (resolve, reject)=>{
                  http.post(`/login?username=${params.username}&password=${params.password}`).then(res=>{
                      resolve(res)
                  }).catch(error=>{
                      reject(error)
                  })
              }
          )
      }

      register(params){
          return new Promise(
              (resolve, reject)=>{
                  http.post('/user/insertUser',params).then(res=>{
                      resolve(res)
                  }).catch(error=>{
                      reject(error)
                  })
              }
          )
      }
}


export default new Send()