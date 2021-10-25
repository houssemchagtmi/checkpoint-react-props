import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileComponent from './Profile/ProfileComponent';
import HandelName from './Profile/HandleName';
import PhotoProfile from './PhotoProfil.jpg'
function App() {
  // function Data() {
  //   alert("Houssem Eddin Chagtmi")
  // }
  const handleName=(name) => {
    alert(`Hi I am ${name}`)
  }
const styleObject={
  display:'flex',
  flexDirection:'column',
  color:'blue',
  background:"red",
  textAlign: 'center',
  fontFamily: 'cursive',
  fontSize:'24px',
  border: '0px solid black',
  margin:' 10rem 25rem',
  padding:' 2rem 1rem',
  minHeight: '3em',
  width:'30%',
  heigth:'30%',
  resize:'both',
  backgroundImage:"linear-gradient(to right, turquoise, greenyellow",
}

  return (
    
  <div className="App" style={styleObject}>
    <ProfileComponent fullName="houssem"  bio="Bio: I'm fullstak js developer " profession="Profession: FullStack js " handleName={handleName}> 
      <img src={PhotoProfile} alt="houss"/>
    </ProfileComponent>
    

  </div>
  );
}

export default App;
