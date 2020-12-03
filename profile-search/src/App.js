import logo from './logo.svg';
// import './App.css';
import Search from './components/Search';
import Profiles from './components/Profiles'
import Header from './components/Header';

function App() {
  return (
    <div className='' style={{overflowX:'hidden'}}>
      <Header />
      <Search />
    </div>
  );
}

export default App;
