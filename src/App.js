import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Inicio from "./paginas/Inicio/Inicio";
import DadosAplicativo from "./paginas/DescricaoApp/DadosAplicativo";

import { vetApps } from "./testeVetApps";

function App() {
  const [dataApps, setDataApps] = useState([]);
  const [dataMaterials, setDataMaterials] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const appsUrl = `https://us-central1-dev-test-395900.cloudfunctions.net/apps-9g/apps`;
      const materialsUrl = `https://us-central1-dev-test-395900.cloudfunctions.net/apps-9g/materials`;

      try {
        const appsResponse = await fetch(appsUrl);
        const appsData = await appsResponse.json();
        setDataApps(appsData);

        const materialsResponse = await fetch(materialsUrl);
        const materialsData = await materialsResponse.json();
        setDataMaterials(materialsData);
      } catch (error) {
        console.log("Request error: " + error);
      }
    }

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio aplicativos={dataApps} />} />
        <Route
          path="apps/:urlID"
          element={
            <DadosAplicativo aplicativos={dataApps} appMaterial={dataMaterials} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
