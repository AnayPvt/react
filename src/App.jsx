import { useState } from 'react';
import './App.css';
import pfp from './pfp.png';

import { PostComponent} from './Post';
import { ProfileComp } from './Profile';

// ------------------- APP -------------------
function App() {
  return (
    <div style={appContainerStyle}>
      <button onClick={addPost}>Add Post</button>
      <div style={{display : "flex" , justifyContent : "center"}}>
        <div>
          <PostComponent
            name={"anay"}
            subtitle={"20 followers"}
            time={"3mins ago"}
            description={"nvewnvwnvkjnjvd iovewnvoiwenv nic ih"}
            image={"https://codingweek.org/wp-content/uploads/2023/09/chris-ried-ieic5Tq8YMk-unsplash-scaled.jpg"}
          />
        </div>
      </div>
    </div>
  );
}

function addPost() {
  
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