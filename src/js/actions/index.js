export const onInputTextChange = (event) =>{
    dispatch({type: "SEARCH_CHANGE",payload: event.target.value});