import React from 'react';
import { connect } from 'react-redux';
import FormSearch from '../components/user/FormSearch';
import { onFieldsChange } from '../modules/user';

const FormSearchContainer = ({ fields, onFieldsChange }) => {
    return (
        <FormSearch fields={fields} onChange={onFieldsChange} />
    );
};

export default connect(
    ({ user }) => {

        console.log('connect', user.fields);

        return ({
            fields: user.fields
        });
    },
    {
        onFieldsChange
    }
)(FormSearchContainer);