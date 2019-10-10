import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.less';
import Header from './conponents/Header';
import './style/common.less'




export default class Common extends React.Component{
 
    render() {
        return (
            <div>
                <Row className="simple-page">
                    <Header menuType="second" />
                </Row>
                <Row className="content">
                    {this.props.children}
                    {/* this is  common */}
                </Row>
            </div>
        );
    }
}