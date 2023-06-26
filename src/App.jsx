import './App.css'
import Cookie from './components/Cookie'
import data from './data/phrases.json'



function App() {

{ /* document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${background})`; */}

  return (
    <>
      <Cookie 
      data={data} />
    </>
  )
}

export default App
