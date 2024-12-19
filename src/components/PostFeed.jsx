import React from "react";
import Story from "./Story";
import "../styles/PostFeed.css";
import UseAxios from "../hooks/UseAxios";

function PostFeed() {
    // const {response, error, loading} = UseAxios({
    //     method: "GET",
    //     url: "https://instagram-best-experience.p.rapidapi.com/feed?user_id=13460080&next_max_id=2530701951199222173_13460080",
    //     headers: {
    //       "x-rapidapi-key": "670609e490msh5fc2bf072c281b7p166e92jsn352f5691cc52",
    //       "x-rapidapi-host": "instagram-best-experience.p.rapidapi.com",
    //     },
    //   });
      
    //   const {response, error, loading, fetchData} = UseAxios({
    //   method: "get",
    //   // url: "https://catfact.ninja/fact",
    //   url: "https://techy-api.vercel.app/api/json",
    //   header: null,
    // });
    
      // if (loading) return <p>Loading...</p>;
      // if (error) return <p>Error: {error}</p>;
      // if (response) return <p>Response: {response}</p>;


    return (
    <div>
      <div className="post-story-container">
        <Story />
        <div className="post-feed-container">
          <div className="post-card">
          {/* {response && <p>{response.message}</p>} */}
        
            {/* <p>respn</p> */}

            {/* <div className="post-header">
              <div className="header-image">
                <img
                //   src={fj}
                  alt="feed image"
                />
              </div>
              <h3>Some Name</h3>
              <p>An Icon</p>
            </div>
            <div className="post-image">
              <img
                // src= {fj}
                alt="image"
              />
            </div>
            <div className="post-contents">
              <div className="post-reactions"></div>
              <div className="post-likes">
                <p>
                  Liked by <span className="person">{}</span> and{" "}
                  <span className="total-likes">{}</span> others
                </p>
              </div>
              <div className="post-caption">{}</div>
              <div className="total-views">
                <p>View all {} comments</p>  
              </div>
              <div>
                <p>{} {} ago</p>
              </div>
            </div> */}
          </div>

          <div className="post-card">
            <div className="post-header">
              <div className="header-image">
                <img
                  src="https://images.unsplash.com/photo-1665686304355-0b09b1e3b03c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="feed image"
                />
              </div>
              {/* <h3>{response && <p>{response.message}</p>}</h3> */}
              <p>An Icon</p>
            </div>
            <div className="post-image">
              <img
                src="https://images.unsplash.com/photo-1665686304355-0b09b1e3b03c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PostFeed
