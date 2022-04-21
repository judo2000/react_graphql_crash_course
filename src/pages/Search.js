import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          id
          name
        }
      }
    }
  }
`;
const Search = () => {
  const [name, setName] = useState("");
  const [getLocations, { loading, error, data }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );
  console.log({ data });
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>LOADING...</div>}
      {error && <div>Something went wrong</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return (
              <li key={character.location.id}>{character.location.name}</li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
