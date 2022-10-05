import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import elections from "./image/elections.png";

function App() {
  const [votes, setVotes] = useState([]);
  const [data, setData] = useState([]);
  const [date, setDate] = useState([]);

  const fetchData = async () => {
    const URL =
      "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json";
    const response = await fetch(URL);
    const data = await response.json();
    setData(data);
    setVotes(data.cand);
    setDate(new Date().toLocaleString());
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <div>
      <header>
        <img src={elections} alt={elections} width="200px" />
        <span>{`${data.pvv}% das seções totalizadas`}</span>
        {/* <span>{`Última atualização ${data.dt} ${data.ht}`}</span> */}
        <span>{`Última atualização: ${date}`}</span>
        <button type="button" onClick={ fetchData }>🔄</button>
      </header>
      <Cards candidatos={votes} />
    </div>
  );
}

export default App;
