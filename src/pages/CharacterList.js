import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";
import "./CharacterList.css";

const CharacterList = () => {
  const { error, loading, data } = useCharacters();

  if (loading) return <div>LOADING...</div>;

  if (error) return <div>Something went wrong...</div>;

  return (
    <div className="characterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={character.id}>
            <img src={character.image} alt="character" />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default CharacterList;
