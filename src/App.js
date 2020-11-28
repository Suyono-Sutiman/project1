import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navibar from './Component/Navibar';
import Awal from './Component/Awal';
import Interior from './Component/Interior';

function App() {
  return (
    <div className="App">
      <Navibar/>
      <Awal/>
      <Interior/>
    </div>
  );
}

export default App;
