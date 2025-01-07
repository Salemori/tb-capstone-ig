import React from "react";
import "../styles/HomePage.css";
import Post from "./Post";
import ProfilePicture from "../assets/ProfilePicture.png";
import postImage from "../assets/postImage.png";
import SideBar from "./SideBar";
import UseAxios from "../hooks/UseAxios";
// import '../styles/PostFeed.css'

const HomePage = () => {
   const {response, error, loading} = UseAxios({
          method: "GET",
          url: "",
          // url: "https://instagram-best-experience.p.rapidapi.com/feed?user_id=13460080&next_max_id=2530701951199222173_13460080",
          headers: {
            "x-rapidapi-key": "353491ece9msh936c21d49494b27p1834dcjsnb6dac86a32ef",
            "x-rapidapi-host": "instagram-best-experience.p.rapidapi.com",
          },
        });

        let count = 0;
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;

        const postDetails = [
          {
            username: "YogaSpaceKabul",
            profileImage: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postImage: "https://images.unsplash.com/photo-1529693662653-9d480530a697?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postDuration: 5,
          },
          {
            username: "Naomi_Champion",
            profileImage: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postImage: "https://plus.unsplash.com/premium_photo-1713628398142-b0a4be37e94a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postDuration: 3,
          },
          {
            username: "StopAsianHateSupport",
            profileImage: "https://plus.unsplash.com/premium_photo-1709440655728-295d8c1cb722?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postImage: "https://images.unsplash.com/photo-1725500760837-410af960b788?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postDuration: 7,
          },
          {
            username: "AfghanBasketballSquad",
            profileImage: "https://plus.unsplash.com/premium_photo-1694475062567-288df8173d30?q=80&w=893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postImage: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postDuration: 9,
          },
          {
            username: "BushFootyHeroes",
            profileImage: "https://plus.unsplash.com/premium_photo-1711238064070-108cd85b747d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postImage: "https://plus.unsplash.com/premium_photo-1675818517634-a82c6559c511?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postDuration: 4,
          },
          {
            username: "NikeAmbassador",
            profileImage: "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postImage: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postDuration: 6,
          },
          {
            username: "CasterSemenyaLegacy",
            profileImage: "https://images.unsplash.com/photo-1541617392762-9bd12653bd12?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postImage: "https://images.unsplash.com/photo-1735875432677-08906b3c1c04?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postDuration: 8,
          },
          {
            username: "ComptonMajorettes",
            profileImage: "https://images.unsplash.com/photo-1559405201-8f58c61e7dde?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postImage: "https://images.unsplash.com/photo-1612733801642-cd246ff82b0f?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postDuration: 10,
          },
          {
            username: "BlacksInBallet",
            profileImage: "https://images.unsplash.com/photo-1708420417631-420a01fff31b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postImage: "https://images.unsplash.com/photo-1657013232106-5ea966088634?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postDuration: 12,
          },
          {
            username: "VictorySwimCollection",
            profileImage: "https://images.unsplash.com/photo-1486938652242-058ebc2cdfc2?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postImage: "https://images.unsplash.com/photo-1682686581660-3693f0c588d2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postDuration: 11,
          },
          {
            username: "KingJamesAdvocate",
            profileImage: "https://plus.unsplash.com/premium_photo-1678396804166-0dea162819dc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postImage: "https://images.unsplash.com/photo-1516917104098-066b41e68d49?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postDuration: 14,
          },
          {
            username: "MarcusRashfordCampaign",
            profileImage: "https://images.unsplash.com/photo-1591901206004-1b3cc4ffbe3c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postImage: "https://images.unsplash.com/photo-1591901206025-cf902bf74f22?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            postDuration: 13,
          },
        ];

  return (
    <div>
      <div className="container">
        <div className="nav-container"></div>
        <div className="main">
          <div className="main-left"></div>
          <div className="main-center">
            <div className="story-container"></div>
            <div className="post-container">

              {
                response && response.items ? (
                response.items.map((data, index) => (
                  
                  <Post
                  username= {postDetails[index].username}
                  profileImage={postDetails[index].profileImage}
                  // profileImage={ProfilePicture}
                  postImage={postDetails[index].postImage || postImage}
                  // postImage={postImage}
                  likes={data.like_count || "905,235"}
                  caption={data.caption.text || "#mediamodifier #mockups #design #blackfriday #blackfridaysale #sale #cybermonday"}
                  comment={data.comment_count || "103"}
                  duration={postDetails[index].postDuration}
                  // index ={index}
                />
                ))) : <p>No Post Feed</p>
              }
             
            </div>
          </div>
          <div className="main-right">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
