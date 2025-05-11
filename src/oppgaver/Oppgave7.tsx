// Publiser infoboksen din som en pakke

// Bruk guiden fra forrige del av workshopen, og se om du får til å publisere infoboksen som en pakke!@

import './Oppgave7.css'

const InfoBox = ({infoText}:{infoText: string}) => {
    return (
        <>
            <p className="infobox">
                {infoText}
            </p>
            <p className="infobox">
                {infoText}
            </p>
        </>
    );
}

export default InfoBox