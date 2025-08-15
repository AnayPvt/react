
const profileCardStyle = {
    width: 300,
    borderRadius: 20,
    backgroundColor: '#1e1e1e',
    color: 'white',
    padding: 20,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    fontFamily: 'sans-serif',
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
  };
export function ProfileComp(pfp){
    return (
      <div style={profileCardStyle}>
        <img
          src={pfp}
          style={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            objectFit: 'cover',
          }}
          alt="Profile"
        />
  
        <div>
          <b style={{ fontSize: 22 }}>Anay Gupta</b>
          <p style={{ margin: '4px 0' }}>Learning</p>
          <p style={{ margin: '4px 0' }}>Delhi</p>
          <p style={{ margin: '4px 0' }}>Delhi University</p>
        </div>
      </div>
    );
  }
  