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

				<div className="footer-filler">

				</div>
				<footer className="basic-footer">
					<p className="me">Designed and developed by <a href="http://github.com/coderxpb">Pankaj Bora</a>.</p>
					<div className="footer-license-container">
						<p>Vectors under <a href="hhttps://undraw.co/license">license</a> from <a href="http://undraw.co">Undraw</a>.</p>
						<p>Icons under <a href="https://boxicons.com/usage#license">license</a> from <a href="http://boxicons.com">BoxIcons</a>.</p>
					</div>
				</footer>
			</div>
		</Router>  
  );
}

export default App;
