let product_array = []
const uploadProduct = () => {
    const productName = product_name.value;
    const amount = price.value;
    const quant = quantity.value;
    // console.log(productName, amount, quant);

    const product = {name: productName, price: amount, quantity: quant}
    // console.log(product)

    product_array.push(product)
    console.log(product_array);
    displayProduct();
}



const displayProduct = () => {
    for (let i = 0; i < product_array.length; i++) {
        productDisplay.innerHTML += `<tr>
                                        <td>${product_array[i].name}</td>
                                        <td>${product_array[i].price}</td>
                                        <td>${product_array[i].quantity}</td>
                                    </tr>`;
    }
    product_array = []
    product_name.value = ""
    price.value = ""
    quantity.value = ""
}