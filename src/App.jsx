// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLoginPage from './Components/MainLoginPage';

import Login from './Components/Login';
import AdminDashboard from './Components/AdminDashboard';
import UserDashboard from './Components/UserDashboard';
import VendorDashboard from './Components/VendorMainPage';
import MaintenanceMenu from './Components/MaintenanceMenu';
import AddMembership from './Components/AddMemebership';
import UpdateMembership from './Components/UpdateMembership';
import SignUp from './Components/AllSignup';



import VendorPage from './Components/vendor/VendorPage';
import YourItems from './Components/vendor/YourItems';
import InsertItem from './Components/vendor/InsertItem';
import DeleteItem from './Components/vendor/DeleteItem';
import AddNewItem from './Components/vendor/AddNewItem';
import ProductStatus from './Components/vendor/ProductStatus';
// import RequestItem from './Components/vendor/RequestItem';
import ViewProduct from './Components/vendor/ViewProduct';
import Transaction from './Components/vendor/Tranactions';
import UserRequest from './Components/vendor/UserRequest';


import UserCart from './Components/User/Cart'
import UserCheckout from './Components/User/Checkout'
import OrderSucess from './Components/User/OrderSuccess'


// admin 

import AdminPage from './Components/Admin/AdminMain'
import AdminLogin from './Components/Admin/AdminLogin'
import AdminSignup from './Components/Admin/AdminSignup';
import MaintainUserPage from './Components/Admin/MaintainUser';
import MaintainVendorPage from './Components/Admin/MaintainVendor';


//user
import UserOrderStatus from './Components/User/UserOrderStatus';
import UserLogin from './Components/User/UserLogin'
import UserSignup from './Components/User/UserSignup';
import UserPortal from './Components/User/UserPortal';
//vendor

import VendorSignup from './Components/vendor/VendorSignup'
import VendorLogin from './Components/vendor/VendorLogin'
import RequestItem from './Components/vendor/RequestItem'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLoginPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/user" element={<UserDashboard />} />
      <Route path="/vendor" element={<VendorDashboard />} />
      <Route path="/maintenance" element={<MaintenanceMenu />} />
      <Route path="/add-membership" element={<AddMembership />} />
      <Route path="/update-membership" element={<UpdateMembership />} />
      <Route path="/signup" element={<SignUp />} />


      <Route path="/vendor/main" element={<VendorPage />} />
      <Route path="/vendor/your-items" element={<YourItems />} />
      <Route path="/vendor/your-items/insert" element={<InsertItem />} />
      <Route path="/vendor/your-items/delete" element={<DeleteItem />} />
      <Route path="/vendor/add-new-item" element={<AddNewItem />} />
      <Route path="/viewproduct" element={<ViewProduct />} />
      <Route path="/vendor/transaction" element={<Transaction />} />
      <Route path="/vendor/transaction/user-request" element={<UserRequest />} />


      {/* //user protected// */}
      <Route path="/user/UserCart" element={<UserCart />} />
      <Route path="/user/UserCheckout" element={<UserCheckout />} />
      <Route path="/user/order/sucess" element={<OrderSucess />} />

      {/* // */}

      {/* admin route */}

      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/signup" element={<AdminSignup />} />
      <Route path="/admin/maintainUser" element={<MaintainUserPage />} />
      <Route path="/admin/maintainVendor" element={<MaintainVendorPage />} />

      {/* userlogin   */}
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/user/signup" element={<UserSignup />} />
      <Route path="/user/portal" element={<UserPortal />} />
      <Route path="/userStatus" element={<UserOrderStatus />} />


      {/* vendor login  */}
      <Route path="/vendor/signup" element={<VendorSignup />} />
      <Route path="/vendor/login" element={<VendorLogin />} />
      <Route path="/productstatus" element={<ProductStatus />} />
      <Route path="/requestItem" element={<RequestItem />} />

    </Routes>
  );
};

export default App;
