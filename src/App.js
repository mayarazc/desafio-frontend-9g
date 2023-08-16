import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./paginas/Inicio/Inicio";
import DescricaoApp from "./paginas/DescricaoApp/DescricaoApp";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="apps/:urlID" element={<DescricaoApp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
