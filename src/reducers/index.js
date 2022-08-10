import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {login} from '../reducers/login';
import { register} from '../reducers/regist';
import { getProduct} from '../reducers/getProduct';
import {selectedProduct} from '../reducers/selectedProduct';
const allReducers = combineReducers({
    form: formReducer,
    login,
    register,
    getProduct,
    selectedProduct
});

export default allReducers;


