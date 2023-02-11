import './App.css';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/Main_page';
import { TeacherPage } from './pages/TeacherPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { EventPage } from './pages/EventPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<MainPage />}></ Route>
      <Route path="/Teachers" element = {<TeacherPage />}></ Route>
      <Route path="/Events" element = {<EventPage />}></ Route>
      <Route path="*" element = {<NotFoundPage />}></ Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
