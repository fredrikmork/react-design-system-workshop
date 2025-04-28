export const InfoBox = ({infoText}:{infoText: string}) => {
    return (<p className="text-primary bg-secondary font-extrabold text-5xl">
        {infoText}
    </p>);
}