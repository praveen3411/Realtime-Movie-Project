import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoading/Img";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  let { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");
  console.log(data);
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  useEffect(() => {
    let bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);
  console.log(background);
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
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
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
