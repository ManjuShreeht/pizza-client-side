import axios from "axios";
import {  toast } from 'react-toastify';

export const getAllPizza = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZA_REQUEST" });
  try {
    const res = await axios.get("https://pizzaapp-e8ek.onrender.com/api/pizza/getall");
   
    dispatch({ type: "GET_PIZZA_SUCCESS", payload: res.data });
   
  } catch (error) {
   
    dispatch({ type: "GET_PIZZA_FALID", payload: error });
    toast.error("server error")
  }
};

export const FilterPizza = (searchkey,category) => async (dispatch) => {
  var filterdata;
  dispatch({ type: "GET_PIZZA_REQUEST" });
  try {
    const res = await axios.get("https://pizzaapp-e8ek.onrender.com/api/pizza/getall");
    // console.log(filterdata)
   filterdata=res.data.filter(pizza=>pizza.name.toLowerCase().includes(searchkey.toLowerCase()))
   if(category !=='all'){
    filterdata=res.data.filter(pizza=>pizza.category.toLowerCase()===category)
   }
   dispatch({ type: "GET_PIZZA_SUCCESS", payload: filterdata });
   console.log(filterdata)
 } catch (error) {
   console.log(error)
   toast.error("server error")
    dispatch({ type: "GET_PIZZA_FALID", payload: error });
  }
};


export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZA_REQUEST" });

  try {
    const res = await axios.post('https://pizzaapp-e8ek.onrender.com/api/pizza/addPizza', {
     name:pizza.name,
     image:pizza.image,
     description:pizza.description,
     category:pizza.category,
     prices: pizza.prices
      
  })
    console.log(res);
    dispatch({ type: 'ADD_PIZZA_SUCCESS'});
    toast.success('pizza added successfull')
    window.location.href='/'
  } catch (error) {
    toast.error('server error')
    dispatch({ type: 'ADD_PIZZA_FAILED', payload: error });
  }
};


export const editPizza = (pizza,id) => async (dispatch) => {
  dispatch({ type: 'EDIT_PIZZA_REQUEST' });

    try {
    const res = await axios.put(`https://pizzaapp-e8ek.onrender.com/api/pizza/edit/${id}`, {
     name:pizza.name,
     image:pizza.image,
     description:pizza.description,
     category:pizza.category,
     prices: pizza.prices
      
  },{
      headers:{token:`bearer ${localStorage.getItem("pizza_token")} `}
  })
   console.log(res);
    dispatch({ type: 'EDIT_PIZZA_SUCCESS' });
    toast.success('pizza updated successfull')
    
    window.location.href='/getallpizza'

  } catch (error) {
    toast.error('server error')
    dispatch({ type: 'EDIT_PIZZA_FAILED', payload: error });
  }
};


export const getPizzaId = (id) => async (dispatch) => {
  dispatch({ type: 'GETID_PIZZA_REQUEST' });

    try {
    const res = await axios.get(`https://pizzaapp-e8ek.onrender.com/api/pizza/getbyid/${id}` )    
      

   
    dispatch({ type: 'GETID_PIZZA_SUCCESS',payload:res.data });
    localStorage.setItem('singleItem',JSON.stringify(res.data))
  
   
    
  } catch (error) {
    toast.error('server error')
    dispatch({ type: 'GETID_PIZZA_FAILED', payload: error });
  }
};



export const deletePizza = (id) => async (dispatch) => {
  dispatch({ type: 'DELETE_PIZZA_REQUEST' });

    try {
    const res = await axios.delete(`https://pizzaapp-e8ek.onrender.com/api/pizza/delete/${id}`     
      
  )
   console.log(res);
    dispatch({ type: 'DELETE_PIZZA_SUCCESS' });
    toast.success('pizza deleted successfull')
    window.location.href='/'
  } catch (error) {
    toast.error('server error')
    dispatch({ type: 'DELETE_PIZZA_FAILED', payload: error });
  }
};