import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import About from './components/About/About';
import SignUp from './components/SignUp/SignUp';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './components/contexts/AuthProvider';







function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/courses'>
              <Courses></Courses>
            </Route>

            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/cart'>
              <Cart></Cart>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
