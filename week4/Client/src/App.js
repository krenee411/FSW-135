import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages.js/Home'
import SignUp from './pages.js/SignUp';
import Login from './pages.js/Login';


function App() {

    return (
      <BrowserRouter>
              <nav id="NavBar">
                <Link to="/">Home</Link>
                <Link to="/signup">| Sign Up</Link>
                <Link to="/login">| Login</Link>
              </nav>
              <main>
                <Routes>
                  <Route exact path="/" element={<Home/>}></Route>
                  <Route exact path="/signup" element={<SignUp/>}></Route>
                  <Route exact path="/login" element={<Login/>}></Route>
                </Routes>
              </main>
      </BrowserRouter>
    );
  }


export default App;