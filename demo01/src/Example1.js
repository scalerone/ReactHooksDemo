import React, { useState,useEffect } from 'react';
function Example2(){
    const [ age , setAge ] = useState(18)
    const [ sex , setSex ] = useState('男')
    const [ work , setWork ] = useState('前端程序员')
    const [ state , setState ] = useState(() => {
    //传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用：
      console.log(11111111111)
      const initialState = 15*12; //惰性初始化 state
      return initialState;
    })

  useEffect(() => {
    console.log('subscribe')
    // const subscription = props.source.subscribe();
    return () => {
      // 清除订阅
      console.log('unsubscribe')
     //subscription.unsubscribe();
    };
  },[]);//只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[ ]）作为第二个参数
  // },[work,sex]);
  // 使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快；
    // if(age){
    //   const [ sex , setSex ] = useState('男')
    //
    // }
    //useState不能在if...else...这样的条件语句中进行调用
    return (
        <div>
            <p>JSPang 今年:{age}岁</p>
            <p>性别:{sex}</p>
            <p>工作是:{work}</p>
            <p>工作状态是:{state}</p>
          <button onClick={()=>{setAge(age+1)}}>click me</button>
        </div>
    )
}
export default Example2;
