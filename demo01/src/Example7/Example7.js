import React , {useState,useMemo} from 'react';
//性能问题的演示
function Example7(){
    const [xiaohong , setXiaohong] = useState('小红待客状态')
    const [zhiling , setZhiling] = useState('志玲待客状态')
    return (
        <>
            <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
            <button onClick={()=>{setZhiling(new Date().getTime()+',志玲向我们走来了')}}>志玲</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </>
    )
}
//接收参数的写法 name对应xiaohong，zhiling对应志玲
//父组件更新时不想影响子组件使用useMemo---重复渲染的问题，和不想渲染更新某个组件
function ChildComponent({name,children}){
    function changeXiaohong(name){
        console.log('她来了，她来了。小红向我们走来了')
        return name+',小红向我们走来了'
    }

    // const actionXiaohong = changeXiaohong(name)
    const actionXiaohong = useMemo(()=>changeXiaohong(name),[name])
    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}
export default Example7