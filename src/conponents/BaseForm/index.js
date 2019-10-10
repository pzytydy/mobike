import React from 'react'
import {Input,Select,Form,Button,Checkbox,Radio} from 'antd'
const FormItem = Form.Item;
const Option = Select.Option;

class FilterForm extends React.Component{

    initFormList = ()=>{
        const { getFieldDecorator } = this.props.form;
        const formList = this.props.formList;
        if (formList && formList.lengtth>0) {
            formList.forEach((item,i)=>{
                let label = item.label;
                let field = item.field;
                let initValue = item.initialValue||'';
                let placeholder = item.placeholder;
                let width = item.width;
                if (item.type=='SELECT') {
                    const SELECT = <FormItem label={label} key={i}>
                        {
                            getFieldDecorator([field],{
                                initialValue:initialValue
                            })(
                                <Select>
                                    
                                </Select>
                            )
                        }
                    </FormItem>
                }
            })
        }
    }

    render(){
        return (
            <Form>
                <FormItem>

                </FormItem>
            </Form>
        )
    }
}

export default FilterForm = Form.create({})(FilterForm)