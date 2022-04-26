import React from 'react';
import './App.css';
import GeneratedPassword from './components/GeneratedPassword';
import PasswordLength from './components/PasswordLength';
import PasswordSettings from './components/PasswordSettings';

const App = () => (
  <section className="main">
    <div className="App">
      <h1>Password generator</h1>
      <GeneratedPassword />
      <section>
        <PasswordLength />
        <PasswordSettings />
      </section>
    </div>
  </section>
);

export default App;
