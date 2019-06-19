//이전 상태와 액션을 받아서 다음 상태를 반환한다
//이전 상태를 반환하는것이 아니고
//새로운 상태를 만들어 반환한다
import * as types from '../actions/ActionTypes';

//이전 상태가 정의되어있지 않을 때
//초기형태
const initialState = {
    number : 0,
    dumb : 'dumbdumb',
    dumbObject : {
        d:0,
        u:1,
        m:2,
        b:3,
    }
}

export default function counter(state = initialState, action){
// es 6 default arguement
//state가 undefined라면 initialState

    switch(action.type){
        case types.DECREMENT:
            return {
                ...state ,
                number: state.number + 1,
                dumbObject :{ ...state.dumbObject, u:0}
            };
        case types.DECREMENT:
            return {
                ...state ,
                number: state.number - 1,
            };
        default:
            return state;
    }
}