import React, { memo, useState,useMemo } from 'react';

// 子组件
const ChildComp = (info) => {
  console.log('ChildComp...',info);
  return (<div>ChildComp...</div>);
};

const MemoChildComp = memo(ChildComp);

// 父组件
const Parent = () => {
  const [count, setCount] = useState(0);
  const [name] = useState('jack');
  const [age,setAge] = useState(11);
  // const info = { name, age };
  // 使用 useMemo 将对象属性包一层
  const info = useMemo(() => ({ name, age }), [name, age]);
  return (
    <div className="App">
      <div>hello world {count}</div>
      <div>hello age {age}</div>
      <div onClick={() => { setCount(count => count + 1); }}>点击增加</div>
      <div onClick={() => { setAge(age => age + 1); }}>点击增加年龄</div>
      <MemoChildComp info={info}/>
    </div>
  );
};

export default Parent;
