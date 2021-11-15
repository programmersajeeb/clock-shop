import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import ExploreProducts from './Pages/ExploreProducts/ExploreProducts/ExploreProducts';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvaider from './contexts/AuthProvider/AuthProvaider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import ClientReviews from './Pages/ClientReviews/ClientReviews';
// import UpdateProduct from './Pages/Dashboard/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <AuthProvaider>
      <Router>
      <Switch>
          <PrivateRoute path="/exploreProducts">
            <ExploreProducts />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/productDetails/:ProductId">
            <ProductDetails />
          </Route>
          <Route path="/clientReview">
            <ClientReviews></ClientReviews>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </AuthProvaider>
    </div>
  );
}

export default App;
