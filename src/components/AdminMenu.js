import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const AdminMenu = () => {
  const {theme}=useSelector(state=>state.DarkReducer)
  return (
    <div className={`menu ${theme=="light"?"m-l":"m-r"}`}>
      <ul class="list-group">
 <Link to='/getallpizza'> <li class="list-group-item " > All Pizzas List</li></Link>
 <Link to='/getalluser'> <li class="list-group-item"> All Users List</li></Link>
 <Link to='/addnewpizza'><li class="list-group-item"> Add New Pizza</li></Link>
 <Link to='/orderlist'> <li class="list-group-item"> All Orders List</li></Link>
 
</ul>
    </div>
  )
}

export default AdminMenu