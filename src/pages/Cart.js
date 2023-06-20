import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


import {
  deleteAllCart,
  deleteCart,
  getCart,
  updateCart,
} from "./../actions/cartAction";
import "../styles/cart.css";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Checkout from "../components/Checkout";

const Cart = () => {
  const cartstate = useSelector((state) => state.getCartReducer);
  const { cart, loading, error } = cartstate;
  const userdata = useSelector((state) => state.userLoginReducer);
  const { currentUser } = userdata;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   dispatch(getCart(currentUser));
  // }, [cart,dispatch,currentUser]);
  const { theme } = useSelector((state) => state.DarkReducer);
 

  var subtotal = cart && cart.reduce((tot, item) => tot + item.price, 0);

  return (
    <div className={`e ${theme == "light" ? "e-light" : "e-dark"}`}>
      {loading && <Loading />}
      {error && <Error />}
      <div className="cart">
        <div className="col1">
          {!loading && cart && cart.length > 0 && (
            <div>
              <div className="c-clear">
                <h2>My Cart</h2>
                <button
                  className="clear"
                  onClick={() => {
                    dispatch(deleteAllCart(currentUser));
                    dispatch(getCart(currentUser));
                  }}>
                  Clear cart
                </button>
              </div>
              <div>
                {cart.map((item) => {
                  return (
                    <div class="cart-item">
                      <div>
                        <h4>
                          {" "}
                          {item.name} [{item.varient}]
                        </h4>
                        <h4>
                          Price :{item.quantity} *{" "}
                          {item.prices[0][item.varient]}={item.price}
                        </h4>
                        <div>
                          <h4
                            style={{
                              color: theme == "light" ? "black" : "#fff",
                              display: "inline",
                            }}>
                            Quantity:
                          </h4>
                          <AiOutlinePlus
                            className="cart-plus"
                            onClick={() => {
                              dispatch(
                                updateCart(
                                  item,
                                  Number(item.quantity) + 1,
                                  item.varient
                                )
                              );
                              dispatch(getCart(currentUser));
                            }}
                          />
                          <b
                            style={{
                              color: theme == "light" ? "black" : "#fff",
                            }}>
                            {item.quantity}
                          </b>
                          <AiOutlineMinus
                            className="cart-minus"
                            onClick={() => {
                              dispatch(
                                updateCart(
                                  item,
                                  item.quantity - 1,
                                  item.varient
                                )
                              );
                              dispatch(getCart(currentUser));
                            }}
                          />
                          <hr />
                        </div>
                      </div>
                      <div className="cart-item">
                        <img src={item.image} style={{ height: "80px" }} />
                        <AiOutlineDelete
                          className="del"
                          onClick={() => dispatch(deleteCart(item))}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        {!loading && cart && cart.length > 0 && (
          <div className="col2">
            <h3>SubTotal: {subtotal} /-</h3>
            {/* <Link to='/payment' className="btn2">Checkout</Link> */}
            <Checkout className="pay" subtotal={Number(subtotal)} />
          </div>
        )}
      </div>
      {cart && cart.length == 0 && (
        <div style={{ padding: "207px 450px" }}>
          <h1 style={{ color: theme == "light" ? "black" : "#fff" }}>
            Your Cart Is Empty{" "}
          </h1>
          <button
            className="btn2"
            style={{ marginLeft: "80px" }}
            onClick={() => navigate("/")}>
            Click Here To Add Pizza To Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
