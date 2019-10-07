import React from 'react';
import { Row, Col } from 'antd';
import './index.less'

import utils from '../../utils/utils';
import Axios from '../../axios/index'
export default class Header extends React.Component{
    state={}
    componentWillMount(){
        this.setState({
            username:'亲爱的小猪头'
        })
    

    setInterval(() => {
        let sysTime = utils.formatDate(new Date().getTime());
        this.setState({
            sysTime
        })
    }, 1000);
    this.getWeatherAPIData();
}

    getWeatherAPIData(){
        Axios.jsonp({
        url:'http://api.map.baidu.com/telematics/v3/weather?location=beijing&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'

        }).then((res)=>{
            // console.log(res)
            if (res.status=='success') {
                // console.log(res.result[0].weather_data[0])
                console.log(res.results[0].weather_data[0])
                let data = res.results[0].weather_data[0];

                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            } else {
                
            }
        })
    }

    render(){

        return  (
            <div className="header">
                <Row className="header-top" >
                    <Col span={24}>
                        <span>欢迎，{this.state.username}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>  
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl}></img>
                        </span>
                        <span className="weather-datail">
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )      
          
    }
}