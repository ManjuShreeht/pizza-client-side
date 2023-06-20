import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Policy from "./pages/Policy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pizza from "./pages/Pizza";
import { useSelector } from "react-redux";
import Payment from "./pages/Payment";
import Admin from "./pages/Admin/Admin";
import AddPizza from "./pages/Admin/AddPizza";
import AllPizza from "./pages/Admin/AllPizza";
import EditPizza from "./pages/Admin/EditPizza";
import AllUser from "./pages/Admin/AllUser";
import AllOrders from "./pages/Admin/AllOrders";

function App() {
  const userdata = useSelector((state) => state.userLoginReducer);
  const { currentUser,loading } = userdata;
  return (
    
    <>
    <ToastContainer />
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={[currentUser && currentUser.isAdmin?<Navigate to='/admin' />:<Pizza />]} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={[currentUser?<Cart />:<Navigate to='/' />]} />
          <Route path="/order" element={[currentUser?<Order />:<Navigate to='/' />]} />
          <Route path='/payment' element={[currentUser?<Payment />:<Navigate to='/' /> ]} />


          //admin pages
          <Route path="/admin" element={[currentUser&& currentUser.isAdmin?<Admin />:<Navigate to='/' /> ]} />

          <Route
          path="/addnewpizza"
          element={currentUser && currentUser.isAdmin ? <AddPizza /> : <Navigate to="/" />}
        />
        <Route path="/getallpizza" element={currentUser && currentUser.isAdmin ?<AllPizza />:<Navigate to="/" />} />
        <Route path="/admin/:id" element={currentUser && currentUser.isAdmin ?<EditPizza />:<Navigate to="/" />} />
        <Route path="/getalluser" element={currentUser && currentUser.isAdmin ?<AllUser />:<Navigate to="/" />} />
        <Route path="/orderlist" element={currentUser && currentUser.isAdmin ?<AllOrders />:<Navigate to="/" />} />
     

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
