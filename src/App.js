import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AddNewService from './Pages/AddNewService/AddNewService';
import Login from './Pages/Auth/Login/Login';
import PrivateRoute from './Pages/Auth/PrivateRoute/PrivateRoute';
import Home from './Pages/Home/Home';
import Service from './Pages/Home/Service';
import ThingsToDo from './Pages/Home/ThingsToDo';
import ManageAllOrder from './Pages/ManageAllOrder/ManageAllOrder';
import MyOrder from './Pages/MyOrder/MyOrder';
import NotFound from './Pages/NotFound/NotFound';
import OrderPlace from './Pages/OrderPlace/OrderPlace';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';

function App ()
{
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
            <Route path="/things-to-do">
              <ThingsToDo />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/add-new-service">
              <AddNewService />
            </PrivateRoute>
            <PrivateRoute path="/my-order">
              <MyOrder />
            </PrivateRoute>
            <PrivateRoute path="/manage-all-order">
              <ManageAllOrder />
            </PrivateRoute>
            <PrivateRoute path="/order-place/:id">
              <OrderPlace />
            </PrivateRoute>
            <Route>
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
