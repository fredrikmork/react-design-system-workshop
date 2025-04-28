import './App.css'
import {InfoBox} from "./oppgaver/Oppgave1.tsx";

function App() {

  return (
    <>
      <p className='text-mint-500 bg-secondary font-light text-5xl'>Velkommen til pakke- og designsystemworkshop!</p>
        <InfoBox infoText={"Her står det litt informasjon"}/>
    </>
  )
}

export default App
