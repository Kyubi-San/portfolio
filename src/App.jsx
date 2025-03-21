import Header from './components/Header.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Header/>
      <main className='main'>
        <AboutMe/>
        <Projects/>
        <Skills/>
      </main>
        <Footer/>
    </>
  )
}

export default App
