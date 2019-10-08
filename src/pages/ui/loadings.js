import React from 'react';
import {Card,Button,Spin,Icon,Alert } from 'antd'
import './index.less'
export default class Loadings extends React.Component{

    

    render(){

        return <div>
            <Card title="SPin用法" className="card-wrap">
                <Spin size="small" />
                <Spin />
                <Spin size="large" />
            </Card>

            <Card title="内容遮罩" className="card-wrap">
               <Alert></Alert>
            </Card>
        </div>
          
    }
}