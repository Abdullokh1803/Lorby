import Auth from "../Components/Authorization";
import Regist from "../Components/Register";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

const Main = () => {



  return (
    <Routes>
      <Route path="/authorization" element={<Auth/>} />
      <Route path="/" element={<Home />} />
      <Route path="/registretion" element={<Regist/>} />
    </Routes>
  );
};

export default Main;
