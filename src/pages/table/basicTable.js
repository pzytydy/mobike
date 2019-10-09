import React from 'react'
import {Card,Table} from 'antd'

export default class BasicTable extends React.Component{
    state={}
    componentDidMount(){
        const dataSource=[{
            id:'0',
            username:'jack',
            sex:'1',
            state:'1',
            interest:'1',
            address:'你心里'
        }]
        this.setState({
            dataSource
        })
    }

    render(){
        const columns = [
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:'用户名',
                dataIndex:'username'
            },
            {
                title:'性别',
                dataIndex:'sex'
            },
            {
                title:'状态',
                dataIndex:'state'
            },
            {
                title:'爱好',
                dataIndex:'interest'
            },
            {
                title:'地址',
                dataIndex:'address'
            },
        ]
        return(
            <div>
                <Card title='基础表格'>
                    <Table 
                    
                    columns = {columns}
                    dataSource={this.state.dataSource}
                    />
                </Card>
            </div>
        );
    }
}