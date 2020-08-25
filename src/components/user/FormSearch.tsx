import React from 'react';
import { Form, Row, Col, Checkbox } from 'antd';

import AutoComplteEmail from '../AutoComplteEmail';

const FormSearch = () => {
    return (
        <Form className="ant-advanced_search-form">
            <Row gutter={24}>
                <Col span={6}>
                    <Form.Item
                        name={'Field99'}
                        label={'Email'}
                        rules={[
                        {
                            required: true,
                            message: 'Input something!',
                        },
                        ]}
                    >
                        <AutoComplteEmail />
                    </Form.Item>
                </Col>
                <Col span={3}>
                    <Form.Item
                        name={'Field88'}
                        label={'Checkbox'}
                    >
                        <Checkbox name="chck01" checked={true} value="01">체크박스1</Checkbox>
                    </Form.Item>
                </Col>
                <Col span={3}>
                    <Form.Item
                        name={'Field87'}
                        label={'Checkbox'}
                    >
                        <Checkbox name="chck02" checked={false} value="02">체크박스2</Checkbox>
                    </Form.Item>
                </Col>
                <Col span={3}>
                    <Form.Item
                        name={'Field86'}
                        label={'Checkbox'}
                    >
                        <Checkbox name="chck03" checked={false} value="03">체크박스3</Checkbox>
                    </Form.Item>
                </Col>
                {/* <Col span={6}>
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
                            options={radioOptions}
                            onChange={onChangeRadio}
                            value={rdoVal}
                            optionType="button"
                        />
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
                </Col> */}
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
        </Form>
    );
};

export default FormSearch;