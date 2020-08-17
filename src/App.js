import React, {useState, useEffect} from 'react';
import './App.scss';
import { db } from './firebase'


//Components
import Post from './Post'


function App() {
  const [posts, setPosts] = useState([]); 

  useEffect(()=> {
    //this is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
      //everytime a new post is added, this code fires
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="" className="app__headerImage"/>
      </div>
      <h1>Instagram Clone</h1>


      {
      posts.map(post => (
        <Post 
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))
      }

     
      
    </div>
  
  );
}

export default App;
