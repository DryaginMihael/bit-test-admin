import './App.css';
import Admin from './pages/Admin';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App bg-dark h-screen text-white overflow-y-scroll">
      <NavBar />
      <Admin />
    </div>
  );
}

export default App;
