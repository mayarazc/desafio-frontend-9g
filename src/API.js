import { useState, useEffect } from "react";

export const vetApps = [];

const fetchApps = () => {
    const url = `https://us-central1-dev-test-395900.cloudfunctions.net/apps-9g/apps`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => response.map((item) => vetApps.push(item)));
}

fetchApps();

function APIData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {

      try {
        const response = await fetch('https://us-central1-dev-test-395900.cloudfunctions.net/apps-9g/apps');
        const jsonData = await response.json();
        setData(jsonData);

      } catch (e) {
        console.log('Erro de requisição: ' + e);
      }
    }

    fetchData();
  }, [])}

export default APIData;