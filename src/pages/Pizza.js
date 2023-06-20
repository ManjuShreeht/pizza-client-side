import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizza } from "../actions/pizzaAction";
import Pizzalist from "../components/Pizzalist";
import "../styles/pizza.css";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Error from "../components/Error";


const Pizza = () => {
  const pizza = useSelector((state) => state.getAllPizzasReducer);
  const dispatch = useDispatch();
  const { pizzas, error, loading } = pizza;
  // console.log(pizzas)
  const { theme } = useSelector((state) => state.DarkReducer);
  useEffect(() => {
    dispatch(getAllPizza());
  }, []);
  return (
    <div className={`${theme === "light" ? "light" : "dark"}`}>
      {loading && <Loading />}

      {!loading && !error && pizza && <Filter />}
      {error && <Error />}
      {
        <div className="pizza">
          {pizzas?.map((pizza, i) => {
            return (
              <div key={pizza._id}>
                <div key={i}>
                  <Pizzalist pizza={pizza} />
                </div>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default Pizza;
