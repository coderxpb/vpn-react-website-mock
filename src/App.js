import './App.scss';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/pages/Home'

function App() {
  return (
		<Router>
			<div className="App">
			<Navbar />
			<Switch>
				<Route path='/' component={Home}/>
			</Switch>
			
			</div>
		</Router>  
  );
}

export default App;
