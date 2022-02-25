import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages.js/Home'
import AuthForm from './components/AuthForm';
import Login from './pages.js/Login';
import Profile from './pages.js/Profile';
import UserProvider, { UserContext } from './Context/userProvider';
import { useContext } from 'react';


function App() {

  const state = useContext(UserContext)

    return (
      <UserProvider>
        <BrowserRouter>
                <nav id="NavBar">
                  <Link to="/">Home</Link>
                  <Link to="/signup">| Sign Up</Link>
                  <Link to="/login">| Login</Link>
                </nav>
                <main>
                  <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/signup" element={<AuthForm/>}></Route>
                    <Route exact path="/login" element={<Login/>}></Route>
                    <Route exact path="/Profile" element={<Profile/>}></Route>
                  </Routes>
                </main>
        </BrowserRouter>
      </UserProvider>
    );
  }
//!state.token ? <SignUp/>: <Navigate to='/Profile'/>
//!state.token ? <Login/>: <Navigate to='/Profile'/>}
//state.token ? <Profile/>: <Navigate to= "/"/>
export default App;