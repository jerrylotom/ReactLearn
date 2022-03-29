
import React from 'react'
import ReactDom from 'react-dom'

function FancyBorder(props){
    return(
        <div>{props.children}</div>
    )
}

// function WelcomeDialog (){
//     return (
//         <FancyBorder>
//             <p>welcome  to my dreams</p>
//             <p>this is my dreams list....</p>
//         </FancyBorder>
//     )
// }

// function Judge (){
//     return (
//         <div>you are the best one in life game</div>
//     )
// }

// function Old (){
//     return (
//         <div> 12 years Old</div>
//     )
// }

// function Panel (props){
//     return(
//         <div className='Panel'>
//             <div className='left-panel'>
//                 {props.left}
//             </div>
//             <div className='right-panel'>
//                 {props.right}
//             </div>
//         </div>
//     )
// }

// function App (){
//     return(
//         <Panel 
//             left={<Judge></Judge>}
//             right={<Old></Old>}
//         />
//     )
// }

function Dialog (props){
    return(
        <FancyBorder>
            <h1 className = 'dialog-title'>
                {props.title}
            </h1>
            <p className = 'dialog-content'>
                {props.content}
            </p>
        </FancyBorder>
    )
}

function WelcomeDialog (){
    return(
        <Dialog 
            title='dialogTitle'
            content='dialogContent'
        ></Dialog>
    )
}


ReactDom.render(
    <WelcomeDialog></WelcomeDialog>,
    document.getElementById('root')
)