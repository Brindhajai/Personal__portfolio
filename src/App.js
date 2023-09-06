import './App.css';
import Navbar from './Component/Navbar/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './Component/Home/Home'
import Projects from './Component/Projects/Projects'
import Contact from './Component/Contact/Contact'
import Education from './Component/Education/Education';
import Skills from './Component/Skills/Skills';

function App() {
  return (
    <div className="Portfolio grid">
      <div className='navbar'><Navbar/></div>
      <main> <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/skills" Component={Skills}></Route>
        <Route path="/education" Component={Education}></Route>
        <Route path="/project" Component={Projects}></Route>
        <Route path="/contact" Component={Contact}></Route>
       </Routes>
       </main>  
       {/* <main>

       <Home/>
       <Skills/>
       <Education/>
       <Projects/>
       <Contact/>
       </main> */}
           
     </div>
  );
}

export default App;
