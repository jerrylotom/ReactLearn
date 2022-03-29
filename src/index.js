import ReactDom from 'react-dom'
import React from 'react'

//物品搜索
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            onlyStock:false,
            searchContent:'',
            data:[
                {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
            ],
            showData:[]
        }
    }

    handleChange=(e)=>{
         this.setState({onlyStock:e.target.checked})
    }
    handleFilter=(e)=>{
        this.setState({searchContent:e.target.value})


    }
    render(){
        const data = [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ]
        return(
            <div>
                <SearchInput 
                    // onlyStock={this.state.onlyStock}
                    // searchContent={this.state.searchContent}
                    handleFilter={this.handleFilter}
                    handleChange={this.handleChange}
                ></SearchInput>
                <GoodsList 
                    data={data}
                    onlyStock={this.state.onlyStock}
                    searchContent = {this.state.searchContent}
                ></GoodsList>
            </div>
        )
    }
}

class SearchInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div>
                <div className='search-content'>
                    <input type='text' 
                    // value={this.props.searchContent} 
                    onChange={this.props.handleFilter}></input>
                </div>
                
                <div className='only-show-stocked'>
                    <input type='checkbox' 
                    // checked={this.props.onlyStock} 
                    id='check' onChange={this.props.handleChange}></input>
                    <label>only show goods in stocked</label>
                </div>
            </div>
        )
    }
}

function GoodsList(props){
    let data = props.data

    let onlyStock = props.onlyStock
    let searchContent = props.searchContent

    if(onlyStock){
        data = data.filter(e=>{
            return e.stocked === true
        })
    }
    
    if(searchContent.length > 0){
        data = data.filter(e=>{
            return e.name.toLocaleLowerCase().includes(searchContent.toLocaleLowerCase())
        })
    }

    let categoryArr = data.map(e => {
            return e.category
        })
    let catArr = Array.from(new Set(categoryArr))
    let List = catArr.map(e=>{
        const productList = data.filter(list=>{
            return e === list.category
        })
        return(
            <React.Fragment>
                <Category title={e}></Category>
                {
                    productList.map((item,index) => {
                        return <ListItem name={item.name} price={item.price} stocked={item.stocked} key={index}></ListItem>
                    })
                }
            </React.Fragment>
        )
    })
    return(
        <div>
            <table className='goods-table' >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                   {List}
                </tbody>
            </table>
        </div>
    )
}

function Category (props){
    return (
        <tr>
            <th colSpan='2' >{props.title}</th>
        </tr>
    )
}
function ListItem (props){
    let stocked = props.stocked
    return(
        <tr>
            <td style={{ color: stocked?'red':'blue' }}>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}

ReactDom.render(
    <App></App>,
    document.getElementById('root')
)
// export default App