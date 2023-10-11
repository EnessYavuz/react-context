import './App.css';

import Home from './component/Home';
import SideProvider from './context/SideContext';

function App() {


  return (
    <div className="App">
      <SideProvider>
        <Home/>
      </SideProvider>
    </div>
    
  );
}

export default App;
