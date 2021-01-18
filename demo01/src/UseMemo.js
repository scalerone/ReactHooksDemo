import React, { memo, useState,useMemo,useContext  } from 'react';
// 子组件
const ChildComp = (props) => {
  // return  age;
  // const info2= useContext(myContextContext ); // 得到父组件传的值
  const { info } = props
  console.log('props',props)
  return (
    <div>ChildComp...1 {info.age} xxx22 </div>
  );
};

//增加count等无关变量时，不影响子组件的更新
const MemoChildComp = memo(ChildComp);//替代pure.Component


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
      <button onClick={() => { setCount(count => count + 1); }}>点击增加</button>
      <button onClick={() => { setAge(age => age + 1); }}>点击增加年龄</button>
      <div>

        <MemoChildComp info={info}/>
        {/*<MemoChildComp info={info}/>*/}
      </div>

    </div>
  );
};

export default Parent;
