import { useState } from 'react'
import './app.scss'
import Topbar from './components/topbar/Topbar'
import Menu from './components/menu/Menu'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Contact from './components/contact/Contact'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={"app " + (menuOpen && "active")}>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
