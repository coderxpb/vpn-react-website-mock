import './App.scss';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Pricing from './components/pages/Pricing'

function App() {
  return (
		<Router>
			<div className="App">

			<Navbar />
			<Switch>
				<Route path='/' exact component={Home}/>
				<Route path='/pricing' exact component={Pricing}/>
			</Switch>
			
			</div>
		</Router>  
  );
}

export default App;
