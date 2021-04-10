import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <h1>React Sidebar</h1>
      </Switch>
    </Router>
  );
}

export default App;
