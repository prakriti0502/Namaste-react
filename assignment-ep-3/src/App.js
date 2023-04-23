import logo from './logo.png';
import user from './user.jpg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <img className="logo" alt="logo" src={logo}/>
        <input className="search" placeholder="Search"/>
        <img alt="user" className="user" src={user}/>
      </header>
    </div>
  );
}

export default App;
