// import React from 'react'
// import Checkout from '../components/Checkout'
// import { useSelector } from 'react-redux';

// const Payment = () => {
//     const cartstate = useSelector((state) => state.getCartReducer);
//     const { cart, loading, error } = cartstate;
//     var subtotal = cart && cart.reduce((tot, item) => tot + item.price, 0);
//   return (
//     <div style={{width:"300px"}}>
//         <div>
//             <h3 style={{}}>Pay Now</h3>
//         </div>
//         <div>

//         <Checkout subtotal={subtotal} />
//         </div>
//      </div>
//   )
// }

// export default Payment