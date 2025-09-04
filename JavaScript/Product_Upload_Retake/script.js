window.addEventListener('keydown', (event) => {
    console.log(event);
    if (event.code === "Enter") {
        uploadProduct()
    }
})

let editIndex;

let allProducts = []

let retrievedArray = localStorage['temuProducts'] ? JSON.parse(localStorage['temuProducts']) : []
allProducts = retrievedArray
// OR
// if (localStorage.temuProducts) {
//     let retrievedArray = JSON.parse(localStorage.getItem('temuProduct'))
//     allProducts = retrievedArray
// } else {
//     allProducts = []
// }


displayProducts()
// OR
// if (allProducts.length >= 1) {
    // displayProducts()
// }


const uploadProduct = () => {
    if(product_name.value.trim() === '' || price === '' || quantity === '') {
        alert("Please fill in all inputs")
    } else {
        const productName = product_name.value.trim()
        const productPrice = price.value.trim()
        const productQuantity = quantity.value.trim()

        const Obj = {
            productName,
            productPrice,
            productQuantity
        }
        console.log(Obj);

        allProducts.push(Obj);
        console.log(allProducts);

        // localStorage.setItem('temuProducts', JSON.stringify(allProducts))
        localStorage.temuProducts =  JSON.stringify(allProducts)

        displayProducts()

        product_name.value = ''
        price.value = ''
        quantity.value = ''
    }
}


const deleteProduct = (index) => {
    const check = confirm("Are you sure you want to delete?");
    // console.log(check);
    if (check === true) {
        // console.log(index);
        allProducts.splice(index, 1)
        localStorage.setItem('temuProducts', JSON.stringify(allProducts));
        displayProducts()
    } else {
        displayProducts()
    }
}


const editProduct = (index) => {
    console.log(index);
    // console.log(allProducts[index].productName)
    editIndex = index;

    p_name.value = allProducts[index].productName
    p_price.value = allProducts[index].productPrice
    p_quantity.value = allProducts[index].productQuantity
}


const edit = () => {
    if(p_name.value.trim() === '' || p_price === '' || p_quantity === '') {
        alert("Please fill in all inputs")
    } else {
        const productName2 = p_name.value.trim()
        const productPrice2 = p_price.value.trim()
        const productQuantity2 = p_quantity.value.trim()

        const Obj2 = {
            productName: productName2,
            productPrice: productPrice2,
            productQuantity: productQuantity2
        }
        console.log(Obj2);

        allProducts.splice(editIndex, 1, Obj2)

        localStorage.setItem('temuProducts', JSON.stringify(allProducts))
        // localStorage.temuProducts =  JSON.stringify(allProducts)

        displayProducts()

        // p_name.value = ''
        // p_price.value = ''
        // p_quantity.value = ''
    }
}


function displayProducts() {
    if (localStorage['temuProducts'] != undefined) {
        display.innerHTML = `<tr>
                                <th>S/N</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>`
        for (let i = 0; i < allProducts.length; i++) {
            display.innerHTML += `<tr>
                                    <td>${i + 1}</td>
                                    <td>${allProducts[i].productName}</td>
                                    <td>${allProducts[i].productPrice}</td>
                                    <td>${allProducts[i].productQuantity}</td>
                                    <td><button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button>&nbsp;<button class="btn btn-warning" onclick="editProduct(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button></td>
                                </tr>`
        }
    } else {
        display.innerHTML = `<h1 class="text-center  my-5">No product added yet</h1>`
    }
}