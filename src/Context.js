import React from 'react';
import ReactDOM from 'react-dom';

// const ThemeContext = React.createContext('light')
//  class App extends React.Component{
//      render(){
//         return(
//             <ThemeContext.Provider value='dark' >
//                 <Toolbar></Toolbar>
//             </ThemeContext.Provider>
//         )
//      }
//  }
//  class Toolbar extends React.Component{
//      render(){
//          return(
//             <ThemeButton></ThemeButton>
//          )
//      }
//  }
//  function ThemeButton (){
//      return(
//         <button theme={this.ThemeContext}></button>
//      )
//  }
function Repeat(props){
    let arr = []
    for(let i;i<props.numbers<i++){
        arr.push(props.numbers[i])
    }
    return(
        <dev>
            {arr}
        </dev>
    )
}

function App(){
    return (
        <Repeat numbers={10}>
            {(index)=>{<div key={index}>the number is {index}</div>}}
        </Repeat>
    )
}

 ReactDOM.render(
     <App />,
     document.getElementById('root')
 )