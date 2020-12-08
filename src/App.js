
import './App.css';
import Home from './components/Home'
import Layout from './components/common/Layout'
import {Route} from 'react-router-dom'
import StarShipPage from './components/StarShipPage';

function App() {
  return (
    <div className="App">
      <header >
        Star Wars
      </header>
      <div>
      <Layout>
        <Route exact path='/' component={Home}/>
        <Route path='/starship' render={({location}) => 
              <StarShipPage location={location}/>
            }/>
      </Layout>
      </div>
    </div>
  );
}

export default App;
