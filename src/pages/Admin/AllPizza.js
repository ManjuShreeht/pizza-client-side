
import Loading from '../../components/Loading'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePizza, getAllPizza, getPizzaId } from '../../actions/pizzaAction';
import { Link } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import '../../styles/admin.css'



const AllPizza = () => {
  const userdata = useSelector((state) => state.userLoginReducer);
  const { currentUser } = userdata;
  const pizza = useSelector((state) => state.getAllPizzasReducer);
  const dispatch = useDispatch();
  const { pizzas, error, loading } = pizza;
  const {theme}=useSelector(state=>state.DarkReducer)

  useEffect(() => {
    dispatch(getAllPizza());
  }, []);

  const deletepizza = (id) => {
    dispatch(deletePizza(id));
  };
  return (
    <div className={`ad  ${theme=="light"?"l-admin":"d-admin"}`}>
      <h2 style={{textAlign:"center"}}>Pizza List</h2>
      <div className='tb'>
        {loading && <Loading />}
        {!loading && !error &&
        <table className={`table table-striped border hover ${theme=="light"? "table-dark":"table-light" } `}  >
        <thead>
          <tr style={{color:theme=="light"?"black":"white" }}> 
            <th  scope="col">S/n</th>
            <th scope="col">Pizza Name</th>
            <th scope="col">Prices</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {pizzas &&
            pizzas.map((pizza) => (
              <tr>
                <td>
                  {" "}
                  <img
                    src={pizza.image}
                    alt="pizza"
                    width="100px"
                    height="100px"
                  />
                </td>
                <td>{pizza.name}</td>
                <td>
                  Small :{pizza.prices[0]["small"]} <br />
                  Medium:{pizza.prices[0]["medium"]} <br />
                  Large:{pizza.prices[0]["large"]} <br />
                </td>
                <td>{pizza.category}</td>
                <td >
                  <Link to={`/admin/${pizza?._id}`}>
                    <AiFillEdit onClick={()=>{
                      dispatch(getPizzaId(pizza._id));
                    }} style={{color:theme=="light"?"white":"black" }} />
                  </Link>{" "}
                  &nbsp;
                  <AiFillDelete onClick={() => deletepizza(pizza._id)} style={{cursor:"pointer"}} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>}
      </div>
    </div>
  )
}

export default AllPizza