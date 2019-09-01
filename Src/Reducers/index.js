import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import { REHYDRATE, PURGE, persistCombineReducers, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//import storage from '@react-native-community/async-storage'
const authConfig = {
    key: 'loginReducer',
    storage: storage,
    whitelist: ['badgeCount','isLoginSuccess']
 }

export default function getRootReducer() {
    return combineReducers({
        loginReducer: persistReducer(authConfig, loginReducer),
    });
}