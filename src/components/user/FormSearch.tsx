import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Row, Col, Checkbox, Radio, Select, DatePicker, Input } from 'antd';

import { CheckboxOptionType } from 'antd/lib/checkbox/Group';

import AutoComplteEmail from '../AutoComplteEmail';
import CmCdCascader from '../CmCdCascader';

const { RangePicker } = DatePicker;

const options: Array<CheckboxOptionType | string> = [
    { label: '체크박스1', value: "1" },
    { label: '체크박스2', value: "2" },
    { label: '체크박스3', value: "3" },
];

const children: any = [];
for (let i = 10; i < 36; i++) {
  children.push(<Select.Option key={i.toString(36) + i} value={i}>{i.toString(36) + i}</Select.Option>);
}

const FormSearch = ({ onChange, fields }: any) => {

    const [rdoVal, setRdoVal] = useState('');

    const onChangeRadio = (e: any) => {
        setRdoVal(() => e.target.value);
    };

    const handleChangeSelect = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <Form className="ant-advanced_search-form" initialValues={{Field88: '1'}} fields={fields} onFieldsChange={ (changedFields, allFileds) => { onChange(allFileds); } }>
            <Row gutter={[8, 8]}>
                <Col span={4}>

                    <Form.Item
                        name={'email'}
                        label={'이메일'}
                        rules={[
                            {
                                required: true,
                                message: 'Input something!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name={'Field88'}
                        label={'체크박스'}
                    >
                        
                        <Checkbox.Group options={options}  >체크박스1</Checkbox.Group>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name={'Field97'}
                        label={'공통코드'}
                        rules={[
                        {
                            required: true,
                            message: 'Input something!',
                        },
                        ]}
                    >
                        <CmCdCascader />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name={'Field96'}
                        label={'기간'}
                        rules={[
                        {
                            required: true,
                            message: 'Input something!',
                        },
                        ]}
                    >
                        <RangePicker />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name={'Field95'}
                        label={'기간+시간'}
                        rules={[
                        {
                            required: true,
                            message: 'Input something!',
                        },
                        ]}
                    >
                        <RangePicker showTime />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name={'Field94'}
                        label={'Radio'}
                        rules={[
                        {
                            required: true,
                            message: 'Input something!',
                        },
                        ]}
                    >
                        <Radio.Group
                            onChange={onChangeRadio}
                            value={rdoVal}
                            optionType="button"
                        >
                            <Radio value={1}>A</Radio>
                            <Radio value={2}>B</Radio>
                            <Radio value={3}>C</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name={'Field93'}
                        label={'Multi Select'}
                        rules={[
                        {
                            required: true,
                            message: 'Input something!',
                        },
                        ]}
                    >
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            onChange={handleChangeSelect}
                        >
                            {children}
                        </Select>
                    </Form.Item>
                </Col>
                {/* {getFields()} */}
            </Row>
            {/* <Row>
                <Col 
                    span={24}
                    style={{
                        textAlign: 'right'
                    }}>
                    <Button type="primary" htmlType="submit">Search</Button>
                    <Button
                        style={{
                        margin: '0 8px',
                    }}>
                        Clear
                    </Button>
                    <a
                        style={{
                            fontSize: 12,
                        }}
                    >
                    </a>
                </Col>
            </Row> */}
            <button type="submit">Submit</button>
        </Form>
    );
};

export default reduxForm({
    form: 'form'
})(FormSearch);