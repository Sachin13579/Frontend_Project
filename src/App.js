import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Shop from "./component/Shop";
import { Routes, Route, Link } from "react-router-dom";
import About from "./component/About";
import Men from "./component/Men";
import Women from "./component/Women";
import Newarrivals from "./component/Newarrivals";
import Help from "./component/Help";
function App() {
  return (
    <div className="App">
      <h1>Ecommerce application</h1>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/collections" element={<Shop></Shop>}></Route>
        <Route path="/collections/women" element={<Women></Women>}></Route>
        <Route path="/collections/men" element={<Men></Men>}></Route>
        <Route
          path="/collections/newarrivals"
          element={<Newarrivals></Newarrivals>}
        ></Route>
        <Route path="/collections/about" element={<About></About>}></Route>
        <Route path="/collections/help" element={<Help></Help>}></Route>
      </Routes>
    </div>
  );
}

export default App;
