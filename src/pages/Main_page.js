import '../styles/main_page.css';
import '../left_panel.js';
import '../left_panel.css';
import '../components/Contacts__box.js'
import { Sidebar } from '../components/Sidebar';
import Contacts from '../components/Contacts.js';
import {Header} from '../components/Header.js';

const MainPage = () =>{
    return (
      
  <section className='App'>
    <Sidebar></Sidebar>
    <section className='main-section'>
        <Header></Header>
        <main>
        <Contacts></Contacts>
        </main>
        </section>
  </section>
    )
}
export {MainPage}