


//React Hooks 写法：
import React, { useState,useEffect} from 'react';
function App(){
    const [ count , setCount ] = useState(0);//数组解构
    //---关键代码---------start-------
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
    })
    //---关键代码---------end-------
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        </div>
    )
}
export default App;

//原始写法
// import React, { Component } from 'react';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count:0 }
//     }
//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={this.addCount.bind(this)}>Chlick me</button>
//             </div>
//         );
//     }
//     addCount(){
//         this.setState({count:this.state.count+1})
//     }
// }
//
// export default App;
