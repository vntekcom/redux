import { combineReducers }  from 'redux';
import taskReducer from './task';
import editReducer from './edit'

//Tong hop tat ca reducer
const rootReducer = combineReducers ({
    //nơi chưa toàn bộ dữ liệu state
    taskArr: taskReducer,
    editTask: editReducer

})

export default rootReducer;