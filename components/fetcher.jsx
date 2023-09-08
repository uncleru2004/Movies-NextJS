export default async function fetcher(value) {
    console.log(value);
    const query = {
      url: "https://www.omdbapi.com/?apikey=",
      key: "259c46a8",
    };

    const response = await fetch(query.url + query.key + "&s=" + value);
    if (!response.ok) {
      throw new Error("fetch " + response.status);
    }
    const result = (await response.json()).Search;

    console.log(result);
    return result;
  }