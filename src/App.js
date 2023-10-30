import './App.css';
import Navbar from './components/navbar';
import{BrowserRouter as Router,Switch,Route}from 'react-router-dom'
import Home from './components/pages/home'
import services from './components/pages/services';
import test from './components/pages/AITester';

function App() {
  return (
<>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services'  component={services} />
        <Route path='/test'  component={test} />
      </Switch>
    </Router>
    </>
  );
}

export default App;