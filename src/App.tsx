import './App.css'
import {InfoBox} from "./components/InfoBox/InfoBox.tsx";
import hello from 'react-i-praksis-pakker-ds';

function App() {

    hello("Helene")

  return (
    <>
      <p className='text-mint-500 bg-secondary font-light text-5xl'>Velkommen til pakke- og designsystemworkshop!</p>
        <InfoBox infoText={"Her står det litt informasjon"}/>
    </>
  )
}

export default App
