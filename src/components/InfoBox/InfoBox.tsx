export const InfoBox = ({infoText}:{infoText: string}) => {
    return (<p className="text-red-500 font-light text-5xl">
        {infoText}
    </p>);
}