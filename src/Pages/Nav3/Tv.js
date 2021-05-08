import React, { useEffect, useState } from "react";
import Genre from "../Genre";
import UseGenre from "../UseGenre";
import DisplayTrend from "../../Pages/Display/DisplayTrend";
import "../Display/StyleTrend.css";

const Tv = () => {
  const [content, setContent] = useState([]);
  const [selectGenres, setSelectGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = UseGenre(selectGenres);

  const fetchTv = async () => {
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=00b12453da487e483d5bf36391cb12b0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreforURL}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    setContent(data.results);
  };
  useEffect(() => {
    fetchTv();
  }, [genreforURL]);
  return (
    <div>
      <span className="pageTitle">TV Series</span>
      <Genre
        type="tv"
        selectGenres={selectGenres}
        setSelectGenres={setSelectGenres}
        genres={genres}
        setGenres={setGenres}
      />
      <div className="trending">
        {content &&
          content.map((c) => (
            //console.log(c)
            <DisplayTrend
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average}
              overview={c.overview}
            />
          ))}
      </div>
    </div>
  );
};
export default Tv;
