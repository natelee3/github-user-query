import './App.css';
import SearchForm from './components/SearchForm';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router >
       <SearchForm />
      </Router>
    </div>
  );
}

export default App;
