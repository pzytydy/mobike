import React from 'react';
import {Card,Button,Spin,Icon,Alert,Row,Col,Modal } from 'antd'
import './index.less'
// import './../../../public/gallery'
export default class Gallery extends React.Component{    


    state={
        visible:false
    }
    openGallert=(ImgSrc)=>{
        this.setState({
            visible:true,
            currentImg :'/gallery/'+ImgSrc

        })
    }
    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    render(){
        const imgs=[
            ['1.png','2.png','3.png','4.png','5.png'],
            ['6.png','7.png','8.png','9.png','10.png'],
            ['11.png','12.png','13.png','14.png','15.png'],
            ['16.png','17.png','18.png','19.png','20.png'],
            ['21.png','22.png','23.png','24.png','25.png'],
        ]

        const imgList = imgs.map((list)=>list.map((item)=>
            <Card 
                style={{margin:10}}
                cover = {<img src={'/gallery/'+item} onClick={()=>this.openGallert(item)} />}
            >
                <Card.Meta
                    title='xzt'
                    description=' I  LOVE U'
                />

            </Card>
        ))
        return <div className="card-wrap">
            <Row gutter={16}>
                {
                imgList.map((item,index) => 
                     <Col md={4}>
                        {imgList[index]}                    
                    </Col>
                )

                }
               

            </Row>

            <Modal
                title="Basic Modal"
                width={300}
                height={300}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={null}
                >
                <img src={this.state.currentImg} style={{width:'100%'}}></img>
            </Modal>
        </div>
          
    }
}