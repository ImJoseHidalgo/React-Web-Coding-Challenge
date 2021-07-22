const getData = async (page = 1, keyword = '') => {
  
  const API_URL = `https://bikeindex.org:443/api/v3/search?page=${page}&per_page=10&query=${keyword}&location=Berlin&distance=10&stolenness=proximity`;

  const data = await fetch(API_URL)
    .then(response => response.json())
    .then(res => res)

  return data.bikes;
}

export default getData;