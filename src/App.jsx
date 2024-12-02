import './styles/App.css'
import Resume from './components/Resume.jsx'
import Sidebar from './components/Sidebar.jsx'

function App() {

  return (
    <>
      <div className='header'>
        <h1 className='title'>Get your dream job using <p>CVCrafter</p> to build an outstanding resume</h1>
        <p>Fill out the forms below and your CV will be dynamically updated!</p>
      </div>
      <div className='container'>
        <div className='sidebar'>
          <div className='dropdown'>Personal Information</div>
          <div className='dropdown'>Education</div>
          <div className='dropdown'>Work Experience</div>
          <div className='dropdown'>Skills</div>
        </div>
        <div className='body'>
            <div className='resume'>Resume</div>
        </div>
      </div>
    </>
  )
}

export default App
