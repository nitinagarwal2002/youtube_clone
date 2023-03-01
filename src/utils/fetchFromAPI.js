import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  url: BASE_URL,
  params: {
    maxResults:'50'
},
  headers: {
    "X-RapidAPI-Key": '0e68bac95fmsh1c659c4c984aa8ep12d2d5jsn42a73d2b1303',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}
