import React from 'react';

export default class Child extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
 

    handleAdd=()=>{
        this.setState({
            count:this.state.count + 1,
        })
        console.log(1)
    }

    handleAddClick(){
        this.setState({
            name:'xia'

        })
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount(){
        console.log('componentDidMount')
        
    }

    componentWillReceiveProps(newProps)
{
    console.log('componentWillReceiveProps')

}

shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return true;
}

componentWillUpdate(){
    console.log('componentWillUpdate')

}

componentDidUpdate(){
    console.log('componentDidUpdate')

}

    render(){
        return <div style={{padding:'100px'}}>
           <p>{this.state.name}</p>
        </div>
    }
}