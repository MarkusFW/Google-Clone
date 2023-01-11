import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../components/StateProvider";
import UseGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import ImageIcon from "@mui/icons-material/CropOriginal";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BookIcon from "@mui/icons-material/Book";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
  const { data } = UseGoogleSearch(term)
    console.log(data)

  // Mock API call
  // const data = Response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <div className="searchPage__header--items">
            <Link to="/">
            <img
                className="searchPage__logo"
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                alt=""
            />
            </Link>
            <Search hideButtons />
        </div>

        <div className="searchPage__options">
          <div className="searchPage__options--left">
            <div className="searchPage__option">
              <SearchIcon />
              <Link to="/all">All</Link>
            </div>
            <div className="searchPage__option">
              <ImageIcon />
              <Link to="/images">Images</Link>
            </div>
            <div className="searchPage__option">
              <NewspaperIcon />
              <Link to="/news">News</Link>
            </div>
            <div className="searchPage__option">
              <BookIcon />
              <Link to="/books">Books</Link>
            </div>
            <div className="searchPage__option">
              <SlideshowIcon />
              <Link to="/videos">Videos</Link>
            </div>
            <div className="searchPage__option">
              <MoreVertIcon />
              <Link to="/more">More</Link>
            </div>
          </div>

          <div className="searchPage__options--right">
            <div className="searchPage__option">
              <Link to="/tools">Tools</Link>
            </div>
          </div>
        </div>

      </div>

        

      <div className="searchPage__headerBody">
        
        {term && (
          <div className="searchPage__results">
            <p className="searchPage__results--count">
              About {data?.searchInformation.formattedTotalResults} results (
              {data?.searchInformation.formattedSearchTime} seconds) for {term}
            </p>

            {data?.items.map((item) => (
              <div className="searchPage__result">
                <a href={item.link}>

                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        src={item.pagemap?.cse_image[0]?.src}
                        alt=""
                        className="searchPage__result--image"
                      />
                    )}

                  {item.displayLink} ▽
                </a>
                <a className="searchPage__result--title" href={item.link}>
                  <h2> {item.title} </h2>
                </a>
                <p className="searchPage__result--snippet">{item.snippet}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
