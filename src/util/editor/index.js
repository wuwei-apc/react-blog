/**
 @Name: index.js
 @Author: zpc20
 @Date: 2023-10-14 19:26
 @Description:
 @Update: 2023-10-14 19:26
 */
import {
    createEditor,
    Editor,
    Element as SlateElement,
    Node as SlateNode,
    Point,
    Range,
    Text,
    Transforms,
} from 'slate'
import { Editable, ReactEditor, Slate, withReact } from 'slate-react'
import React, {useCallback, useMemo, useState} from "react";
// 导入editor样式
import './editor.css'
import { withHistory } from 'slate-history'
import escapeHtml from 'escape-html'
import {SHORTCUTS} from './MyElement'
import MarkButton from "./MarkButton";


function MyEditor(props){
    const renderElement = useCallback(props => <Element {...props} />, [])
    const editor = useMemo(
        () => withShortcuts(withReact(withHistory(createEditor()))),
        []
    )
    const [value,setValue] =useState([
        {
            type: 'block-quote',
            children: [{ text: 'A wise quote.' }],
        },
    ])
    // handle
    const handleDOMBeforeInput = useCallback(
        (e) => {
            queueMicrotask(() => {
                const pendingDiffs = ReactEditor.androidPendingDiffs(editor)

                const scheduleFlush = pendingDiffs?.some(({ diff, path }) => {
                    if (!diff.text.endsWith(' ')) {
                        return false
                    }

                    const { text } = SlateNode.leaf(editor, path)
                    const beforeText = text.slice(0, diff.start) + diff.text.slice(0, -1)
                    if (!(beforeText in SHORTCUTS)) {
                        return
                    }

                    const blockEntry = Editor.above(editor, {
                        at: path,
                        match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n),
                    })
                    if (!blockEntry) {
                        return false
                    }

                    const [, blockPath] = blockEntry
                    return Editor.isStart(editor, Editor.start(editor, path), blockPath)
                })

                if (scheduleFlush) {
                    ReactEditor.androidScheduleFlush(editor)
                }
            })
        },
        [editor]
    )
    const serializeNode = node => {
        if (Text.isText(node)) {
            return escapeHtml(node.text)
        }

        const children = node.children.map(n => serializeNode(n)).join('')

        switch (node.type) {
            case 'block-quote':
                console.log('quote')
                return `<blockquote style={{marginLeft:'10px',backgroundColor:'#ccc'}}><p>${children}</p></blockquote>`
            case 'bulleted-list':
                return `<ul style={{marginLeft:'20px'}}>${children}</ul>`
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
    return (
        <Slate editor={editor} initialValue={value} onChange={value=>setValue(value)}>
            <div className={'textTool'}>
                <MarkButton toggle={()=>{CustomEditor.toggleCodeBlock(editor)}} content={'Block'}></MarkButton>
                <MarkButton toggle={()=>{CustomEditor.toggleBoldMark(editor)}} content={'Bold'}></MarkButton>
            </div>
            <Editable
                onDOMBeforeInput={handleDOMBeforeInput}
                renderElement={renderElement}
                placeholder='Please input you conent'
                className={'editor'}
                spellCheck
                autoFocus
                />
            <button onClick={()=>{
                props.publish(value)
            }}>提交</button>
        </Slate>

    // onKeyDown={event => {
    //     if (!event.ctrlKey) {
    //         return
    //     }
    //     switch (event.key) {
    //         case '`': {
    //             event.preventDefault()
    //             CustomEditor.toggleCodeBlock(editor)
    //             break
    //         }
    //
    //         case 'b': {
    //             event.preventDefault()
    //             CustomEditor.toggleBoldMark(editor)
    //             break
    //         }
    //     }
    // }}
    )

}

const withShortcuts = editor => {
    const { deleteBackward, insertText } = editor

    editor.insertText = text => {
        const { selection } = editor

        if (text.endsWith(' ') && selection && Range.isCollapsed(selection)) {
            const { anchor } = selection
            const block = Editor.above(editor, {
                match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n),
            })
            const path = block ? block[1] : []
            const start = Editor.start(editor, path)
            const range = { anchor, focus: start }
            const beforeText = Editor.string(editor, range) + text.slice(0, -1)
            const type = SHORTCUTS[beforeText]

            if (type) {
                Transforms.select(editor, range)

                if (!Range.isCollapsed(range)) {
                    Transforms.delete(editor)
                }
                const newProperties= {
                    type,
                }
                Transforms.setNodes(editor, newProperties, {
                    match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n),
                })
                if (type === 'list-item') {
                    const list = {
                        type: 'bulleted-list',
                        children: [],
                    }
                    Transforms.wrapNodes(editor, list, {
                        match: n =>
                            !Editor.isEditor(n) &&
                            SlateElement.isElement(n) &&
                            n.type === 'list-item',
                    })
                }

                return
            }
        }

        insertText(text)
    }

    editor.deleteBackward = (...args) => {
        const { selection } = editor

        if (selection && Range.isCollapsed(selection)) {
            const match = Editor.above(editor, {
                match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n),
            })

            if (match) {
                const [block, path] = match
                const start = Editor.start(editor, path)

                if (
                    !Editor.isEditor(block) &&
                    SlateElement.isElement(block) &&
                    block.type !== 'paragraph' &&
                    Point.equals(selection.anchor, start)
                ) {
                    const newProperties = {
                        type: 'paragraph',
                    }
                    Transforms.setNodes(editor, newProperties)

                    if (block.type === 'list-item') {
                        Transforms.unwrapNodes(editor, {
                            match: n =>
                                !Editor.isEditor(n) &&
                                SlateElement.isElement(n) &&
                                n.type === 'bulleted-list',
                            split: true,
                        })
                    }

                    return
                }
            }

            deleteBackward(...args)
        }
    }

    return editor
}


const CustomEditor = {
    isBoldMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.bold === true,
            universal: true,
        })

        return !!match
    },

    isCodeBlockActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.type === 'code',
        })

        return !!match
    },

    toggleBoldMark(editor) {
        const isActive = CustomEditor.isBoldMarkActive(editor)
        Transforms.setNodes(
            editor,
            { bold: isActive ? null : true },
            { match: n => Text.isText(n), split: true }
        )
    },

    toggleCodeBlock(editor) {
        const isActive = CustomEditor.isCodeBlockActive(editor)
        // console.log(isActive)
        Transforms.setNodes(
            editor,
            { type: isActive ? null : 'code' },
            // { match:n=> Editor.isBlock(editor,n)}
        )
    },
}
const Element = ({ attributes, children, element }) => {
    switch (element.type) {
        case 'block-quote':
            console.log('quote')
            return <blockquote style={{marginLeft:'10px',backgroundColor:'#ccc'}} {...attributes}>{children}</blockquote>
        case 'bulleted-list':
            return <ul style={{marginLeft:'20px'}} {...attributes}>{children}</ul>
        case 'heading-one':
            return <h1 {...attributes}>{children}</h1>
        case 'heading-two':
            return <h2 {...attributes}>{children}</h2>
        case 'heading-three':
            return <h3 {...attributes}>{children}</h3>
        case 'heading-four':
            return <h4 {...attributes}>{children}</h4>
        case 'heading-five':
            return <h5 {...attributes}>{children}</h5>
        case 'heading-six':
            return <h6 {...attributes}>{children}</h6>
        case 'list-item':
            return <li  {...attributes}>{children}</li>
        default:
            return <p {...attributes}>{children}</p>
    }
}
export default MyEditor