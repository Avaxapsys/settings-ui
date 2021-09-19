//import logo from './logo.svg';
import './App.css';
import {Aplication} from './Aplications';
import {Setting} from './Settings';
import {BrowserRouter, Route, Switch,NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
        
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/aplications">
              Aplications
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/settings">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path='/aplications' component={Aplication}/>
        <Route path='/settings' component={Setting}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
