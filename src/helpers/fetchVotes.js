export default async function FetchDrinkDetailAPI() {
  const URL = 'https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
