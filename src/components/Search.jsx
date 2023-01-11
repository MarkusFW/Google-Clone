import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
    //state of data layer, and dispatch for changing the data layer
    const [{}, dispatch] = useStateValue()

  //Stores the input the user types into the searchbar
  const [input, setInput] = useState("");
  //useHistory is imported from the router. UseHistory gives us the browsers history
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    console.log("you hit search >>", input);

    dispatch({ 
        type: actionTypes.SET_SEARCH_TERM,
        term: input
     })

    // take the /search and push it into the history
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__input--icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {hideButtons ? (
        <div className="search__buttons">
        <Button
          className="search__buttons--hidden"
          type="submit"
          onClick={search}
          variant="outlined"
        >
          Google Search
        </Button>
        <Button className="search__buttons--hidden" variant="outlined">
          {" "}
          Im feeling lucky
        </Button>
      </div>
      ) : (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined"> Im feeling lucky</Button>
        </div>
      )}
    </form>
  );
};

export default Search;
