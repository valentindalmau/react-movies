import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from './components/NavbarHeader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './components/routes-config';
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <h1 className='p-4 text-white text-uppercase bg-header m-0'>Showqueis Cinema</h1>
          <NavbarHeader />
        </header>

        <Switch>
          {routes.map(route => <Route key={route.path} path={route.path} exact={route.exact}>
            <route.component />
          </Route>)}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
