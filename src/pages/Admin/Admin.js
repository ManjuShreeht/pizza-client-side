import React from 'react'
import { useSelector } from 'react-redux'
import AdminMenu from '../../components/AdminMenu'
import '../../styles/admin.css'

const Admin = () => {
    const userdata=useSelector(state=>state.userLoginReducer)
    const {currentUser}=userdata
    

    const {theme}=useSelector(state=>state.DarkReducer)
  return (
    <div  className={`ad  ${theme=="light"?"l-admin":"d-admin"}`}>
    <h4>Admin Panel</h4>
    <div className='admin'>
        <div>
          <AdminMenu />
        </div>
        <div>
          <div className={`a-name ${theme=="light"?"l":"d"}`}>
          <h5 >{currentUser.username}</h5>
          <h5 > Admin Email : {currentUser.email}</h5>
        <h5  > Admin Contact : {currentUser.mobile}</h5>

          </div>

        </div>
        

    </div>
    </div>
  )
}

export default Admin