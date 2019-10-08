import React from 'react';
import {Card,Button,Modal} from 'antd'
import './index.less'
export default class Modals extends React.Component{

    state ={
        visible1: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false
    };
   


    handleOpen=(type)=>{
        this.setState({
            [type]:true
        })
        console.log( type)
    }

    
    render(){

        return <div>
               <Card title='基础模态框' className="card-wrap">
                    <Button type="primary"onClick={()=>this.handleOpen("visible1")}>Open</Button>
                    <Button onClick={()=>this.handleOpen("visible2")}>自定义页脚</Button>
                    <Button type="dashed" onClick={()=>this.handleOpen("visible3")}>顶部20px弹框</Button>
                    <Button type="danger" onClick={()=>this.handleOpen("visible4")}>水平垂直居中</Button>
                    <Button type="link" onClick={()=>this.handleOpen("visible5")}>Link</Button>
               </Card>
               <Card title='信息确定框' className="card-wrap">
                    <Button type="primary"onClick={()=>this.handleConfirm("visible1")}>Confirm</Button>
                    <Button onClick={()=>this.handleConfirm("visible2")}>自定义页脚</Button>
                    <Button type="dashed" onClick={()=>this.handleConfirm("visible3")}>顶部20px弹框</Button>
                    <Button type="danger" onClick={()=>this.handleConfirm("visible4")}>水平垂直居中</Button>
                    <Button type="link" onClick={()=>this.handleConfirm("visible5")}>Link</Button>
               </Card>
               <Modal 
               title="Basic Modal"
               visible={this.state.visible1}
               onOk={this.handleOk}
               onCancel={()=>{
                this.setState({
                    visible1:false
                })
               }}>
                   亲爱的小猪头
               </Modal>
               <Modal 
               title="Basic Modal"
               visible={this.state.visible2}
               centered
               okText = '下一步'
               cancelText='算了'
               onOk={this.handleOk}
               onCancel={()=>{
                this.setState({
                    visible2:false
                })
               }}>
                   亲爱的小猪头
               </Modal>
               <Modal 
               title="Basic Modal"
               visible={this.state.visible3}
               style={{top:20}}              
               onOk={this.handleOk}
               onCancel={()=>{
                this.setState({
                    visible3:false
                })
               }}>
                   亲爱的小猪头
               </Modal>

               <Modal 
               title="Basic Modal"
               centered
               visible={this.state.visible4}                            
               onOk={this.handleOk}
               onCancel={()=>{
                this.setState({
                    visible4:false
                })
               }}>
                   亲爱的小猪头
               </Modal>
        </div>
          
    }
}