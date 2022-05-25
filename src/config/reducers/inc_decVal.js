const initialState = 10;

const changeNumVal = (state = initialState , action) =>{
    switch(action.type){
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - action.payload;
        default: return state;
    }
}

export {
    changeNumVal
}