const getDataById = async (id) => {
  
  const API_URL = `https://bikeindex.org:443/api/v3/bikes/${id}`;

  const data = await fetch(API_URL)
    .then(response => response.json())
    .then(res => res)

  return data.bike;
}

export default getDataById;