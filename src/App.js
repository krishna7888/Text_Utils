import './App.css';
import Navbaar from './Navbaar';
import Texttaker from './Texttaker';
function App() {
  return (
  <>
  <div id="bdy">
    <Navbaar About="About" Contact="Contact" />
    <Texttaker heading='Enter the text below to convert'  style={{color:'white'}}/>
    </div>
  </>
  );
}
export default App;
