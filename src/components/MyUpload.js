/**
 @Name: MyUpload
 @Author: zpc20
 @Date: 2023-10-14 12:45
 @Description:
 @Update: 2023-10-14 12:45
 */
import MyTip from "./Mytip";
import React, {createRef, useEffect, useState} from "react";


function MyUpload(props){
    let [display, setDisplay] = useState('none')
    const file = createRef()
    return(
        <div className={'upload'}>
            <button onMouseEnter={(e)=>{
                setDisplay('')
            } }
                    onMouseLeave={(e)=>{
                        setDisplay('none')
                    }}  onClick={()=>{
                setDisplay('none')
                file.current.click()
            }} className={'Avatar'}>
                <MyTip display={display}></MyTip>
                <span className={'iconfont icon-tupiandiushi'}></span>
            </button>
            <input  onChange={(e)=>{
                let files = file.current.files[0]
                if(files.type.split('/')[0]!=='image'){
                    alert('文件类型错误!请上传图片')
                    files=''
                }
                props.getfile(files)
            }} type="file" ref={file} id={'imgUpload'}/>
        </div>
    )
}

export default MyUpload