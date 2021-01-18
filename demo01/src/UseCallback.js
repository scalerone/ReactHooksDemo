import React, { memo, useMemo, useState,useCallback } from 'react';
// https://juejin.cn/post/6918896729366462471
// 子组件
const ChildComp = (props) => {
  console.log('ChildComp...',props);
  console.log('ChildComp...changeNamexxxx',props.changeName);
  return (<div>ChildComp...</div>);
};

const MemoChildComp = memo(ChildComp);

// 父组件
const Parent = () => {
  const [count, setCount] = useState(0);
  const [name] = useState('jack');
  const [age] = useState(11);
  const info = useMemo(() => ({ name, age }), [name, age]);
  // const changeName = () => {
  //   console.log('输出名称...');
  // };//父组件重新渲染时，会重新创建 changeName 函数，即传给子组件的 changeName 属性发生了变化，导致子组件渲染；
  const changeName = useCallback(() => {
    console.log('输出名称...');
  }, []);
  return (
    <div className="App">
      <div>hello world {count}</div>
      <button onClick={() => { setCount(count => count + 1); }}>点击增加</button>
      <MemoChildComp info={info} changeName={changeName}/>
    </div>
  );
};

export default Parent;
