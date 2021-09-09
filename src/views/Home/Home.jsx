import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Card, Select, DatePicker, InputNumber } from 'antd';
import moment from 'moment';
import { constance } from 'configs';
import product from 'redux/actions/product';

const layout = {
    labelCol: {
      span: 3,
    },
    wrapperCol: {
      span: 18,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 3,
        span: 18,
    },
};

const { Option } = Select;

export default function Home() {
    const dispatch = useDispatch();
    const productSelector = useSelector((state) => state.product);
    console.log(productSelector);

    const onFinish = (values) => {
        const data = {
            genderCd: values.genderCd,
            paymentFrequency: values.paymentFrequency,
            planCode: values.planCode,
            premiumPerYear: values.premiumPerYear,
            dob: moment(values.dob).format(constance.DOB_FORMAT),
        };
        dispatch(product.getProductAction(data));
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card title="Home Page">
            <Form
                name="basic"
                {...layout}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="genderCd"
                    label="Gender"
                    rules={[
                        {
                            required: true,
                            message: 'Please select your gender!'
                        },
                    ]}
                >
                    <Select>
                        <Option value="MALE">Male</Option>
                        <Option value="FEMALE">Female</Option>
                    </Select>
                </Form.Item>
                <Form.Item 
                    label="Date of birth"
                    name="dob"
                    rules={[{ required: true, message: 'Please input your date of birth!' }]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    name="planCode"
                    label="Plan"
                    rules={[
                        {
                            required: true,
                            message: 'Please select your plan!'
                        },
                    ]}
                >
                    <Select>
                        <Option value="T11A20">Package 1 (benefit 200k)</Option>
                        <Option value="T11A50">Package 2 (benefit 500k)</Option>
                        <Option value="T11AM1">Package 3 (benefit 1M)</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Premium "
                    name="premiumPerYear"
                    rules={[{ required: true, message: 'Please input your premium!' }]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    name="paymentFrequency"
                    label="Payment Term"
                    rules={[
                        {
                            required: true,
                            message: 'Please select your payment term!'
                        },
                    ]}
                >
                    <Select>
                        <Option value="YEARLY">Yearly</Option>
                        <Option value="HALFYEARLY">Half Yearly</Option>
                        <Option value="QUARTERLY">Quarterly</Option>
                        <Option value="MONTHLY">Monthly</Option>
                    </Select>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" loading={productSelector.loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}
