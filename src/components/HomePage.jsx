import React from "react";
import "../styles/HomePage.css";
import Post from './Post';
import ProfilePicture from '../assets/ProfilePicture.png'
import postImage from '../assets/postImage.png'
import SideBar from './SideBar';
// import '../styles/PostFeed.css'

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <div className="nav-container"></div>
        <div className="main">
          <div className="main-left"></div>
          <div className="main-center">
            <div className="story-container">
            </div>
            <div className="post-container">
            <Post
              username="mediamodifier"
              profileImage={ProfilePicture}
              postImage={postImage}
              likes="905,235"
              caption="#mediamodifier #mockups #design #blackfriday #blackfridaysale #sale #cybermonday"
              comment="103"
            />
            </div>
          </div>
          <div className="main-right">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
