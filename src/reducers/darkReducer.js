import {CHANGE_THEME}from '../actions/DarkAction'
const initialState={
    theme:"light",
}

export const DarkReducer=(state=initialState,action)=>{
    switch(action.type){
        case "CHANGE_THEME" :return {...state,theme:action.payload}
                  default:return state;
    }
}