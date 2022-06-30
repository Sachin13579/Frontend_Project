const initstate={
    loading:false,
    error:false,
    product:[]
}

const productReducer=(state=initstate,action)=>{

    switch(action.type){
        case "HANDLE_LOADING":return{
            ...state,loading:true   
        }
        case "HANDLE_ERROR":return{
            ...state,loading:false,error:true   
        }
        case "STORE_DATA":return{
            ...state,loading:false,error : false,product:action.payload   
        }

        default:
            return state
    }
}


    export{productReducer}