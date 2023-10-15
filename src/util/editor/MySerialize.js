/**
 @Name: MySerialize
 @Author: zpc20
 @Date: 2023-10-15 09:33
 @Description:
 @Update: 2023-10-15 09:33
 */
import {Text} from "slate";
import escapeHtml from "escape-html";
import React from "react";


const serializeNode = node => {
    if (Text.isText(node)) {
        return escapeHtml(node.text)
    }

    const children = node.children.map(n => serializeNode(n)).join('')

    switch (node.type) {
        case 'block-quote':
            return `<blockquote style="margin-left: 10px;background-color:#ccc"><p>${children}</p></blockquote>`
        case 'bulleted-list':
            return `<ul style="margin-left:20px">${children}</ul>`
        case 'heading-one':
            return `<h1 >${children}</h1>`
        case 'heading-two':
            return `<h2 >${children}</h2>`
        case 'heading-three':
            return `<h3 >${children}</h3>`
        case 'heading-four':
            return `<h4>${children}</h4>`
        case 'heading-five':
            return `<h5 >${children}</h5>`
        case 'heading-six':
            return `<h6 >${children}</h6>`
        case 'list-item':
            return `<li >${children}</li>`
        default:
            return `<p>${children}</p>`
    }
}

function MySerialize(props){
    const result = props.value.map(
        n=> serializeNode(n)
    ).join('\n')
    return (
        <div dangerouslySetInnerHTML = {{__html:result}} ></div>
    )
}


export default MySerialize