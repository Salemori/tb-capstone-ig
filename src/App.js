import Post from './components/Post';
import './styles/PostFeed.css'
import ProfilePicture from './assets/ProfilePicture.png'
import postImage from './assets/postImage.png'


const App=()=> {

  return <Post username="mediamodifier" profileImage={ProfilePicture} postImage={postImage} likes='905,235' caption='#mediamodifier #mockups #design #blackfriday #blackfridaysale #sale #cybermonday' comment='103'/>
}

export default App;
