import Admin from './pages/Admin';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App bg-dark h-screen text-white text-center overflow-y-scroll">
      <NavBar />
      <Admin />
    </div>
  );
}

export default App;
