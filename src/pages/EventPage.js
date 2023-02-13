import { useState } from "react"
import {Header} from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import '../styles/event.css'
import { records } from "../enum/record"
import { NavLink } from "react-router-dom"



const EventPage = () =>{
    const [event, setEvent] = useState(records)
    const createEvent =()=>{
        setEvent([...event, {
            ID: "1",
            Title:"Empty",
            Type: "Social",
            Teacher: "vacancy",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }])
    }
    return(
    <section className="app">
    <Sidebar></Sidebar>
    <section className="main-section">
    <Header>
    </Header>
    <main>
    <div className="container">
    <h2>Event list</h2>
    <button className="new_event_button" onClick={createEvent}>New Event</button>
    </div>
    <div className="event_list">
        <input placeholder="Поиск" className="search_event"></input>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Type</th>
                <th>Teacher</th>
            </tr>
            </thead>
            {event.map(el => (
                <tr className="event_record">
                    <NavLink to={`/Event_info/${el.IDx}`}>
                    <th>{el.ID}</th>
                    <th>{el.Title}</th>
                    <th>{el.Type}</th>
                    <th>{el.Teacher}</th>
                    </NavLink>
                </tr>
            ))}
        </table>
    </div>
    </main>
    </section>
    </section>
    )
}
export {EventPage}