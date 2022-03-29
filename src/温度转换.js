import React from 'react'
import ReactDOM from 'react-dom'


// function BoilingVerdict(props){
//     if(props.celsius>=100){
//         return <p>The water will be boiling</p>
//     }else{
//         return <p>The water will not be boiling</p>
//     }
// }

// class Calculator extends React.Component {
//     constructor(props){
//         super(props)
//         this.handleChange = this.handleChange.bind(this)
//         this.state={
//             temperature:''
//         }
//     }

//     handleChange(e){
//         this.props.onTemperatureChange(e.target.value)
//     }
//     render(){
//         const temperature = this.props.temperature
//         return (
//             <fieldset>
//                 <legend>
//                     Enter temperature in {temperatureType[this.props.type]}:
//                 </legend>
//                 <input 
//                     value={temperature}
//                     onChange={this.handleChange}
//                 />
//             </fieldset>
//         )
//     }
// }

// function tryConvert(temperature, convert){
//     const input = parseFloat(temperature)
//     if(Number.isNaN(input)){
//         return ''
//     }
//     const output = convert(input)
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
// }

// function toCelsius(fahrenheit){
//     return (fahrenheit - 32) * 5 / 9
// }

// function toFahrenheit(celsius){
//     return (celsius * 9 / 5) + 32
// }

// const temperatureType={
//     c:'Celsius',
//     f:'Fahrenheit',
// }
// class TemperatureInput extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//         this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//         this.state = {temperature: '', scale: 'c'};
//     }

//     handleCelsiusChange(temperature) {
//         this.setState({scale: 'c', temperature});
//     }

//     handleFahrenheitChange(temperature) {
//     this.setState({scale: 'f', temperature});
//     }

//     render() {  
//         const scale = this.state.scale;
//         const temperature = this.state.temperature;
//         const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//         const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
//         return (
//             <div>
//                 <Calculator 
//                     type="c"
//                     temperature={celsius}
//                     onTemperatureChange={this.handleCelsiusChange}
//                 />
//                 <Calculator 
//                     type='f'
//                     temperature={fahrenheit}
//                     onTemperatureChange={this.handleFahrenheitChange}
//                 />
//                 <BoilingVerdict celsius={parseFloat(celsius)}/>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <TemperatureInput />,
//     document.getElementById('root')
// )
