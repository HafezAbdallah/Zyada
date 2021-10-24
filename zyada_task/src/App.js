import CountriesList from './Pages/CountriesList';
import './App.css';
import Header from './Pages/Header';
import CountryDetails from './Pages/CountryDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
    <Header/>
    <div className="App-Container">
       <Router>
         <Switch>
            <Route exact path="/">
               <CountriesList/>

            </Route>
            <Route exact path="/details">
                <CountryDetails/>
            </Route>
        </Switch>
      </Router>

    </div>
    </>
  );
}

export default App;
