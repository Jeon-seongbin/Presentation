//import {INCREMENT,DECREMENT,SET_COLOR} from './ActionTypes'
import * as types from './ActionTypes';
//default 없이 export 했던 객체들은 {} 형태로 불러온다

//엑션을 정의 어떤일을 해야 하는지 정의
export function increment(){
    return {
        type : types.INCREMENT
    }
}

export function decrement(){
    return {
        type: types.DECREMENT
    }
}

export function setColor(color){
    return {
        type: types.SET_COLOR, 
        color: color
    }
}