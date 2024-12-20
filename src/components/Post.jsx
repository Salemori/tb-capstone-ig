import React from 'react';
import menuIcon from '../assets/menuIcon.png'
import likeIcon from '../assets/likeIcon.png'
import commentIcon from '../assets/commentIcon.png'
import shareIcon from '../assets/shareIcon.png'
import bookmarkIcon from '../assets/bookmarkIcon.png'
import emoji from '../assets/emoji.png'

const Post = ({username, profileImage, postImage, likes, caption, comment}) => {
  return (
    <div className='body-container'>
        <div className="post-container">
          <header>
            <section className='profile'>
            <img src={profileImage} alt="Profile image" />
            <p>{username}</p>
            </section>
            <img src= {menuIcon} alt="Menu icon" className='menuIcon'/>
          </header>
          <main>
            <img src={postImage} alt="Post Image" className='postImage'/>
            <section className='actionSection'>
            <section className='reactionSection'>
            <img src={likeIcon} alt="Like Button" />
            <img src={commentIcon} alt=" Comment Button" />
            <img src={shareIcon} alt="Share Button" />
            </section>
            <img src={bookmarkIcon} alt="Bookmark Button" className='bookmark' />
            </section>

            <p>Liked by <b>you</b> and {likes} <b>others</b></p>
            <p className='caption'>{caption}<span>...more</span></p>
            <p className='viewComments'>View all {comment} comments </p>
            <p className='time'>HOUR AGO</p>
            
          </main>
          <footer>
          <hr />
          <section className="writeComment">
            <section className="addAComment">
            <img src={emoji} alt="Emoji" />
            <p>Add a comment ...</p>
            </section>
            <p>Publish</p>
          </section>
          
          </footer>
        </div>
    </div>
  )
}

export default Post