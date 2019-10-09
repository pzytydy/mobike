import React from 'react';
import {Card,Button,Spin,Icon,Alert,Tabs,Table, Divider, Tag, Modal, message} from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils'
export default class BasicTab extends React.Component{
    
    state ={
        dataSource:[]
    };
    params={
        page:1
    }

    componentDidMount(){
        
        this.request()
    }
    
   //动态获取mock数据
   request = ()=>{
       let _this = this;
        axios.ajax({
            url:'/table/lists',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then((res)=>{
            if (res.code==0) {
                res.result.list.map((item,index)=>{
                    item.key  = index;
                })
                this.setState({
                    dataSource:res.result.list,
                    selectedRowKeys:[],
                    selectedRows:null,
                    pagination:Utils.pagination(res,(current)=>{
                        _this.params.page = current;
                        this.request();
                    })
                })
                
            }
        })
   }

   onRowClick =(record,index)=>{
        let selectKey = [index];
        Modal.info({
            title:'信息',
            content:`用户名：${record.userName},用户爱好：${record.interest}`
        })
        this.setState({
            selectedRowKeys:selectKey,
            selectItem : record
        })
   }

   //多选执行删除动作
   handleDelete=()=>{

        let rows = this.state.selectedRows;
        // console.log(rows)
        let ids = [];
        rows.map((item)=>
            ids.push(item.id)
        )
        Modal.confirm({
            title:'删除提示',
            content:`您确定要删除这些数据吗?${ids.join(',')}`,
            onOk:()=>{
                message.success('删除成功')
            }
        })
        this.request();
   }

    render(){ 
        const columns = [
            {
                title:'id',
                key:'id',
                dataIndex:'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                render(sex){
                    return sex ==1 ?'男':'女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(state){
                    let config  = {
                        '1':'咸鱼一条',
                        '2':'风华浪子',
                        '3':'北大才子',
                        '4':'百度FE',
                        '5':'创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            }
        ]
        const data = [
        {
            id:'0',
            userName:'Jack',
            sex:'1',
            state:'1',
            interest:'1',
            birthday:'2000-01-01',
            address:'北京市海淀区奥林匹克公园',
            time:'09:00'
        },
        {
            id: '1',
            userName: 'Tom',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '北京市海淀区奥林匹克公园',
            time: '09:00'
        },
        {
            id: '2',
            userName: 'Lily',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '北京市海淀区奥林匹克公园',
            time: '09:00'
        },
        ];
        
        data.map((item,index)=>{
            item.key = index;
        })
        //单选
        const {selectedRowKeys} = this.state;
        const rowSelection = {
            type:'radio',
            selectedRowKeys
        }

        //多选
        // const {rowCheckSelection}=this.state;
        const rowCheckSelection = {
            type:'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys, selectedRows)=>{
                // let ids = [];
                // selectedRows.map((item)=>{
                //     ids.push(item.id)
                // })
                this.setState({
                    selectedRowKeys,
                    selectedRows,
                    // selectedIds:ids
                })
            }
        }


        return <div>
            <Card title="基础表格" className="card-wrap">
              <Table
                bordered
                columns={columns}
                dataSource = {data}
                pagination={false}
              
              />
            </Card>

            <Card title="动态数据渲染表格" className="card-wrap">
              <Table
                bordered
                columns={columns}
                dataSource = {this.state.dataSource} />
            </Card>
            <Card title="动态数据渲染表格 - Mock-单选" className="card-wrap">
              <Table
                bordered
                columns={columns}
                rowSelection={rowSelection}
                onRow={(record,index) => {
                    return {
                      onClick: () => {
                          this.onRowClick(record,index)
                      }, // 点击行
                    
                    };
                  }}
                dataSource = {this.state.dataSource} />
            </Card>
            <Card title="Mock-多选" className="card-wrap">
                <div>
                    <Button onClick={this.handleDelete}>删除</Button>
                </div>
              <Table
                bordered
                columns={columns}
                rowSelection={rowCheckSelection}
                onRow={(record,index) => {
                    return {
                      onClick: () => {
                          this.onRowClick(record,index)
                      }, // 点击行
                    
                    };
                  }}
                dataSource = {this.state.dataSource} />
            </Card>

            <Card title="Mock-表格分页" className="card-wrap">
                <div>
                    <Button onClick={this.handleDelete}>删除</Button>
                </div>
              <Table
                bordered
                columns={columns}
                rowSelection={rowCheckSelection}
                pagination = {this.state.pagination}
                
                dataSource = {this.state.dataSource} />
            </Card>
        </div>
          
    }
}