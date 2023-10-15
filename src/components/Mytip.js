/**
 @Name: Mytip
 @Author: zpc20
 @Date: 2023-10-14 11:04
 @Description:
 @Update: 2023-10-14 11:04
 */
import React,{useEffect} from "react";
function withMouse(WrappedComponent){
    class MouseMove extends React.Component{
        // 数据
        state={
            x:0,
            y:0
        }
        //处理事件函数
        handleMove = e=>{
            // 修改数据,异步更新
            this.setState({
                x:e.clientX,
                y:e.clientY
            })
        }

        // 挂载时监听鼠标
        componentDidMount() {
            window.addEventListener('mousemove',this.handleMove)
        }

        // 接绑事件
        componentWillUnmount() {
            window.removeEventListener('mousemove',this.handleMove)
        }
        render(){
            // console.log(this.props);
            // 增加 ...this.props传递上层的props值
            return <WrappedComponent {...this.state} {...this.props}></WrappedComponent>
        }

    }
    // 设置displayName
    MouseMove.displayName = `withMouse${getDisplayName(WrappedComponent)}`
    // 注意要把复用组件return
    return  MouseMove
}
function getDisplayName(WrappedComponent){
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

function Tip(props){
        return (
            <div className={'mytips'} style={
                {
                    display:props.display,
                    position: 'absolute',
                    top:props.y-40,
                    left:props.x-500
                }

            }>
                <div className={'tipBackground'}></div>
                <div className={'tipContent'}>
                    send avatar
                </div>
            </div>
        )
}

const MyTip =withMouse(Tip)


export default MyTip