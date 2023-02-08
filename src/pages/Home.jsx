import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "../components/Search";
import "./CloneText.css"

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header--left">
          <Link to="about">About</Link>
          <Link to="store">Store</Link>
        </div>

        <div className="home__header--right">
          <a  target="_blank" href="https://clone-project-dffda.web.app/">Gmail </a>
          <Link to="images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <h1 className="home__bodyClone">Clone</h1>
        <div className="home__input--container">
          <Search   />
        </div>
      </div>
    </div>
  );
};

export default Home;
