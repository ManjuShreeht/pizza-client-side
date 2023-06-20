import React, { useEffect, useState } from 'react'
import '../../styles/admin.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editPizza, getAllPizza, getPizzaId } from '../../actions/pizzaAction';
import Loading from '../../components/Loading';

const EditPizza = () => {
  const { id } = useParams();

  const single = useSelector((state) => state.getIdPizzasReducer);
  const { singleItem } = single;
  const dispatch = useDispatch();

  useEffect(() => {
   
    dispatch(getPizzaId(id));
    // setname(singleItem[0].name)
    
  }, [id,dispatch]);
 
  const editPizzaState = useSelector((state) => state.editPizzasReducer);
  const {  error, success } = editPizzaState;

  const small =singleItem && singleItem[0] ?singleItem[0].prices[0].small: "" ;
   const large=singleItem && singleItem[0].prices[0].large
   const medium=singleItem && singleItem[0].prices[0].medium
   const name1=singleItem ?singleItem[0].name:""
   const img=singleItem ?singleItem[0].image:""
   const desc=singleItem ?singleItem[0].description:""
   const cat=singleItem ?singleItem[0].category:""
  // console.log(singleItem[0].prices[0].small)
  const [name, setname] = useState(name1);
  const [smallPrice, setsmallPrice] = useState(small);
  const [largprice, setlargprice] = useState(large);
  const [mediumPrice, setmediumPrice] = useState(medium);
  const [image, setimage] = useState(img);
  const [description, setdescription] = useState(desc);
  const [category, setcategory] = useState(cat);

  

  const pizzaid=useSelector((state)=>state.getIdPizzasReducer)
  const {loading}=pizzaid
  const { theme } = useSelector((state) => state.DarkReducer);

  
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

    dispatch(editPizza(pizza, id));
    dispatch(getAllPizza());
  };
  return (
    <div className={`ad  ${theme=="light"?"l-admin":"d-admin"}`} style={{paddingTop:"20px"}}>
    <h2 style={{textAlign:"center"}}>Edit  Pizza</h2>
    {loading ? <Loading />:(
    <div>
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
          Update 
        </button>
</div>
</form>

    </div>)}
  </div>
  );
}

export default EditPizza