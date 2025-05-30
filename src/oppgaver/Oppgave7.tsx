// Publiser infoboksen din som en pakke

// Så langt i workshopen har vi brukt tailwind til styling, men for å gjøre det litt lettere for oss selv, går vi over
// til vanlig css når vi publiserer komponenten vår
// Vi tar utgangspunkt i en ny InfBox-komponent, og målet med Oppgave 7 er å publisere designsystemet med denne som
// en pakke og få en nabogruppe til å ta den i bruk

// Oppgave 7.1:
// Hvis du vil: bruk litt tid på å gjøre infoboks-komponenten under enda finere enn den allerede er:)
// Endre navnet på komponenten for å gjøre det enklere å skille mellom de ulike pakkene

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

// Nå: publiser Infoboksen som en pakke til npm og få en nabogruppe til å ta den i bruk!
// Her kan dere godt gå sammen med en annen gruppe og samarbeide med dem

// Vi har jukset litt og satt opp prosjektet sånn at det skal kunne publiseres rett til npm.
// Her kan du lese litt om hvordan vi konfigurerte prosjektet for å gjøre det klar for publisering:
// https://medium.com/@kaljessy/publish-your-react-library-to-npm-using-vite-136dc81e368d

// ---  Oppgave 7.2 - Publiser pakken til npm   ---
// Ta utgangspunkt i guiden over og guiden fra forrige oppgave, og se om du får til å publisere designsystemet
// med infoboksen til npm som i pakke-workshopen.
// Et par ting du likevel kan tenke på:
// * Husk å oppdatere navnet på pakken din:
//    * I package.json
//    * I vite.config.ts
// * I forrige workshop brukte vi tsc til å bygge pakken, denne gangen bruker vi også vite. Er det noen forskjeller?

// Kort oppsummert har vi gjort dette:
// * Opprettet en fil index.ts under source, og eksporter infoboksen fra den
// * Konfigurert bygging av pakken i vite.config.ts:
//    * Lagt til src/index.ts som entry path for pakken
//    * Lagt til pakkenavnet som navnet på biblioteket som bygges
//    * En del annet snacks som du kan finne mer om her:
//       https://medium.com/@kaljessy/publish-your-react-library-to-npm-using-vite-136dc81e368d
// * Oppdatert package.json med blant annet:
//    * Navn på pakken
//    * Om pakken skal være public eller private
//    * Beskrivelse av pakken
//    * Hvor i pakken koden finnes (/dist)
//    * Et par andre ting
// * Oppdatert tsconfig.json for å fortelle for å kompilere typescriptkode til javascript:
//    * Lagt til "include": ["src", "./index.ts"]

// --- Oppgave 7.2 - Ta en annen gruppe sin kompnent i bruk ---
// 1. Last ned pakken fra en av de andre gruppene fra npm med
//   npm install <pakkenavn>
// 2. Ta pakken i bruk, for eksempel I App.tsx med
//   import InfoBox from 'pakkenavn'
// 3. Ta i css-styling fra designsystemet ved å legge til
//    <link rel="stylesheet" href="node_modules/helenes-designsystem/dist/helenes-designsystem.css" />
// i index.html
