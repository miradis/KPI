import {Header} from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import '../styles/event.css'

const EventPage = () =>{
    return(
    <section className="app">
    <Sidebar></Sidebar>
    <section className="main-section">
    <Header>
    </Header>
    <main>
    <h3>Event list</h3>
    <div className="event_list"></div>
    </main>
    </section>
    </section>)
}
export {EventPage}