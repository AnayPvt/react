import { useState } from 'react';
import './App.css';

import { PostComponent} from './Post';
import { ProfileComp } from './Profile';

// ------------------- APP -------------------
function App() {
  
  const [posts , setState] = useState([] )

  const postComp = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)
  
  function addPost() {
     setState([...posts , {
        name : "Anay" , 
        subtitle : "10000 Followers" , 
        time : "2 mins ago" , 
        image : "https://codingweek.org/wp-content/uploads/2023/09/chris-ried-ieic5Tq8YMk-unsplash-scaled.jpg", 
        description : "idk what i wanna write so blah blah blah blah"
     }])
  }

  return (
    <div style={appContainerStyle}>
      <button onClick={addPost}>Add Post</button>
      <div style={{display : "flex" , justifyContent : "center"}}>
        <div>
          {postComp}
        </div>
      </div>
    </div>
  );
}

// ------------------- STYLES -------------------
const appContainerStyle = {
  backgroundColor: '#d3e2e8',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '2rem',
  gap: '1.5rem',
};



// ------------------- COMPONENTS -------------------

const OnClickMessage = () => {
  const [notification , setNotification] = useState(0);

  return(
    <div>
      <button onClick={() => {
        setNotification(notification + 1)
      }}>Hit Message</button>
      {notification}
    </div>
  )
}

export default App;