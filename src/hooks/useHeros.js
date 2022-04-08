import { useState, useCallback } from "react";

// Services
import { requestHero, requestIDHero } from "../services/fetch";

//globalURL
import { globalURL } from "../services/fetchSettings";

// Settings
import {
  defaultSETTINGS,
  putSETTINGS,
  deleteSETTIGNS,
} from "../services/fetchSettings";

const useHeros = () => {
  const [heros, setHeros] = useState(null);

  const getHeros = useCallback(async () => {
    try {
      const data = await requestHero();
      if (data) setHeros(data[0]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getHero = useCallback(async ({ id }) => {
    const url = `${globalURL}/${id}.json`;
    try {
      const data = await requestIDHero(url, defaultSETTINGS);
      setHeros([[id, data]]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const editHero = useCallback(async ({ id, newInfo }) => {
    const url = `${globalURL}/${id}.json`;
    try {
      requestIDHero(url, putSETTINGS(newInfo));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const deleteHero = useCallback(async ({ id }) => {
    console.log(id);
    const url = `${globalURL}/${id}.json`;
    try {
      requestIDHero(url, deleteSETTIGNS);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { heros, getHeros, getHero, editHero, deleteHero };
};

export default useHeros;
