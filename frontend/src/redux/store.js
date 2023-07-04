import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userReducer/userReducer';
const persistConfig = {
    key: 'root',
    storage,
};
const rootReducer = combineReducers({
    userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);