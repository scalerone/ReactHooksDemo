import React, { useRef,useState,useEffect} from 'react';
function Example8(){
    const inputEl = useRef(null)
    const selectEl = useRef(null)
    console.log(inputEl)
    const onButtonClick=()=>{
        //useRef获取DOM元素
        inputEl.current.value="Hello ,xiaohui"
        console.log(inputEl) //输出获取到的DOM节点
        console.log(selectEl.current.value) //输出获取到的DOM节点
    }
    const [text, setText] = useState('hello')

    const textRef = useRef()

    useEffect(()=>{
        textRef.current = text;
        console.log('textRef.current:', textRef.current)
    })

    return (
        <>
            {/*保存input的ref到inputEl */}
            <input ref={inputEl} type="text"/>
            <select name='test' ref={selectEl}>
                <option value="1">1</option>
                <option value={2}> 2</option>
            </select>
            <button onClick = {onButtonClick}>在input上展示文字</button>

            <br/>
            <br/>
            <input value={text} onChange={(e)=>{setText(e.target.value)}} />
        </>
    )
}
export default Example8