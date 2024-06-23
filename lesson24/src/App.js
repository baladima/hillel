import React from 'react';
import { Person } from "./components"
import { Input } from "./components"
import { Tag } from "./components"
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>SWAPI</h1>
        <Input />
        <Person />
      </div>
    )
  }
}

export default App;
