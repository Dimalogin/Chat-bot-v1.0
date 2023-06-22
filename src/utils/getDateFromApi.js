function getDateFromApi(title) {
  return fetch(`https://api.pexels.com/v1/search?query=${title}&per_page=5`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: process.env.REACT_APP_API_KEY,
    },
  })
    .then((res) => res.json())
    .then((res) => res);
}

export default getDateFromApi;
