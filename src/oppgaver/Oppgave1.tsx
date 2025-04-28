// Oppgave 1
// Lag designsystemet ditt sin første Infoboks
// Infoboksen skal ta inn en tekst og en tittel og vise den frem på en fin måte

// Vi bruker tailwind til styling

export const InfoBox = ({infoText}:{infoText: string}) => {
    return (<p className="text-primary bg-secondary text-5xl">
        {infoText}
    </p>);
}