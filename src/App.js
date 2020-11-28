import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navibar from './Component/Navibar';
import Awal from './Component/Awal';
import Interior from './Component/Interior';
import Exterior from './Component/Exterior';
import Tentang from './Component/Tentang';

function App() {
  return (
    <div className="App">
      <Navibar/>
      <Awal/>
      <Exterior/>
      <Interior/>
      <Tentang/>
    </div>
  );
}

export default App;
