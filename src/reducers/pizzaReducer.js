export const getAllPizzasReducer=(state={pizzas:[]},action)=>{
    switch(action.type){
        case 'GET_PIZZA_REQUEST':return{
            loading:true,
            ...state
        }
        case  'GET_PIZZA_SUCCESS':return {
            loading:false,
            pizzas:action.payload
        }
        case  'GET_PIZZA_FALID':return {
            error:action.payload,
            loading:false
        }
            default:return state
    }
}

export const AddPizzasReducer=(state={},action)=>{
    switch(action.type){
        case 'ADD_PIZZA_REQUEST':return{
            loading:true,
            ...state
        }
        case  'ADD_PIZZA_SUCCESS':return {
            loading:false,
            success:action.payload
           
        }
        case  'ADD_PIZZA_FAILED':return {
            error:action.payload,
            loading:false
        }
            default:return state
    }
}

export const editPizzasReducer=(state={},action)=>{
    switch(action.type){
        case 'EDIT_PIZZA_REQUEST':return{
            loading:true,
            ...state
        }
        case  'EDIT_PIZZA_SUCCESS':return {
            loading:false,
            success:action.payload
           
        }
        case  'EDIT_PIZZA_FAILED':return {
            error:action.payload,
            loading:false
        }
            default:return state
    }
}


export const getIdPizzasReducer=(state={},action)=>{
    switch(action.type){
        case 'GETID_PIZZA_REQUEST':return{
            loading:true,
            ...state
        }
        case  'GETID_PIZZA_SUCCESS':return {
            loading:false,
            success:true,
            singleItem:action.payload
           
        }
        case   'GETID_PIZZA_FAILED':return {
            error:action.payload,
            loading:false
        }
            default:return state
    }
}


export const deletePizzasReducer=(state={},action)=>{
    switch(action.type){
        case 'DELETE_PIZZA_REQUEST':return{
            loading:true,
            ...state
        }
        case  'DELETE_PIZZA_SUCCESS':return {
            loading:false,
            success:action.payload
           
        }
        case  'DELETE_PIZZA_FAILED':return {
            error:action.payload,
            loading:false
        }
            default:return state
    }
}