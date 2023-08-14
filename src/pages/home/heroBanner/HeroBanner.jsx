import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate("/search/${query}");
    }
  };

  useEffect(() => {
    let bg = data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, []);
  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies, Tv shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              onChange={(e) => {
                e.target.value;
              }}
              onKeyUp={searchQueryHandler}
              placeholder="Sarch for movie or tv show..."
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
