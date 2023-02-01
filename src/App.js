import './App.css';
import './left_panel.js';
import './left_panel.css';
import './components/Contacts__box.js'

import Contacts from './components/Contacts.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className='App'>
    <Header></Header>
    <div className="drawer">
      <div className='drawer-body'>
      <ul>
        <li>Dashboard</li>
        <li>All teacher</li>
        <li>Events</li>
        <li>LogOut</li>
      </ul>
      </div>
        </div>
        <div className='menu'>
        </div>
        <Contacts></Contacts>
    </div>
  );
}

export default App;
