export const InfoBox = ({infoText}:{infoText: string}) => {
    return (<p className="text-primary bg-secondary text-5xl">
        {infoText}
    </p>);
}