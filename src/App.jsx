import { useEffect, useState } from "react";
import TshirtServices from "./@services/TshirtServices.js";
import NavBar from "./components/NavBar.jsx";

function App() {
  // const [tshirts, setTshirts] = useState([]);

  // useEffect(() => {
  //   async function fetchAllTshirts() {
  //     const response = await TshirtServices.getAllTshirts();
  //     console.log(response);
  //   }

  //   fetchAllTshirts();
  // }, []);

  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
