import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/pizza.css";
import { addToCart, getCart } from "../actions/cartAction";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Pizzalist = ({ pizza }) => {
  const { theme } = useSelector((state) => state.DarkReducer);
  const [quantity, setQuantity] = useState(1);
  const [varient, setvarient] = useState("small");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const userdata = useSelector((state) => state.userLoginReducer);
  const { currentUser } = userdata;

  const dispatch = useDispatch();

  const addtocart = () => {
    if (currentUser) {
      dispatch(addToCart(pizza, quantity, varient, currentUser));
      dispatch(getCart(currentUser));
    } else {
      toast.warning("please login to add cart");
      navigate("/login");
    }
  };
  return (
    <div className={`p ${theme === "light" ? "p-light" : "p-dark"} `}>
      <div>
        <h5 style={{padding:"5px 0px"}}>{pizza.name}</h5>
        <h5 style={{cursor:"pointer"}} onClick={handleShow}>
          <img src={pizza.image} alt="pizza" />
        </h5>
      </div>
      <div className="pizza-flex">
        <div>
          <p>Varients:</p>
          <select value={varient} onChange={(e) => setvarient(e.target.value)}>
            {pizza?.varients.map((v) => {
              return <option value={v}>{v}</option>;
            })}
          </select>
        </div>
        <div>
          <p>Quantity:</p>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}>
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="pizza-flex">
        <div>
          <h6>Price :{pizza.prices[0][varient] * quantity} Rs/- </h6>
        </div>
        <div>
          <button onClick={addtocart}>Add To Cart</button>
        </div>
      </div>

      <Modal show={show} style={{textAlign:"center"}}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} alt='img' style={{width:"300px",height:"300px"}} />
          <p > {pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Pizzalist;
