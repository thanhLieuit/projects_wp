import logo from './logo.svg';
import './App.scss';

import MyComponents from './Example/MyComponents';

/**
 * 
 *  class component / function components ( fuction / arrow)
 * 
 */
function App() {
  //const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with React.js (Hoi Dan IT)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponents />
      </header>
    </div>
  );
}

export default App;
