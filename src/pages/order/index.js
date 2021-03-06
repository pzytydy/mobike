import React from 'react'
import {Card , Button , Table ,Form, Select, Modal, message, DatePicker} from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils'
import ETable from './../../conponents/ETable/index'
const FormItem = Form.Item;
const { Option } = Select;
export default class Order extends React.Component{

    state = {
        selectedRowKeys: [], // Check here to configure the default column
        
      };
    params = {
        page:1
    }

    formList =[
        {
            type:'SELECT',
            label:'城市',
            field:'city',
            placeholder:'全部',
            initiaValue:'1',
            width:100,
            list: [{ id: '0', name: '全部' }, { id: '1', name: '北京' }, { id: '2', name: '天津' }, { id: '3', name: '上海' }]

        },
        {
            type:'时间查询',
          
        },
        {
            type:'订单状态',
            label:'城市',
            field:'order_status',
            placeholder:'全部',
            initiaValue:'1',
            width:100,
            list: [{ id: '0', name: '全部' }, { id: '1', name: '进行中' }, { id: '2', name: '天津' }, { id: '3', name: '结束行程' }]

        }
    ]

    componentDidMount(){
        this.requestList()
    }

    requestList = ()=>{
        let _this = this;
        axios.requestList(this,'/order/list',this.params,true)
        // axios.ajax({
        //     url:'/order/list',
        //     data:{
        //         params:{
        //             page:this.params.page
        //         }
        //     }
        // }).then((res)=>{
        //     if (res.code=='0') {
        //         let list = res.result.item_list.map((item,index)=>{
        //             item.key = index;
        //             return item;
        //         })
        //     // console.log(list)
        //         this.setState({
        //             list,
        //             pagination:Utils.pagination(res,(current)=>{
        //                 _this.params.page = current;
        //                 _this.requestList();
        //             })
        //         })
        //     }
        // })
    }
    //订单详情
    openOrderDetail=()=>{
        let item = this.state.selectedItem;
        if (!item) {
            Modal.info({
                title:"信息",
                content:"请选择一条订单"
            })
            return;
        }
        window.open(`/#/common/order/detail/${item.id}`,'_blank')
    }
    onRowClick=(record,index)=>{
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
        console.log(record)
    }

    //查询
    handleFilterSubmit =()=>{
        let fieldsValue = this.props.form.getFieldsValue();
        this.props.filterSubmit(fieldsValue);
    }

    render(){
        const columns = [
            {
                title:'订单编号',
                dataIndex:'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                render(distance){
                    return distance/1000 + 'Km';
                }
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status'
            },
            {
                title: '开始时间',
                dataIndex: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay'
            }
        ]

        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }
        return (
            <div>
                <Card>
                    <FilterForm/>
                </Card>
                <Card style={{marginTop:10}}>
                    <Button type='primary' onClick={this.openOrderDetail} style={{margin:'0 20px'}}>订单详情</Button>
                    <Button type='primary'>结束订单</Button>
                </Card>
                <div className="content-wrap">
                   <ETable
                    updateSelectedItem = {Utils.updateSelectedItem.bind(this)}
                    columns={columns}
                    dataSource= {this.state.list}
                    selectedRowKeys = {this.state.selectedRowKeys}
                    pagination = {this.state.pagination}
                    rowSelection = {rowSelection}
                   
                   />
                   
                    {/* <Table
                     bordered
                     columns={columns}
                     dataSource = {this.state.list}
                     pagination = {this.state.page}
                     rowSelection = {rowSelection}
                     onRow={(record,index)=>{
                         return {
                             onClick:(e)=>{
                                 this.onRowClick(record,index)
                             }
                         }
                     }}
                     /> */}
                </div>
            </div>
        )
    }
}

class FilterForm extends React.Component{

    render(){
        const { getFieldDecorator } = this.props.form;
       return(
        <Form layout='inline'>
            <FormItem label='城市'>
                {
                    getFieldDecorator('city_id')(
                        <Select 
                        style={{width:120}}
                        placeholder='全部'>
                            <Option value=''>全部</Option>
                            <Option value='1'>北京市</Option>
                            <Option value='2'>天津市</Option>
                            <Option value='3'>长沙市</Option>
                            <Option value='4'>娄底市</Option>
                            <Option value='5'>兴义市</Option>
                            <Option value='6'>贵阳市</Option>

                        </Select>
                    )
                }
            </FormItem>
            <FormItem label='订单初始时间'>
                {
                    getFieldDecorator('start_time')(
                        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
                    )
                }
                
            </FormItem>
            <FormItem label='订单结束时间'  >
                    {
                        getFieldDecorator('end_time')(
                            <DatePicker   showTime format="YYYY-MM-DD HH:mm:ss" />,
                        )
                    }
            </FormItem>
            <FormItem label='订单状态'>
                {
                    getFieldDecorator('order_status')(
                        <Select 
                        style={{width:150}}
                        
                        placeholder='全部'>
                            <Option value=''>全部</Option>

                            <Option value='1'>进行中</Option>
                            <Option value='2'>结束行程</Option>
                         </Select>
                    )
                }
            </FormItem>
            
            <FormItem >
                <Button type='primary' style={{margin:'0 20px'}} onClick={this.handleFilterSubmit}>查询</Button>
                <Button onClick={this.reset}>重置</Button>

            </FormItem>
        </Form>
       )
       
    }
}
FilterForm = Form.create({})(FilterForm);
