import axios from 'axios'
import {  toast } from 'react-toastify';

export const addToCart=(pizza,quantity,varient,currentUser)=>async( dispatch,getState)=>{
    dispatch({type:"CART_REQUEST"})
    const userId=currentUser._id;
   
    try{
        const res= await axios.post('https://pizzaapp-e8ek.onrender.com/api/cart/addcart' ,{
            userId:userId,
            pizzaId:pizza._id,
            name:pizza.name, 
            image:pizza.image,
            varient:varient,
            quantity:Number(quantity),
            prices:pizza.prices,
            price:Number(pizza.prices[0][varient]*quantity)
           
        })
       
       
        dispatch({type:"CART_SUCCESS",payload:res.data})
        toast.success('pizza added to cart')
         localStorage.setItem('addToCarttt',JSON.stringify(res.data))
        
    }catch(error){
        console.log(error)
        dispatch({type:"CART_FAIL",payload:error})
        toast.error('server error')
    }

}


export const getCart=(currentUser)=>async( dispatch,getState)=>{
    
    dispatch({type:"GET_CART_REQUEST"})
    const userId=currentUser._id;
    console.log()
    try{
        const res= await axios.post('https://pizzaapp-e8ek.onrender.com/api/cart/usercart' ,{
            userId:userId,
                      
        },{
            headers:{token:`bearer ${localStorage.getItem("pizza_token")} `}
        })
       
        dispatch({type:"GET_CART_SUCCESS",payload:res.data})
        localStorage.setItem("cart1",JSON.stringify(res.data))
        
    }catch(error){
        console.log(error)
        toast.error('server error')
        dispatch({type:"GET_CART_FAIL",payload:error})
    }

}

export const deleteCart=(cart)=>async( dispatch,getState)=>{
    
    dispatch({type:"DELETE_CART_REQUEST"})
    const cartId=cart._id;
    
    try{
        const res= await axios.post('https://pizzaapp-e8ek.onrender.com/api/cart/deletecart' ,{
            cartId:cartId
                      
        },{
            headers:{token:`bearer ${localStorage.getItem("pizza_token")} `}
        })
       
        dispatch({type:"DELETE_CART_SUCCESS",payload:res.data})
        toast.success('pizza   deleted successfull')
        
    }catch(error){
        console.log(error)
        toast.error('sever error')
        dispatch({type:"DELETE_CART_FAIL",payload:error})
    }

}

export const updateCart=(cart,quantity,varient)=>async( dispatch,getState)=>{
    
    dispatch({type:"UPDATE_CART_REQUEST"})
    const cartId=cart._id;
    
    try{
        if(quantity>10 ){
            alert('you cannot add more than 10 quantities')
            quantity=10;
    }else if(quantity<=0){
        alert('you cannot allow less than 0 quantities')
        quantity=1;
    }
    
        else {
        const res= await axios.put('https://pizzaapp-e8ek.onrender.com/api/cart/updatecart' ,{
            cartId:cartId,
            quantity:quantity,
            price:Number(cart.prices[0][varient]*quantity)
                      
        },{
            headers:{token:`bearer ${localStorage.getItem("pizza_token")} `}
        })
        
       
        dispatch({type:"UPDATE_CART_SUCCESS",payload:res.data})
        }
    }catch(error){
        console.log(error)
        dispatch({type:"UPDATE_CART_FAIL",payload:error})
    }

}

export const deleteAllCart=(currentUser)=>async( dispatch,getState)=>{
    
    dispatch({type:"DELETE_USERCART_REQUEST"})
    const userId=currentUser._id;
    
    try{
        const res= await axios.post('https://pizzaapp-e8ek.onrender.com/api/cart/deleteusercart' ,{
            userId:userId
                      
        },{
            headers:{token:`bearer ${localStorage.getItem("pizza_token")} `}
        })
       
        dispatch({type:"DELETE_USERCART_SUCCESS",payload:res.data})
        localStorage.removeItem('cart1')
        toast.success('cart is empty')
        
    }catch(error){
        console.log(error)
        toast.error('server error')
        dispatch({type:"DELETE_USERCART_FAIL",payload:error})
    }

}
