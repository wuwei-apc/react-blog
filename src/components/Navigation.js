/**
 @Name: Navigation
 @Author: zpc20
 @Date: 2023-10-13 13:57
 @Description:
 @Update: 2023-10-13 13:57
 */
import Linkto from "./Linkto";
import {Link} from "react-router-dom";

function Navigation(){
    return(
        <div className={'nav'}>
            <ul className={'headUl'}>
                <li className={'headLi'}>
                    <Linkto content={'首页'} path={'/home'}/>
                </li>
                <li className={'headLi'}>
                    <Linkto  content={'推荐'} path={'/recommend'}/></li>
                <li className={'headLi'}>
                    <Linkto  path={'/newEssay'} content={'最新'}/>
                </li>
                <li className={'headLi'}>
                    <Linkto  path={'/hotEssay'} content={'热门'} />
                </li>
                <li className={'headLi'}>
                    <input className={'homeInput'} type="text"/>
                </li>
                <li className={'headLi'}>
                    <button className={'loginButton'} style={{width:'100%'}} >搜索</button>
                </li>
                <li className={'headLi'}>
                    <div className={'Avatar1'}>
                        <Link to={'/userInfo'}>
                            <img className={'imgAvatar'} src="http://localhost:8083/blog/uploadsImg/AvatarUrl/2023/10/14/0a6ebeb1-7cd1-4d11-9be9-bfde1c806c55.png"/>
                        </Link>
                    </div>
                </li>
                <li className={'headLi'}><Linkto path={'/message'} content={'消息'} /></li>
                <li className={'headLi'}><Linkto path={'/history'} content={'历史'} /></li>
                <li className={'headLi'}><Linkto path={'/login'} content={'登录'} /></li>
                <li className={'headLi'}>
                    <Linkto path={'/logOut'} content={'退出'}/>
                </li>
                <li className={'headLi'}>
                    <Linkto path={'/issueEssay'} content={'发布'}/>
                </li>
            </ul>
        </div>
    )
}

export default Navigation