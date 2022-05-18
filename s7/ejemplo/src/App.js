import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state = { offline: !navigator.onLine }
  }

  setOfflineStatus = () => {
    this.setState({ offline: !navigator.onLine })
  }

  componentDidMount(){
    window.addEventListener('online', this.setOfflineStatus)
    window.addEventListener('offline', this.setOfflineStatus)
  }

  componentWillUnmount(){
    window.removeEventListener('online', this.setOfflineStatus)
    window.removeEventListener('offline', this.setOfflineStatus)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            { !this.state.offline ? 'Conectado' : 'Desconectado' }
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
