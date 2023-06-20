import React, { useState } from 'react'
import "../styles/pizza.css";
import { useDispatch, useSelector } from 'react-redux';
import { FilterPizza } from '../actions/pizzaAction';

const Filter = () => {
    const [searchkey,setKey]=useState('')
    const [category,setCategory]=useState('all')
 
    const dispatch= useDispatch()
    const { theme } = useSelector((state) => state.DarkReducer);
  return (
    <div>
        <form className="filter">
            <input type="text" className={` ${theme==="light"?"p-light":"p-dark"}`} placeholder='search here by pizza name' name="name" value={searchkey} onChange={(e)=>setKey(e.target.value)} />

            <select  value={category} 
              className={` ${theme==="light"?"p-light":"p-dark"}`}
            onChange={(e)=>setCategory(e.target.value)}>
              
              <option >all</option>
               <option >veg</option>
               <option >nonveg</option>
                </select>
                <button type='button'  onClick={()=>dispatch(FilterPizza(searchkey,category))}>Search</button>
               
        </form>
    </div>
  )
}

export default Filter