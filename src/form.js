import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
// class Clock extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             date:new Date()
//         }
//     }

//     tick(){
//         this.setState({date:new Date()})
//     }

//     componentDidMount(){
//         this.timer = setInterval(()=>{this.tick()},1000)
//     }

//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }

//     render(){
//         return( 
//             <div>{this.state.date.toLocaleTimeString()}</div>    
//         )
//     }
// }


//函数组件与class组件
// function Welcome(props){
//     return <h1>你好厉害呀,{props.name}</h1>
// }
// class Welcome extends React.Component{
//     render(){
//         return <h1>你是真的很不错哦！！</h1>
//     }
// }

// function App(){
//     return(
//         <div>
//             <Welcome name='sen'/>
//             <Welcome name='sen'/>
//             <Welcome name='sen'/>
//             <Welcome name='sen'/> 
//         </div>
        

//     )
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )

// const el = <Welcome name='you'/>
// ReactDom.render(
//     el,
//     document.getElementsById('root')
// )

//循环渲染&Key
// const arr = [1,2,3,4,5,6]
// const ListItem = arr.map(e=>{
//     <li>{e}</li>
// })
// ReactDOM.render(
//     <ul>{ListItem}</ul>,
//     document.getElementById('root')
// )

// class NumberList extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {number:props.numbers}
//     }
//     render(){
//         const ListItem = this.state.number.map(e=>{
//             return <li key={e.toString()}>{e}</li>
//         })
//         return (
//             <ul>{ListItem}</ul>
//         )
//     }

// }
// const numbers = [1,2,3,4,5]
// ReactDOM.render(
//     <NumberList number={numbers}></NumberList>,
//     document.getElementById('root')
// )

// class Blog extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             title:props.title,
//             content:props.title,
//         }
//     };
//     titleItem = this.state.title.map((e,index)=>{
//         <h4 key={index.toString()}>{e}</h4>
//     })
//     contentItem = this.state.content.map((e,index)=>{
//         <div key={index}>{e}</div>
//     })
//     render(){
//         return(
//             <div>
//                 <div>{this.titleItem}</div>
//                 <div>{this.Component}</div>
//             </div>
//         )
//     }
// }

// function NumberList (props){
//     render(
        
//             <li>{this.prop.list.map(e=>{
//                 <span>{e}</span>
//             })}</li>
        
//     )
// }

// const title = [1,2,3,4,5,6]
// const content=['qw','qw','sdf','zcv','iop','000']
// ReactDOM.render(
//     <Blog title={title} content={content}></Blog>,
//     document.getElementById('root')
// )
// ReactDOM.render(
//     // <Clock />,
//     // <input value='ok'/>,
//     <input value={null} />,
//     document.getElementById('root')
// )

//表单
// class EssayForm extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {value:''}

//         this.handleChange=this.handleChange.bind(this)
//     };

//     handleChange(event){
//         this.setState({value:event.target.value})
//     }

//     handleSubmit = (event) => {
//         alert(`你提交的文章是${this.state.value}`)
//         event.preventDefault()
//     }

//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     文章：
//                     <textarea value={this.state.value}  onChang={this.handleChange}></textarea>
//                 </label>
//                 <input type='submit' value='提交' ></input>
//             </form>
//         )
//     }
// }

// ReactDOM.render(
//     <EssayForm></EssayForm>,
//     document.getElementById('root')
// )
// class SelectForm extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {value:'',options:props.options}

//         this.handleChange=this.handleChange.bind(this)
//     };

//     handleChange(event){
//         this.setState({value:event.target.value})
//     }

//     handleSubmit = (event) => {
//         alert(`你选择的水果是${this.state.value}`)
//         event.preventDefault()
//     }

//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     <select value={this.state.value} onChang={this.handleChange}>
//                         {
//                            this.state.options.map(e=>{
//                              <option value={e.value} >{e.name}</option>
//                            })
//                         }
//                     </select>
//                 </label>
//                 <input type='submit' value='提交' ></input>
//             </form>
//         )
//     }
// }

// const fruit = [{value:'苹果',name:'苹果'},{value:'香蕉',name:'香蕉'}]
// ReactDOM.render(
//     <SelectForm options={fruit}></SelectForm>,
//     document.getElementById('root')
// )

//处理多个输入

class Reservation extends React.Component{
    constructor(props){
        super(props)
        this.state = {isGoing:true,numberOfGuests:2}
    }

    handleChange=(event)=>{
        const target = event.target
        let  value = target.name === 'isGoing' ? target.checked : target.numberOfGuests
        let name = target.name
        this.setState({[name]:value})
    }

    render(){
        return(
            <form>
                <label>
                    参与：
                    <input 
                        type='checkbox' 
                        name='isGoing'
                        onChange={this.handleChange}
                        checked={this.state.isGoing}
                    >
                    </input>
                </label>
                <br />
                <label>
                    <input
                        name='numberOfGuests'
                        type='number'
                        onChange={this.handleChange}
                        value={this.state.numberOfGuests}
                    ></input>
                </label>
            </form>
        )
    }
}