import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./page/login&register/login/login";
import Home from "./page/home/home";
import Test from "./Test";
import Register from "./page/login&register/register/register";



function App() {
  return (
    <div>
      <Routes>
        <Route path={''} element={<Test/>}></Route>
        <Route path={'home'} element={<Home/>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
