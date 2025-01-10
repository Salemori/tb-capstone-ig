import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { FaPlay, FaPause, FaHeart, FaComment, FaShare } from 'react-icons/fa';
import './styles/syles.css';

const Reel = ({ videoUrl, caption, profilePic, username }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [likes, setLikes] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="reel">
      <ReactPlayer
        url={videoUrl}
        playing={isPlaying}
        loop
        muted={false}
        controls={false}
        width="100%"
        height="100%"
      />
      
    
      <div className="reel-overlay">
       
        <div className="play-button" onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </div>

        <div className="profile-info">
          <img className="profile-pic" src={profilePic} alt="profile" />
          <p className="username">{username}</p>
        </div>

        <div className="caption">
          <p>{caption}</p>
        </div>

        <div className="icons">
          <div className="like" onClick={handleLike}>
            <FaHeart />
            <span>{likes}</span>
          </div>
          <div className="comment">
            <FaComment />
          </div>
          <div className="share">
            <FaShare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reel;
