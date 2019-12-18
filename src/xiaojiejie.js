import React, { Component } from 'react'
import XiaojiejieItem from './XiaojiejieItem'
import Login from './components/login'

class Xiaojiejie extends Component{

    constructor(props){
        super(props)
        this.state = {
            list: ["wang", "xiaowo"],
            inputValue: ''
        }    
    }

    // componentWillMount(){
    //     console.log("componentWillMount")
    // }

    // componentDidMount(){
    //     console.log("componentDidMmount")
    // }

    // shouldComponentUpdate(){
    //     console.log("shouldComponentUpdate")
    //     return true
    // }

    render() {
        // console.log("render")
        return (
            <div>
                {/* 正确的注释 */}
                <div>
                    <input 
                       value={this.state.inputValue} 
                       onChange={this.inputChange.bind(this)} 
                       ref={(input)=>{this.input=input}}
                    />
                    <button onClick={this.addList.bind(this)}>add items</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                 <XiaojiejieItem 
                                    content={item} 
                                    key={index+item} 
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}/>
                            )
                        })
                    }
                </ul>
                <Login />
            </div>
        )
    }

    inputChange(){
        // console.log(e)
        this.setState({
            inputValue: this.input.value
        })
    }

    addList(e){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    deleteItem(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list: list
        })
    }
}

export default Xiaojiejie