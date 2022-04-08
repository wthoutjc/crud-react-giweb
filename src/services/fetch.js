import { defaultSETTINGS, getAllURL } from "./fetchSettings.js";

const normalizeString = (str) => {
  return String(str)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(" ", "");
};

const requestHero = async (
  url = getAllURL,
  settings = defaultSETTINGS,
  hero = null
) => {
  // Get all heros
  const response = await fetch(url, settings);
  if (response.status !== 200)
    return ["Falló el procesamiento de la solicitud", false];
  const data = await response.json();

  let heros;

  // Normalize Hero
  if (hero) {
    hero = normalizeString(hero);
    // eslint-disable-next-line no-eval
    let aux = eval(`({${hero}:null})`);
    aux[hero] = data;
    heros = Object.entries(aux);
  } else heros = Object.entries(data);
  return [heros, true];
};

const requestIDHero = async (url, settings) => {
  const response = await fetch(url, settings);
  console.log(response);
  if (response.status === 200) {
    return await response.json();
  }
};

export { requestHero, requestIDHero, normalizeString };
