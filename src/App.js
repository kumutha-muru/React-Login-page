import { Route, BrowserRouter as Router } from 'react-router-dom'
import Dashboard from './components/dashboard';
import Login from './components/login';

function App() {
  return (

    <Router>
      <Route exact path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>

  );
}

export default App;
