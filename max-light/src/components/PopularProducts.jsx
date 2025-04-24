export default function Products({picture}) {
    return(
        <div id="popularProducts">
            <img src={picture} alt="Popular Product"  id="popularProductsimg"/>
            <p id="smallProdName">xenon H11</p>
            <p id="smallProdPrice">180$</p>

        </div>
    );
}