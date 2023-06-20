

export const addCartReducer=(state={},action)=>{

    // var cartItems=JSON.parse(localStorage.getItem("cart"))? JSON.parse(localStorage.getItem("cart")):[]
    // const addcart=localStorage.getItem('addToCarttt')?JSON.parse(localStorage.getItem("addToCarttt")):null
    // console.log('hi',action.payload)
    //  const alreadyExits=cartItems && cartItems.find(item=> (item.pizzaId===addcart.pizzaId && item.varient === addcart.varient))
       
    //  if(alreadyExits){
    //   {   cartItems=cartItems.map(item=>item.pizzaIdd===addcart.pizzaIdd && item.varient === addcart.varient ? addcart:item)
    //          }
    //       }else{
                   
    //         cartItems=[...state,addcart]
    
    //      }
    switch(action.type){
        case 'CART_REQUEST':return{
            loading:true,
            ...state
        }
        case  'CART_SUCCESS':return {
            loading:false,
            pizzas:action.payload
        }
        case  'CART_FAIL':return {
            error:action.payload,
            loading:false
        }
            default:return state
    }
}

export const getCartReducer=(state={},action)=>{
  

    switch(action.type){
        case 'GET_CART_REQUEST':return{
            loading:true,
            ...state
        }
        case  'GET_CART_SUCCESS':return {
            loading:false,
            cart:action.payload
        }
        case  'GET_CART_FAIL':return {
            error:action.payload,
            loading:false
        }
            default:return state
    }
}

export const deleteCartReducer=(state={},action)=>{
    switch(action.type){
        case 'DELETE_CART_REQUEST':return{
            loading:true,
            ...state
        }
        case  'DELETE_CART_SUCCESS':return {
            loading:false,
            cart:action.payload
        }
        case  'DELETE_CART_FAIL':return {
            error:action.payload,
            loading:false
        }
            default:return state
    }
}

export const updateCartReducer=(state={},action)=>{
    switch(action.type){
        case 'UPDATE_CART_REQUEST':return{
            loading:true,
            ...state
        }
        case  'UPDATE_CART_SUCCESS':return {
            loading:false,
            cart:action.payload
        }
        case  'UPDATE_CART_FAIL':return {
            error:action.payload,
            loading:false
        }
            default:return state
    }
}


export const deleteUserCartReducer=(state={},action)=>{
    switch(action.type){
        case 'DELETE_USERCART_REQUEST':return{
            loading:true,
            ...state
        }
        case  'DELETE_USERCART_SUCCESS':return {
            loading:false,
            cart:action.payload
        }
        case  'DELETE_USERCART_FAIL':return {
            error:action.payload,
            loading:false
        }
            default:return state
    }
}