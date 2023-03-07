import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID sY-qNa5agZDnjoVkrtQGda7ZW0mWK-H9NvOPgTC-7Qs",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
