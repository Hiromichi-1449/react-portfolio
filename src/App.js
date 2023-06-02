import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill';

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Layout />}>
        <Route index element = {<Home />} />
        <Route path = 'About' element = {<About />} />
        <Route path = 'Skill' element = {<Skill />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
