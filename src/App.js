import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import BookNow from './Pages/Home/BookNow/BookNow';
import Order from './Pages/Order/Order';
import Tour from './Pages/Tour-Plan/Tour';
import ManageAllOrder from './Pages/ManageAllOrder/ManageAllOrder';
import AddNewUser from './Pages/AddPackage/AddPackage';
import AddPackage from './Pages/AddPackage/AddPackage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <PrivateRoute path="/bookNow/:serviceID">
              <BookNow></BookNow>
            </PrivateRoute>

            <Route path="/about">
              <About></About>
            </Route>

            <PrivateRoute path="/tour">
              <Tour></Tour>
            </PrivateRoute>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/orderList">
              <Order></Order>
            </Route>
            <Route path="/manageOrder">
              <ManageAllOrder></ManageAllOrder>
            </Route>
            <Route path="/addPackage">
              <AddPackage></AddPackage>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
