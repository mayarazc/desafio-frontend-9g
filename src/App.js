import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./paginas/Inicio/Inicio";

function App() {
  const vetDadosAPI = [];

  const fetchApps = () => {
    const url = `https://us-central1-dev-test-395900.cloudfunctions.net/apps-9g/apps`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => vetDadosAPI.push(response));
  }

  fetchApps();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio dadosAPI={vetDadosAPI}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
