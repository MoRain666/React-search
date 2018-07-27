export const SEARCH_CHANGE = "SEARCH_CHANGE";
export const TOGGLE_SHOW = "TOGGLE_SHOW";

export const searchChange = (event) => {
    return {
        type: SEARCH_CHANGE,
        payload: event.target.value
    }
}
export const toggleSHow = (isStocked) => {
    return {
        type: TOGGLE_SHOW,
        payload: isStocked
    }
}