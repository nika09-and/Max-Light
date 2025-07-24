export default function contactsText({icon, header, description, information}) {
    return (
        <div id='info'>
            <img src={icon} alt={header} id='infoIcon' />
            <p id="infoHeader">{header}</p>
            <p id="infoDescription">{description}</p>
            <p id="infoInformation">{information}</p>
        </div>
    );
}