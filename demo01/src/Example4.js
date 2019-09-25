import React, { useState , useContext,createContext } from 'react';
//===关键代码
const CountContext = createContext()
function Counter(){
    const count = useContext(CountContext)  //一句话就可以得到count
    return (<h2>{count}</h2>)
}
function Example4(){
    const [ count , setCount ] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            {/*======关键代码 */}
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}
export default Example4;


