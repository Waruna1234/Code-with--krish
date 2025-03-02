
import './App.css';
import { Routes, BrowserRouter, Link, Route } from "react-router-dom";
import OrderManagement from './comonets/order-management';
import AddCustomerDetails from'./comonets/CustomerForm.tsx';
import VieweCustomerDetails from './comonets/CustomerDetails.tsx';
import AddProduct from './comonets/ProductForm.tsx';
import VieweProducts from './comonets/ProductDetailsViewe.tsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <nav>
            <Navigation nav={"Order management service"} url="/order-management" />
          </nav>
        </div>

        <Routes>
          <Route path="/order-management" element={<OrderManagement />}></Route>
        </Routes>
      </BrowserRouter>

      
      <BrowserRouter>
        <div>
          <nav>
            <Navigation nav={"Customer management Form"} url="/CustomerForm" />
          </nav>
        </div>

        <Routes>
          <Route path="/CustomerForm" element={<AddCustomerDetails />}></Route>
        </Routes>
        <Routes>
          <Route path="/CustomerForm" element={<VieweCustomerDetails />}></Route>
        </Routes>
        

      </BrowserRouter>


      <BrowserRouter>
        <div>
          <nav>
            <Navigation nav={"Product Form"} url="/ProductForm" />
          </nav>
        </div>

        <Routes>
          <Route path="/ProductForm" element={<AddProduct />}></Route>
        </Routes>
        <Routes>
          <Route path="/ProductForm" element={<VieweProducts />}></Route>
        </Routes>
        

      </BrowserRouter>


    </>

  );
}

function Navigation({ nav, url }) {
  return (
    <li>
      <Link to={url}>{nav}</Link>
    </li>
  )
}

export default App;
