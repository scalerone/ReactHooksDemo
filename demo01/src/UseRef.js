import React, { useRef, useEffect } from 'react';
//使用 useRef 创建的变量指向一个 input 元素，并在页面渲染后使 input 聚焦
const Page1 = () => {
  const myRef = useRef(null);
  useEffect(() => {
    myRef.current.value="Hello ,wh"
    console.log(myRef) //输出获取到的DOM节点
    myRef.current.focus()
  });
  return (
    <div>
      <span>UseRef:</span>
      <input ref={myRef} type="text"/>
    </div>
  );
};

export default Page1;
