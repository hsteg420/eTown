import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

export default function Trailer({ media_type, id }) {

  const [video, setVideo] = useState();
  const fetchVideo = async () => {
    const url = `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=00b12453da487e483d5bf36391cb12b0&language=en-US`;
    const response = await fetch(url);
    const data = await response.json([]);

    setVideo(data.results[0]?.key);
  }
  useEffect(() => {
    fetchVideo();
  }, []);

  return (

    <Button
      variant="contained"
      color="secondary"
      target="__blank"
      href={`https://www.youtube.com/watch?v=${video}`}
    >
      Watch the Trailer
    </Button>
  );
}