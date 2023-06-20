import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {userRegisterRouter, userLoginReducer,getUserReducer} from './reducers/userReducer'
import {getAllPizzasReducer,editPizzasReducer,deletePizzasReducer,getIdPizzasReducer, AddPizzasReducer} from './reducers/pizzaReducer'
import {DarkReducer} from './reducers/darkReducer'
import {addCartReducer,deleteCartReducer,getCartReducer, updateCartReducer,deleteUserCartReducer} from './reducers/cartReducer'
import { placeOrderReducer,deleteUserOrders, getUserOrders,deliverReducer,getAllOrdersReducer } from './reducers/orderReducer'

const finalReducer = combineReducers({
    userRegisterRouter: userRegisterRouter,
    userLoginReducer: userLoginReducer,
    getUserReducer:getUserReducer,

    getAllPizzasReducer:getAllPizzasReducer,
    AddPizzasReducer:AddPizzasReducer,
    editPizzasReducer:editPizzasReducer ,
    getIdPizzasReducer:getIdPizzasReducer,
    deletePizzasReducer:deletePizzasReducer,


    DarkReducer:DarkReducer,
    
    addCartReducer: addCartReducer,
  getCartReducer:getCartReducer,
  deleteCartReducer: deleteCartReducer,
  updateCartReducer: updateCartReducer,
  deleteUserCartReducer: deleteUserCartReducer,

   placeOrderReducer: placeOrderReducer,
  getUserOrders: getUserOrders,
  deleteUserOrders :deleteUserOrders ,
  getAllOrdersReducer:getAllOrdersReducer,
  deliverReducer:deliverReducer


})

const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;


  const cart = JSON.parse(localStorage.getItem("cart1")) && JSON.parse(localStorage.getItem("currentUser"))
  ? JSON.parse(localStorage.getItem("cart1"))
  : [];
  const singleItem=localStorage.getItem('singleItem')? JSON.parse(localStorage.getItem('singleItem')):null

  const initialState = {
    getCartReducer: {
      cart: cart,
    },
    userLoginReducer: {
      currentUser: currentUser,
     
    },
    getIdPizzasReducer:{
      singleItem:singleItem
    }

   
  };


  const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;