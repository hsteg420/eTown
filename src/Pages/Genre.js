import { Chip } from "@material-ui/core";
import { useEffect } from "react";

const Genre = ({ type, selectGenres, setSelectGenres, genres, setGenres }) => {
  const Add = (genre) => {
    setSelectGenres([...selectGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
  };
  const Remove = (genre) => {
    setSelectGenres(
      selectGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
  };

  const fetchGenre = async () => {
    const url = `https://api.themoviedb.org/3/genre/${type}/list?api_key=00b12453da487e483d5bf36391cb12b0&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(genres);
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenre();
  });
  return (
    <div style={{ padding: "10px 5px" }}>
      {selectGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => Remove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => Add(genre)}
        />
      ))}
    </div>
  );
};

export default Genre;
