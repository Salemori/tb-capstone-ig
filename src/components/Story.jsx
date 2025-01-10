import React from "react";
import "../styles/General.css";

const Story = ({ profileImg, profileName }) => {
  return (
    // <div class="story_update">
    //   <div class="story_flex">
        <div class="mini">
          <div class="colour_border outline">
            <a href="#">
              <img src={profileImg} alt="story cover image" />
            </a>
          </div>
          <p>
            <a href="#">{profileName}</a>
          </p>
        </div>
    //   </div>
    // </div>

  //   <div className="top-mid">
  //   <div className="story-block">
  //     <div className="story">
        
  //     </div>
  //   </div>
  // </div>
  );
};

export default Story;
