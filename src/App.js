import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Footer from './Components/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Hotels from './Components/Hotels/Hotels';
import Cars from './Components/Cars/Cars';
import PlaceOreder from './Components/Place Order/PlaceOreder';
import MyOrders from './Components/MyOrder/MyOrders';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import UpdateStatus from './Components/UpdateStatus/UpdateStatus';
import AddService from './Components/AddService/AddService';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (

      // main app 

    <div className="App">

      {/* all router inside auth provider  */}

      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">  {/**for root direcotry */}
            <Home></Home>
          </Route>
          <Route exact path="/home"> {/*for home direcotry*/ }
            <Home></Home>
          </Route>
          <Route exact path="/hotels"> {/*for doctor direcotry*/ }
            <Hotels></Hotels>
          </Route>
          <Route exact path="/cars"> {/*for find a hospital direcotry*/ }
            <Cars></Cars>
          </Route>
          <PrivateRoute exact path="/services/place-order/:service_name"> {/*for service view direcotry*/ }
              {/* <ServiceDetail></ServiceDetail> */}
              <PlaceOreder></PlaceOreder>
          </PrivateRoute>
          <PrivateRoute exact path="/contact-us"> {/*for login direcotry*/ }
            <ContactUs></ContactUs>
          </PrivateRoute>
          <Route exact path="/login"> {/*for login direcotry*/ }
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/my-orders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/manage-orders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/update-status/:id">
            <UpdateStatus></UpdateStatus>
          </PrivateRoute>
          <PrivateRoute exact path="/add-new-services">
            <AddService></AddService>
          </PrivateRoute>
          <Route exact path="/signup"> {/*for signup direcotry*/ }
            <Signup></Signup>
          </Route>
          <Route exact path="*"> {/*for 404 direcotry*/ }
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
