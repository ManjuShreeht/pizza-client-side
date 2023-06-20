import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeliverOrder, getAllOrder } from '../../actions/placeorderAction'
import Loading from '../../components/Loading'

const AllOrders = () => {
  const AllOrder=useSelector(state=>state.getAllOrdersReducer)
    const { AllOrders,loading,error}=AllOrder
    const {theme}=useSelector(state=>state.DarkReducer)

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllOrder())
    },[dispatch])
  return (
    <div className={`ad  ${theme=="light"?"l-admin":"d-admin"}`}>
    <h2 style={{textAlign:"center"}}>Orders List</h2>
    <div className='tb'>
      {loading && <Loading />}
      {!loading && !error &&
        <table className={`table2 table-striped border hover ${theme=="light"?"table-dark":"table-light"}`}>
            <thead>
              <tr>
                {/* <th scope="col">S/n</th> */}
                <th scope="col">User Id</th>
                <th scope="col">Email</th>
                
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Trans ID</th>
                <th scope="col">Status</th>
                

              </tr>
            </thead>
            <tbody>
              {AllOrders &&
                AllOrders.map((order,i) => (
                  <tr key={order._id}>
                    {/* <td>{i+1}</td> */}
                    <td>{order. userid}</td>
                    <td>{order.email}</td>
                     <td>Rs {order.orderAmount}</td>
                    <td>{(order.createdAt).substring(0,10)}</td>
                    <td style={{minWidth:"30px"}}>{order.transectionId}</td>
                    <td>{order.isDeliverd?(<h6 className='text-success'>Deliverd</h6>):(
                        <>
                        <button className='but'
                        onClick={()=>{dispatch(DeliverOrder(order._id))}}>Deliver</button>
                        </>
                    )}
                    </td>
                  
                  </tr>
                ))}
            </tbody>
          </table>
    }
    </div>
  </div>
  )
}

export default AllOrders