import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.less';
import Header from './conponents/Header';
import Footer from './conponents/Footer';
import NavLeft from './conponents/NavLeft';
import './style/common.less'
import Home from './pages/home'








export default class Admin extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){

        return (
            <div>
              <Row className='container'>
                <Col span={3} className='nav-left'>
                    <NavLeft>NavLeft</NavLeft>
                </Col>
                <Col span={21} className='main'>
                    <Header>Header</Header>
                    <Row className='content'>
                        {/* <Home/> */}
                        {this.props.children}
                    </Row>
                    <Footer className='footer'>Footer</Footer>
                </Col>
                </Row>
        </div>)          
          
    }
}