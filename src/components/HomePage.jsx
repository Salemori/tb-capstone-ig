import React from 'react'
import '../styles/HomePage.css'
import NavBar from './NavBar'
import PostFeed from './PostFeed'
import Suggestion from './Suggestion'


function HomePage() {
  return (
  <div>
      <div className='container'>
      <NavBar/>
      <div className='main'>
        <div className='main-left'>I am here</div>
        <PostFeed/>
        <Suggestion/>
        
      </div>
    </div>
  </div>
   
  )
}

export default HomePage
