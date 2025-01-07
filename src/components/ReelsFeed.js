import React from 'react';
import Reel from './Reel';
import './styles/syles.css';

const reelData = [
  {
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', 
    caption: 'Check out this awesome reel!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png', 
    username: 'john_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    caption: 'Another cool video!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png',
    username: 'jane_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', 
    caption: 'Check out this awesome reel!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png', 
    username: 'john_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    caption: 'Another cool video!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png',
    username: 'jane_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', 
    caption: 'Check out this awesome reel!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png', 
    username: 'john_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    caption: 'Another cool video!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png',
    username: 'jane_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', 
    caption: 'Check out this awesome reel!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png', 
    username: 'john_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    caption: 'Another cool video!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png',
    username: 'jane_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', 
    caption: 'Check out this awesome reel!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png', 
    username: 'john_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    caption: 'Another cool video!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png',
    username: 'jane_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', 
    caption: 'Check out this awesome reel!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png', 
    username: 'john_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    caption: 'Another cool video!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png',
    username: 'jane_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', 
    caption: 'Check out this awesome reel!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png', 
    username: 'john_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    caption: 'Another cool video!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png',
    username: 'jane_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', 
    caption: 'Check out this awesome reel!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png', 
    username: 'john_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    caption: 'Another cool video!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png',
    username: 'jane_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', 
    caption: 'Check out this awesome reel!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png', 
    username: 'john_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    caption: 'Another cool video!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png',
    username: 'jane_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', 
    caption: 'Check out this awesome reel!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png', 
    username: 'john_doe',
  },
  {
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    caption: 'Another cool video!',
    profilePic: 'https://www.w3schools.com/w3images/avatar2.png',
    username: 'jane_doe',
  },
];

const ReelsFeed = () => {
    return (
      <div className="reels-container">
        <div className="reels-feed">
          {reelData.map((reel, index) => (
            <Reel 
              key={index} 
              videoUrl={reel.videoUrl} 
              caption={reel.caption} 
              profilePic={reel.profilePic}
              username={reel.username}
            />
          ))}
        </div>
      </div>
    );
  };  

export default ReelsFeed;
