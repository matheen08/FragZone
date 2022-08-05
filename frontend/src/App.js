import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
// import Product from "./component/Home/Product";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Payment from "./component/Cart/Payment.js";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSucess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrder.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct.js";
import OrderList from "./component/Admin/OrderList.js";
import ProcessOrder from "./component/Admin/ProcessOrder.js";
import UsersList from "./component/Admin/UsersList.js";
import UpdateUser from "./component/Admin/UpdateUser.js";
import ProductReview from "./component/Admin/ProductReview.js";
import About from "./component/layout/About/About";
import Contact from "./component/layout/Contact/Contact";
import NotFound from "./component/layout/Not Found/NotFound";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/stripeapikey`,
      {
        withCredentials: true,
      },
      { credentials: "include" }
    );

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}

      <Routes>
        {stripeApiKey && (
          <Route exact path="/process/payment" element={<ProtectedRoute />}>
            <Route
              exact
              path="/process/payment"
              element={
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment />
                </Elements>
              }
            />
          </Route>
        )}
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/contact" element={<Contact />} exact />

        <Route path="/product/:id" element={<ProductDetails />} exact />

        <Route path="/products" element={<Products />} exact />

        <Route path="/products/:keyword" element={<Products />} />

        <Route path="/search" element={<Search />} exact />

        <Route path="/login" element={<LoginSignUp />} exact />

        <Route exact path="/password/forgot" element={<ForgotPassword />} />

        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />

        <Route exact path="/account" element={<ProtectedRoute />}>
          <Route exact path="/account" element={<Profile />} />
        </Route>

        <Route exact path="/me/update" element={<ProtectedRoute />}>
          <Route exact path="/me/update" element={<UpdateProfile />} />
        </Route>

        <Route exact path="/password/update" element={<ProtectedRoute />}>
          <Route exact path="/password/update" element={<UpdatePassword />} />
        </Route>

        <Route exact path="/login/shipping" element={<ProtectedRoute />}>
          <Route exact path="/login/shipping" element={<Shipping />} />
        </Route>

        <Route exact path="/order/confirm" element={<ProtectedRoute />}>
          <Route exact path="/order/confirm" element={<ConfirmOrder />} />
        </Route>

        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/success" element={<ProtectedRoute />}>
          <Route exact path="/success" element={<OrderSucess />} />
        </Route>

        <Route exact path="/orders" element={<ProtectedRoute />}>
          <Route exact path="/orders" element={<MyOrders />} />
        </Route>

        <Route exact path="/order/confirm" element={<ProtectedRoute />}>
          <Route exact path="/order/confirm" element={<ConfirmOrder />} />
        </Route>

        <Route exact path="/order/:id" element={<ProtectedRoute />}>
          <Route exact path="/order/:id" element={<OrderDetails />} />
        </Route>

        <Route
          isAdmin={true}
          exact
          path="/admin/dashboard"
          element={<ProtectedRoute />}
        >
          <Route
            isAdmin={true}
            exact
            path="/admin/dashboard"
            element={<Dashboard />}
          />
        </Route>

        <Route
          isAdmin={true}
          exact
          path="/admin/products"
          element={<ProtectedRoute />}
        >
          <Route
            isAdmin={true}
            exact
            path="/admin/products"
            element={<ProductList />}
          />
        </Route>

        <Route
          isAdmin={true}
          exact
          path="/admin/product"
          element={<ProtectedRoute />}
        >
          <Route
            isAdmin={true}
            exact
            path="/admin/product"
            element={<NewProduct />}
          />
        </Route>

        <Route
          isAdmin={true}
          exact
          path="/admin/product/:id"
          element={<ProtectedRoute />}
        >
          <Route
            isAdmin={true}
            exact
            path="/admin/product/:id"
            element={<UpdateProduct />}
          />
        </Route>

        <Route
          isAdmin={true}
          exact
          path="/admin/orders"
          element={<ProtectedRoute />}
        >
          <Route
            isAdmin={true}
            exact
            path="/admin/orders"
            element={<OrderList />}
          />
        </Route>

        <Route
          isAdmin={true}
          exact
          path="/admin/order/:id"
          element={<ProtectedRoute />}
        >
          <Route
            isAdmin={true}
            exact
            path="/admin/order/:id"
            element={<ProcessOrder />}
          />
        </Route>

        <Route
          isAdmin={true}
          exact
          path="/admin/users"
          element={<ProtectedRoute />}
        >
          <Route
            isAdmin={true}
            exact
            path="/admin/users"
            element={<UsersList />}
          />
        </Route>

        <Route
          isAdmin={true}
          exact
          path="/admin/user/:id"
          element={<ProtectedRoute />}
        >
          <Route
            isAdmin={true}
            exact
            path="/admin/user/:id"
            element={<UpdateUser />}
          />
        </Route>

        <Route
          isAdmin={true}
          exact
          path="/admin/reviews"
          element={<ProtectedRoute />}
        >
          <Route
            isAdmin={true}
            exact
            path="/admin/reviews"
            element={<ProductReview />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

/* <ProtectedRoute path="/account" element={<Profile />} exact /> */
