import React, { createContext, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './pages/Home'
import About from './pages/About'
import Getinvolved from './pages/Getinvolved'
import Donate from './pages/Donate'
import Newsletter from './pages/Newsletter'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Test from "./pages/Test";

import Register from "./pages/Register";
import { initialState, reducer } from "./reducer/UserReducer";
import Logout from "./pages/Logout";

export const userContext = createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (<>
    <userContext.Provider value={{ state, dispatch }}>
      <div className="allButFooter">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/newsletter' element={<Newsletter />} />
          <Route path='/getinvolved' element={<Getinvolved />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/test' element={<Test />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </userContext.Provider>
  </>);
};

export default App;