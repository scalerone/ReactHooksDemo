
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

//React Hooks 写法：
import React, { useState,useEffect} from 'react';

function Index() {
    useEffect(()=>{
        console.log('useEffect=>老弟，你来了！Index页面')
        //以用返回一个函数的形式进行解绑--但是点击计数时每次状态发生变化，useEffect都进行了解绑
        return ()=>{
            console.log('老弟，你走了!Index页面')
        }
    },[])
    //useEffect的第二个参数，它是一个数组，数组中可以写入很多状态对应的变量，
    // 意思是当状态值发生变化时，我们才进行解绑。
    // 但是当传空数组[]时，就是当组件将被销毁时才进行解绑，这也就实现了componentWillUnmount的生命周期函数。
    return <h2>JSPang.com</h2>;
}

function List() {
    useEffect(()=>{
        console.log('useEffect=>老弟，你来了！List页面')
    })
    return <h2>List-Page</h2>;
}

function App(){
    const [ count , setCount ] = useState(0);//数组解构
    //---关键代码---------start-------
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
        return ()=>{
            console.log('====================')
        }


    },[count])
    //---关键代码---------end-------
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>

            <Router>
                <ul>
                    <li> <Link to="/">首页</Link> </li>
                    <li><Link to="/list/">列表</Link> </li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>



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
