import React from "react";
import { debounce } from "lodash";


type Character = {
  name: string;
};
export default function Input() {
  const [characters, setCharacters] = React.useState<string[]>([]);

  async function search(criteria: string) {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${criteria}`
    );
    const body = await response.json();
    console.log(body)
    console.log("body.results", body.results);
    body.map((item:Character)=> {
   
    console.log(item)
    })
    return body.results.map((result: Character) => result.name);
  }
  const debouncedSearch = React.useRef(
    debounce(async (criteria) => {
      setCharacters(await search(criteria));
    }, 300)
  ).current;

  React.useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  
    debouncedSearch(e.target.value);
  }

  return (
    <div className="App">
      <input
        type="search"
        placeholder="Enter your search"
        onChange={handleChange}
      />
      <ul>
        {characters.map((character) => (
          <li key={character}>{character}</li>
        ))}
      </ul>
    </div>
  );
}
