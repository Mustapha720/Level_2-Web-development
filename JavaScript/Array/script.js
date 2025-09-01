let product_array = localStorage['Products'] ? JSON.parse(localStorage['Products']) : [];
// console.log(product_array);

// localStorage['Products'] ? displayProduct() : productDisplay.innerHTML = "No product added yet"

displayProduct()


const uploadProduct = () => {
    const productName = product_name.value;
    const amount = price.value;
    const quant = quantity.value;
    // console.log(productName, amount, quant);

    const product = {name: productName, price: amount, quantity: quant}
    // console.log(product)

    product_array.push(product)
    console.log(product_array);
    localStorage.setItem('Products', JSON.stringify(product_array))
    displayProduct();
}



function displayProduct() {
    if (localStorage['Products'] != undefined) {
        productDisplay.innerHTML = `<tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                    </tr>`;
        for (let i = 0; i < product_array.length; i++) {
            productDisplay.innerHTML += `<tr>
                                            <td>${product_array[i].name}</td>
                                            <td>${product_array[i].price}</td>
                                            <td>${product_array[i].quantity}</td>
                                        </tr>`;
        }
        // product_array = []
        product_name.value = ""
        price.value = ""
        quantity.value = ""
    } else {
        productDisplay.innerHTML = "No product added yet"
    }
}