/**
 @Name: store
 @Author: zpc20
 @Date: 2023-10-15 18:47
 @Description:
 @Update: 2023-10-15 18:47
 */



class Store{

    setStore(key,value,expire=24){
        const time = new Date().getTime()+expire*60*60*1000
        const obj ={value,time}
        localStorage.setItem(key,JSON.stringify(obj))
    }
    getStore(key){
        let storeData = JSON.parse(localStorage.getItem(key))
        // 获取当前时间
        if(storeData){
            const time = new Date().getTime()
            if(time<storeData.time){
                return storeData.value
            }
        }
        return null
    }
    delStore(key){
        // 清除所有缓存
        // localStorage.clear()
        // 定向清除
        localStorage.removeItem(key)
    }
}


export default Store