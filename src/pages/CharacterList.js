import { useQuery, gql } from "@apollo/client";
import "./CharacterList.css";
const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const CharacterList = () => {
  const { error, data, loading } = useQuery(GET_CHARACTERS);
  console.log({ error, loading, data });

  if (loading) return <div>LOADING...</div>;

  if (error) return <div>Something went wrong...</div>;

  return (
    <div className="characterList">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img src={character.image} alt="character" />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterList;
