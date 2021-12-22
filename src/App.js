import Incubator from "./pages/Incubator/Incubator";
import Home from "./pages/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./pages/SHared/NavBar/NavBar";


function App() {
  return (
    <div className="App font-red-hat text-[18px] overflow-x-hidden">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="startups/:startupId" element={<Incubator/>}/>
      </Routes>
    </div>
  );
}

export default App;
