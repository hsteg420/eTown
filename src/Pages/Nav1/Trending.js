import React, { useEffect, useState } from "react";
import DisplayTrend from "../../Pages/Display/DisplayTrend";
import "../Display/StyleTrend.css";

const Trending =() =>{
    const [content, setContent] = useState([]);
    const fetchTrend = async () => {
        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=00b12453da487e483d5bf36391cb12b0`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        setContent(data.results);
    };
    useEffect(()=>{
        fetchTrend();
    })
    return (
        <div>
        <span className="pageTitle">TRENDING</span> 
        <div className="trending">
        {
            content && content.map((c) => (
                //console.log(c)
                <DisplayTrend
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                overview={c.overview}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average}/>
            ))
        }
        </div>   
        </div>
    )
}
export default  Trending;
