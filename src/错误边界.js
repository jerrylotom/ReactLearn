import React ,{Suspense,lazy} from 'react'
import ReactDom from 'react-dom'
import {BrowerRouter as Router,Route,Switch} from 'react-router-dom'


// class ErrorBoundary extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {hasError:false}
//     }
//     static getDerivedStateFromError(err){
//         return {hasError:true}
//     }
//     componentDidCatch(err,errorInfo){
//         logErrorToMyService(err,errorInfo)
//     }
//     render(){
//         if(this.state.hasError){
//             return <h1> something is console.error();</h1>
//         }
//         return(
//             this.props.children
//         )
//     }
// }
const Home = lazy(() => import('./routes/home'))
const About = lazy(() => import('./routes/about'))

const App = ()=>{
    <Router>
        <Suspense fallback={<div>loading....</div>}>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/about' component={About}></Route>
            </Switch>
        </Suspense>
    </Router>
}

