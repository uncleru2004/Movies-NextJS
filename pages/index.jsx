import { useState } from "react";
import RenderCard from "../components/RenderCard";

export default function Movies() {
  const [value, setValue] = useState(""),
    [list, setList] = useState([]);

  async function fetcher(value) {
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
    setList(result);
  }

  return (
    <div>
      <input
        value={value}
        placeholder="Введите название..."
        onInput={(event) => setValue(event.target.value)}
      />

      <button
        onClick={() => {
          fetcher(value);
          setValue("");
          console.log(list);
        }}
      >
        Поиск
      </button>

      <div className="card-wrapper">
        {list.map((movie) => (
          <RenderCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    </div>
  );
}
