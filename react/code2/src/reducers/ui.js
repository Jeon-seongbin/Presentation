import * as types from '../actions/ActionTypes';

const initialState = {
    color : [255,255,255]
}

export default function ui(state = initialState, action){
    if(action.types ===types.SET_COLOR){
        return Object.assign({},state,{color:action.color});
    }else{
        return state;
    }
}