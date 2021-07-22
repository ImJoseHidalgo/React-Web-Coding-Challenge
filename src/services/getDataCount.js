const getDataCount = async (keyword = '') => {
  
  const API_URL = `https://bikeindex.org:443/api/v3/search/count?query=${keyword}&location=Berlin&distance=10&stolenness=proximity`;

  const data = await fetch(API_URL)
    .then(response => response.json())
    .then(res => res)

  return data.proximity;
}

export default getDataCount;