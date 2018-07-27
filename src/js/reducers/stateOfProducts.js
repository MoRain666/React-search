export const isStocked = (state = false, action) => {
    if(action.type === "TOGGLE_SHOW"){
        if(action.payload === false){
            return true;
        }else if(action.payload === true){
            return false;
        }
    }
    return state;
}