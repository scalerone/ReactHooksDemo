import React, { useRef, useEffect, useState } from 'react';

//存放变量-它就像一个盒子, 你可以存放任何东西
const Page2 = () => {
  const myRef2 = useRef(0);
  const [count, setCount] = useState(0)
  useEffect(()=>{
    myRef2.current = count;
  });
  function handleClick(){
    setTimeout(()=>{
      console.log(count); //1
      console.log(myRef2.current); //1
    },100)
  }
  return (
    <div>
      <button onClick={()=> setCount(count+1)}>点击count</button>
      <button onClick={()=> handleClick()}>查看</button>
    </div>
  );
}

export default Page2;
