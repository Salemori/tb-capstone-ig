// import Post from './components/Post';
// import './styles/PostFeed.css'
// import ProfilePicture from './assets/ProfilePicture.png'
// import postImage from './assets/postImage.png'
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/navbar/Navbar';

// import SideBar from '../src/components/SideBar';

function App() {


  return (
    <div className="App">
      <Navbar>
      <HomePage />
      </Navbar>
     
    </div>
  );
}

export default App;
