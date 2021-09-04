import './App.scss';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {
  return (
		<Router>
			<div className="App">
			<Switch>
				<Route path='/' />
			</Switch>
			<Navbar />
			</div>
		</Router>  
  );
}

export default App;
