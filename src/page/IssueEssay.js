import Send from "../util/request/send";

/**
 @Name: IssueEssay
 @Author: zpc20
 @Date: 2023-10-13 10:40
 @Description:
 @Update: 2023-10-13 10:40
 */
// Import React dependencies.
import React, { useState} from 'react'
import MyEditor from "../util/editor";
import send from "../util/request/send";
function IssueEssay(){
    let article ={
        articleAddTime: "",
        articleCoverUrl: "",
        articleFavoritesNumber: 0,
        articleId: "",
        articlePraiseNumber: 0,
        userId:'20221113110549',
        context:'',
        articleTitle:'测试',
        articleViewingNumber: 0,
    }
    function publish(context){
        // console.log(context)
        article.context=JSON.stringify(context)
        const Send = new send()
        Send.addArticle(article).then(
            res=>{
                console.log(res)
            }
        )
    }
    return (
          <div>
            <MyEditor publish={publish}></MyEditor>
          </div>
    )
}

export default IssueEssay