import "./NavBar.css";
// import "./Search.css";

import Home from "../../assets/images/icons/home.svg";
import Chat from "../../assets/images/icons/Vector.svg";
import FindPeople from "../../assets/images/icons/FindPeople.svg";
import NewPost from "../../assets/images/icons/NewPosts.svg";
import Heart from "../../assets/images/icons/heart.svg";
import InstagramIcon from "../../assets/images/icons/Logo.svg";


import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import debounce from "lodash.debounce"; // Debounce to optimize API calls
import { X } from "lucide-react";


const icons = [Home, Chat, NewPost, FindPeople, Heart];
// const iconsDM = [HomeDM, ChatDM, NewPostDM, FindPeopleDM, HeartDM];

// Reusable IconButton component for rendering icons
const IconButton = ({ src, alt }) => (
  <img src={src} alt={alt} className="nav-icon" />
);

IconButton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};


const Navbar = ({ children, onResultSelected }) => {
//   const [search, setSearch] = useState("");
//   const [removedSearch, setRemovedSearch] = useState(false);


  // Debounced API call to reduce the number of API requests




  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="navbar">
      {/* Desktop Navbar */}
      <nav className="navbar-container">
        <div className="logo">
        <img src={InstagramIcon} alt="Instagram Logo" />
        </div>

        <form className="search" onSubmit={(e) => handleSubmit(e)}>
          <button type="submit">
            <CiSearch />
          </button>
          <input
            type="text"
            placeholder="Search"
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <div className="nav-buttons">
          {
              icons.map((icon, index) => (
                <IconButton key={index} src={icon}  />
              ))
          }
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="navbar-sm-mb">
        <button>
          <IoIosArrowBack />
        </button>
        <p>Username</p>
      </nav>

      {children}

      {/* Mobile Footer Navbar */}
      <div className="navbar-footer-sm">
        <div className="nav-buttons">
          {
            icons.map((icon, index) => (
                <IconButton key={index} src={icon}  />
              ))
          }
        </div>
      </div>
     
    </div>
  );
};

Navbar.propTypes = {
  children: PropTypes.node,
  onResultSelected: PropTypes.func.isRequired,
};
export default Navbar;