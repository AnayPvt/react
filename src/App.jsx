import { useState, useEffect } from 'react';
import './App.css';
import pfp from './pfp.png';

import { PostComponent} from './Post';
import { ProfileComp } from './Profile';

// ------------------- APP -------------------
function App() {
  return (
    <div style={appContainerStyle}>
      <ProfileComp/>
      <OnClickMessage/>  
      <PostComponent
        name={"anay"}
        subtitle={"130M folllowers"}
        time={"2m ago"}
        description={"bla abiocweonvoewbvwnjdsnvcjw nivewi jidiwqn "}
      />
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
