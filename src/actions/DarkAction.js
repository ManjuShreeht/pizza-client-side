export const CHANGE_THEME="CHANGE_THEME"

export const DarkAct=(theme)=>dispatch=>{
    dispatch({type : "CHANGE_THEME",payload:theme});
};
   