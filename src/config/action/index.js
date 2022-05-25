const incVal = () =>{
    return{
        type:'INCREMENT'
    }
}

const decVal = (num) =>{
    return{
        type:'DECREMENT',
        payload:num
    }
}

export {
    incVal,
    decVal
}