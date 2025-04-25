export default function BigProducts({picture, name, price, description}) {
    return(
        <div id="bigProducts">
            <div id="bigProductImage">
                <img src={picture} alt="Big Product" id="BPI"/>
            </div>

            <div id="bigProductText">
                <p id="bigProductName">{name}</p>
                <p id="bigProductPrice">{price}</p>
                <p id="bigProductDescription">{description}</p>
            </div>
        </div>
    );
}