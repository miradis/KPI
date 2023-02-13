import { useParams } from "react-router-dom"
import {Header} from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import '../styles/event_info.css'
import { records } from "../enum/record"

const Event_info =() =>{
    let {ID} =useParams();
    const recordId = records.findIndex(el => el.ID === ID);
    const el = records[recordId];

    return(
    <section className="app">
    <Sidebar>
        
    </Sidebar>
    <section className="main-section">
    <Header>
    </Header>
    <main>
        <div className="info">
            <h1>{el.Title}</h1>
            <p>{el.Description}</p>
            <p>{el.Title}</p>
            <p>{el.Type}</p>
        </div>
        <div className="description">
            <p>description</p>
        </div>
    </main>
    </section>
    </section>);
}
export {Event_info}