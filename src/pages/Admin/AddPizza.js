import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPizza } from '../../actions/pizzaAction';
import Loading from '../../components/Loading';
import '../../styles/admin.css'

const AddPizza = () => {
  const [name, setname] = useState("");
  const [smallPrice, setsmallPrice] = useState();
  const [largprice, setlargprice] = useState();
  const [mediumPrice, setmediumPrice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const addPizzaState = useSelector((state) => state.AddPizzasReducer);
  const { loading, error, success } = addPizzaState;

  const dispatch = useDispatch();
  const {theme}=useSelector(state=>state.DarkReducer)

  const submitForm = (e) => {
    e.preventDefault();
    console.log(name);
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largprice,
      },
    };

    dispatch(addPizza(pizza));
  };
  return (

    <div className={`ad  ${theme=="light"?"l-admin":"d-admin"}`} style={{paddingTop:"20px"}}>
      <h2 style={{textAlign:"center"}}>Add Pizza</h2>
      <div>
      {loading && <Loading />}
      <form onSubmit={submitForm} className={` ${theme=="light"?"f-light":"f-dark"}`}>
      <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Name</label>
    <input type="" class="form-control" id="exampleFormControlInput1" 
    value={name}
    onChange={(e) => setname(e.target.value)}
    placeholder="enter pizza name" /> 
</div>
 <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Small Price</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" 
      value={smallPrice}
      onChange={(e) => setsmallPrice(e.target.value)}
      placeholder="enter  small pizza price" /> 
</div>
<div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Medium Price</label>
    <input type="text" class="form-control" id="exampleFormControlInput1"
     value={mediumPrice}
     onChange={(e) => setmediumPrice(e.target.value)}
     placeholder="enter medium pizza price" /> 
</div>
<div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Large Pizza Price</label>
    <input type="text" class="form-control" id="exampleFormControlInput1"  value={largprice}
                onChange={(e) => setlargprice(e.target.value)}
                placeholder="enterlarge pizza price"/> 
</div>
<div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Image</label>
    <input type="text" class="form-control" id="exampleFormControlInput1"   value={image}
                onChange={(e) => setimage(e.target.value)}
                placeholder="enter image URL" /> 
</div>
<div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Description</label>
    <input type="text" class="form-control" id="exampleFormControlInput1"   value={description}
                onChange={(e) => setdescription(e.target.value)}
                placeholder="enter descriptione"/> 
</div>
<div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Category</label>
    <input type="text" class="form-control" id="exampleFormControlInput1"  value={category}
                onChange={(e) => setcategory(e.target.value)}
                placeholder="enter category"/> 
</div>
<div>
<button
            className="btn btn-success "
            type="submit"
              >
            ADD NEW
          </button>
</div>
</form>

      </div>
    </div>
  )
}

export default AddPizza