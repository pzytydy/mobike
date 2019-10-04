import React from 'react';
import './Child';
import Child from './Child';
import 'antd/dist/antd.css';

import { Button } from 'antd';

export default class Life extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    
    // handleAdd(){
    //     this.setState({
    //         count:this.state.count+1
    //     })
    // }

    handleAdd=()=>{
        this.setState({
            count:this.state.count + 1,
        })
        console.log(1)
    }

    handleAddClick(){
        this.setState({
            count:this.state.count + 1,

        })
    }
    render(){
        return <div style={{padding:'100px'}}>
            <p>生命周期</p>
            <Button onClick={this.handleAdd}>点我一哈</Button>
            <button onClick={this.handleAddClick.bind(this)}>点我呀</button>
            <button onClick={this.handleAdd}>点我</button>
            <p>{this.state.count}sss</p>
            <Child></Child>
        </div>
    }
}