const apiKey = "UUVNAvPft3bRJTFQgWDLg1G2pZgdjCUnx3TI206z10HU0HaC2RJ1Pr8b";

function getDateFromApi(title) {
  return fetch(`https://api.pexels.com/v1/search?query=${title}&per_page=5`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: apiKey,
    },
  })
    .then((res) => res.json())
    .then((res) => res);
}

export default getDateFromApi;
