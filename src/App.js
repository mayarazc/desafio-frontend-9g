import Home from "./pages/AppData/AppData";
import AppData from "./pages/AppData/AppData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

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
        <Route path="/" element={<Home apps={dataApps} />} />
        <Route path="apps/:urlID" element={<AppData app={dataApps} appMaterial={dataMaterials} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
