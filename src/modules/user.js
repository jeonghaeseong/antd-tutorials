import { createAction, handleActions } from 'redux-actions';

const FIELDS_CHANGE = 'user/FIELDS_CHANGE';

export const onFieldsChange = createAction(FIELDS_CHANGE, payload => payload);

const initialState = {
    fields: [
        {
            name: ['email'],
            value: 'briskly0415@gmail.com'
        }
    ]
};

const user = handleActions({
    [FIELDS_CHANGE]: (state, action) => {
        console.log('######', state, action);
        return ({
            ...state,
            fields: action.payload
        });
    }
}, initialState);

export default user;