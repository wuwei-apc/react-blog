/**
 @Name: MarkButton
 @Author: zpc20
 @Date: 2023-10-14 21:35
 @Description:
 @Update: 2023-10-14 21:35
 */
import React from "react";


function MarkButton(props){
    return (
        <div>
            <button
                className={'textButton'}
                onMouseDown={event => {
                    event.preventDefault()
                    props.toggle()
                }}
            >
                {
                    props.content
                }
            </button>
        </div>
    )
}
export default MarkButton