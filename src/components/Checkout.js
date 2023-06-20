import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
// import { placeOrder } from "../actions/orderAction";
import { placeOrder } from './../actions/placeorderAction';



const Checkout = ({ subtotal }) => {
  const cartstate = useSelector((state) => state.getCartReducer);
  const { cart } = cartstate;
  const userdata = useSelector((state) => state.userLoginReducer);
  const { currentUser } = userdata;
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subtotal, currentUser, cart));
    console.log(token);
  };
  return (
    <div className="wrong" >
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51LwgK4SHPx1utwaqQ3ZW2JvStiqsMudncA4gAs7eWPjxN5snSUTWo199ZGZ2At8yQQvFSOPLaZfCwbmHpZuzvpkr00vl2hsIoZ"
        currency="INR">
        <button className="pay"  >Pay Now </button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
