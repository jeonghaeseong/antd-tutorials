import React, { useState } from 'react';
import { AutoComplete } from 'antd';

const { Option } = AutoComplete;

const AutoComplteEmail = () => {

    const [result, setResult] = useState<string[]>([]);

    const handleSearch = (value: string) => {

        let res: string[] = [];

        if(!value || value.indexOf('@') >= 0) {
            res = [];
        }
        else {
            res = ['retailtech.co.kr', 'naver.com', 'gmail.com', 'nate.com'].map(domain => `${value}@${domain}`);
        }

        setResult(res);
    };

    return (
        <AutoComplete 
            style={{ width: 200 }}
            placeholder="Email Input"
            onSearch={handleSearch}
        >
        {result.map(email => (
            <Option key={email} value={email}>{email}</Option>
        ))}
        </AutoComplete>
    );
};

export default AutoComplteEmail;