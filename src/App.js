import logo from './logo.svg';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import { Outlet } from "react-router-dom";
import { Menu } from './composants/Menu';
import { PanierProvider } from './context/panierContext';

function App() {
  return (
    <div className="container">
      <PanierProvider>
        <Menu></Menu>
        <Outlet/>
      </PanierProvider>
    </div>
  );
}

export default App;
