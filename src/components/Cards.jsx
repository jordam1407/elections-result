import React from "react";

function Cards({ candidatos }) {
  return (
    <div className="circulo">
      {candidatos.map((cand) => (
        <div className="circulos" key={cand.nm}>
          <div className={cand.nm} />
          <h1>{`${cand.nm.replace(/&apos;/, "'")} - ${cand.n}`}</h1>
          <div className="votes">
            <span>{`Votos: ${(+cand.vap).toLocaleString(
              "pt-BR"
            )}`}</span>
            <h2>{`${cand.pvap}%`}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
