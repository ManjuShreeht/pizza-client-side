import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserOrders, getUserOrders } from '../actions/placeorderAction'
import Loading from '../components/Loading'
import '../styles/order.css'
import Error from '../components/Error'

const Order = () => {
  const userdata=useSelector(state=>state.userLoginReducer)
  const {currentUser}=userdata
    const orderstate=useSelector(state=>state.getUserOrders)
     const{loading,error,success,orders}=orderstate
    const dispatch=useDispatch()
    const {theme}=useSelector(state=>state.DarkReducer)

   
useEffect(()=>{
    dispatch(getUserOrders(currentUser))
   
},[dispatch])
  return (
    <div style={{ backgroundColor:theme=='light'?"#fff":"#212529",height:"100vh",paddingBottom:"50px"}}>
    <h2 style={{color:theme=='light'?"black":"#fff",fontSize:"35px",textAlign:"center"}}>My Orders</h2>
    <hr  />
    <div className="row justify-content-left " style={{paddingBottom:"200px",marginLeft:"60px"}}>
        {loading && <Loading />}
        {error &&<Error />}
       
            {
                orders && orders.map(order=>{
                return <div className="col-md-8 m-2 p-1" style={{ backgroundColor:theme=='light'?"black":"#fff",width:"1100px"}}>

                    <div className="flex-container">
                        <div className='text-left w-50 m-1'>
                            <h2 style={{color:theme=='light'?"#fff":"black",fontSize:"25px"}}>Items</h2>
                            <hr style={{color:theme=='light'?"white":"black"}} />
                        {order.orderItems.map(item=>{
                            return <div>
                                <h5 style={{color:theme=='light'?"#fff":"black"}}>{item.name}
                                 [{item.varient}]{item.prices[0][item.varient]} * {item.quantity}={item.price}</h5>
                                

                            </div>
                            
                        })}
                        </div>
                        <div className='text-left w-50 m-1'>
                           <h2 style={{color:theme=='light'?"#fff":"black",fontSize:"25px"}}>Address</h2> 
                           <hr style={{color:theme=='light'?"white":"black"}} />
                           <h5 style={{color:theme=='light'?"#fff":"black"}}>Street :{order.shippingAddress.street}</h5>
                           <h5 style={{color:theme=='light'?"#fff":"black"}}>City :{order.shippingAddress.city}</h5>
                           <h5 style={{color:theme=='light'?"#fff":"black"}}>Country :{order.shippingAddress.country}</h5>
                           <h5 style={{color:theme=='light'?"#fff":"black"}}>Pincode:{order.shippingAddress.picode}</h5>
                        </div>
                        <div className='text-left w-100 m-1'>
                            <h2 style={{color:theme=='light'?"#fff":"black",fontSize:"25px"}}>Order Info</h2>
                            <hr style={{color:theme=='light'?"white":"black"}} />
                            <h5 style={{color:theme=='light'?"#fff":"black"}}>Order Amount: {order.orderAmount}</h5>
                            <h5 style={{color:theme=='light'?"#fff":"black"}}>Date :{order.createdAt.substring(0,10)}</h5>
                            <h5 style={{color:theme=='light'?"#fff":"black"}}>Transaction Id :{order.transectionId}</h5>
                            <h5 style={{color:theme=='light'?"#fff":"black"}}>Oreder Id:{order._id}</h5>
                        </div>
                        <div className='text-left w-40 m-1'>
                        <h2 style={{color:theme=='light'?"#fff":"black",fontSize:"25px"}}>Status</h2>
                        <hr style={{color:theme=='light'?"white":"black"}} />
                            {order.isDeliverd ?<h5 style={{color:theme=='light'?"#fff":"black"}}>Deliverd</h5>:(<button className="btn3" onClick={()=>{
                                dispatch(deleteUserOrders(order?._id));
                                dispatch(getUserOrders(currentUser))
                            }}>Cancel</button>)}
                            </div>
                            <div>
                  



                                </div>

                    </div>
                </div>
                })
            }
        
    </div>


</div>
  )
}

export default Order