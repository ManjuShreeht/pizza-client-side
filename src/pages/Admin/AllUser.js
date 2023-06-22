import React, { useEffect } from 'react'
import '../../styles/admin.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getAllUser } from '../../actions/UserActions'
import Loading from '../../components/Loading'
import '../../styles/admin.css'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const AllUser = () => {
  const user=useSelector(state=>state.getUserReducer)
const {AllUser,loading,error}=user
console.log(AllUser)
    const dispatch= useDispatch()
    const {theme}=useSelector(state=>state.DarkReducer)

    useEffect(()=>{
        dispatch(getAllUser())
    },[])
  return (
    <div className={`ad  ${theme=="light"?"l-admin":"d-admin"}`}>
      <h2 style={{textAlign:"center"}}>User List</h2>
      <div className='tb'>
        {loading && <Loading />}
        {!loading && !error &&
        <table className={`table2 table-striped border hover ${theme=="light"? "table-dark":"table-light" } `}  >
        <thead>
        <tr>
                <th scope="col">S/n</th>
                <th scope="col">User Name</th>
                <th scope="col">User Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
        </thead>
        
        <tbody>
              {AllUser &&
                AllUser?.map((user,i) => {
                return  <tr>
                  
                    <td>{i+1}</td>
                    <td>{user.username}</td>
                    <td>
                        {user.email}
                    </td>
                    <td>{user.mobile}</td>
                    <td>{(user.createdAt).substring(0,10)}</td>
                    <td><AiFillDelete style={{cursor:"pointer",color:"red"}} onClick={()=>{
                      dispatch(deleteUser(user._id))
                    }}>Delete</AiFillDelete></td>
                    
                  </tr>
})}
            </tbody>
       
      </table>}
      </div>
    </div>
  )
}

export default AllUser