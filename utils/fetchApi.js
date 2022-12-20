import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "a27cfa7b03mshfd6f0208341d1d7p192167jsn189629479253",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com"
    },
  });

  return data;
};
