import React from 'react';
import { Layout } from 'antd';

import FormSearch from './FormSearch';

const User = () => {
    return (
        <Layout.Content 
            className="site-layout-background"
            style={{
                margin: '10px 16px',
                padding: 10,
                minHeight: 280
            }}
        >
            <FormSearch />
            <div className="search-result-list" style={{ padding: 10 }}>
                {/* <Table bordered components={components} columns={columns} dataSource={data} /> */}
            </div>
        </Layout.Content>
    );
};

export default User;