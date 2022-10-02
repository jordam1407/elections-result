import React, { useEffect, useState } from "react";

function App() {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const URL =
        "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json";
      const response = await fetch(URL);
      const data = await response.json();
      setVotes(data.cand);
    };
    fetchData();
  }, []);
  console.log(votes);
  return (
    <table>
      <thead>
        {votes.length > 0 && <tr>
          <th>{votes[0].nm}</th>
          <th>{votes[1].nm}</th>
          <th>{votes[2].nm}</th>
          <th>{votes[3].nm}</th>
          <th>{votes[4].nm}</th>
          <th>{votes[5].nm}</th>
          <th>{votes[6].nm}</th>
          <th>{votes[7].nm}</th>
          <th>{votes[8].nm}</th>
          <th>{votes[9].nm}</th>
          <th>{votes[10].nm}</th>
        </tr>}
      </thead>
      <tbody>
        {votes.length > 0 && <tr>
          <td>{`Total de votos: ${votes[0].vap} // Percentual: ${votes[0].pvap}`}</td>
          <td>{`Total de votos: ${votes[1].vap} // Percentual: ${votes[1].pvap}`}</td>
          <td>{`Total de votos: ${votes[2].vap} // Percentual: ${votes[2].pvap}`}</td>
          <td>{`Total de votos: ${votes[3].vap} // Percentual: ${votes[3].pvap}`}</td>
          <td>{`Total de votos: ${votes[4].vap} // Percentual: ${votes[4].pvap}`}</td>
          <td>{`Total de votos: ${votes[5].vap} // Percentual: ${votes[5].pvap}`}</td>
          <td>{`Total de votos: ${votes[6].vap} // Percentual: ${votes[6].pvap}`}</td>
          <td>{`Total de votos: ${votes[7].vap} // Percentual: ${votes[7].pvap}`}</td>
          <td>{`Total de votos: ${votes[8].vap} // Percentual: ${votes[8].pvap}`}</td>
          <td>{`Total de votos: ${votes[9].vap} // Percentual: ${votes[9].pvap}`}</td>
          <td>{`Total de votos: ${votes[10].vap} // Percentual: ${votes[10].pvap}`}</td>
        </tr>}
      </tbody>
    </table>
  );
}

export default App;
