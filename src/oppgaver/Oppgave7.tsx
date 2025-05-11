// Publiser infoboksen din som en pakke

// I arbeidet med workshopen fant vi ut at selv om tailwind er kult, er det ikke så egnet til et designsystem
// For å gjøre det enklere for oss selv lager vi en ny infoboks-komponent som vi styler med vanlig css

// Oppgave 7.1:
// Hvis du vil: bruk litt tid på å gjøre infoboks-komponenten enda finere enn den allerede er:)

import './Oppgave7.css'

const InfoBox = ({infoText}:{infoText: string}) => {
    return (
        <>
            <p className="infobox">
                {infoText}
            </p>
        </>
    );
}
export default InfoBox

// Oppgave 7.2 - publiser Infoboksen som en pakke til npm og få en nabogruppe til å ta den i bruk!
// Her kan dere godt gå sammen med en annen gruppe og samarbeide med dem

// Vi har jukset litt og satt opp prosjektet sånn at det skal kunne publiseres rett til npm.
// Her kan du lese litt om hvordan vi konfigurerte prosjektet for å gjøre det klar for publisering:
// https://medium.com/@kaljessy/publish-your-react-library-to-npm-using-vite-136dc81e368d

// ---  Publiser pakken til npm   ---
// Ta utgangspunkt i guiden over og guiden fra forrige oppgave, og se om du får til å publisere designsystemet med infoboksen til npm
// Et par ting du kan tenke på:
// * Husk å oppdatere navnet på pakken din
// * I forrige workshop brukte vi tsup til å bygge pakken, denne gangen bruker vi vite. Er det noen forskjeller?

// --- Ta en annen gruppe sin kompnent i bruk ---
// 1. Last ned pakken fra en av de andre gruppene fra npm med
//   npm install <pakkenavn>
// 2. Ta pakken i bruk, for eksempel I App.tsx med
//   import InfoBox from 'pakkenavn'
// 3. Ta i css-styling fra designsystemet ved å legge til
//    <link rel="stylesheet" href="node_modules/helenes-designsystem/dist/helenes-designsystem.css" />
// i index.html
