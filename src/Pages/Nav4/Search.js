import { Button, createMuiTheme, TextField, ThemeProvider } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useState, useEffect } from "react";
import DisplayTrend from "../Display/DisplayTrend";

const Search = () => {
  const [content, setContent] = useState([]);
  const type = "";
  const [searchText, setSearchText] = useState("");

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=00b12453da487e483d5bf36391cb12b0&language=en-US&query=${searchText}&page=1&include_adult=false`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    setContent(data.results);
  };
  useEffect(() => {
    fetchSearch();
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div className="search" style={{
          display: "flex",
          margin: "15px 0",
        }}>
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            onClick={fetchSearch}
            variant="contained">
            <SearchIcon fontSize="large" />
          </Button>
        </div>
      </ThemeProvider>
      <div className="trending">
        {content &&
          content.map((c) => (
            <DisplayTrend
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (<h2>Not Found</h2>)}
      </div>
    </div>
  );
};

export default Search;
