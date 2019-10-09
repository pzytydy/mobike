import React  from 'react'
import {Card,Form,Input,Button,message} from 'antd' 

const FormItem= Form.Item;
class FormLogin extends React.Component{

    handleSubmit=()=>{
       let userInfo =  this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if (!err) {
                message.success(`${userInfo.username} 欢迎您`)
            } else {
                
            }
        })
    }
    render(){
        
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        return (
            <div>
                <Card title="登录行内表单">
                    <Form  layout="inline">
                        <FormItem>
                            <Input placeholder="请输入账号">
                            
                            </Input>
                        </FormItem>
                        <FormItem >
                            <Input placeholder="请输入密码">
                            
                            </Input>
                        </FormItem>
                        <FormItem >
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>

                <Card>
                <Form title="水平方向表单" style={{width:300}}>
                        <FormItem>
                            {
                            getFieldDecorator('username',{
                                rules: [
                                    { required: true, message: '账号不能为空!' },
                                    {min:5,max:10,message: '不再长度范围内!'},
                                    {pattern:/^\\w+/g,message: '必须为字母或者数字!'}

                                ],
                            })(
                            <Input placeholder="请输入账号" />

                            )}
                            
                            
                        </FormItem>
                        <FormItem >
                            {
                                getFieldDecorator('password',{
                                rules: [
                                    { required: true, message: '密码不能为空!' },
                                    {min:5,max:10,message: '不再长度范围内!'}
                                ],
                               
                                })(
                            <Input placeholder="请输入密码"/>

                                )}
                            
                          
                        </FormItem>
                        <FormItem >
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }

}
export default  Form.create()(FormLogin);