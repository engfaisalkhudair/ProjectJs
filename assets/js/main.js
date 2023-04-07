document.addEventListener("DOMContentLoaded", function () {

    showAllProducts();

    // Add New Product

    let addProductInCart = document.querySelectorAll('.addForCart')
    addProductInCart.forEach(e => {
        e.addEventListener('click', () => {
            let myid = getIdFromString(e.id);
            let product = getItemById(myid);
            newProductForCart = {
                "id": myid,
                "title": product.title,
                "price": parseInt(product.price),
                "description": product.description,
                "category": product.category,
                "image": product.image,
                "count": parseInt(product.count)
            };

            addProductForCart(newProductForCart);
            alert("Done Add Product For Cart");
            
        });
    });

    let removeProducts = document.querySelectorAll('.deleteProduct');

    removeProducts.forEach(removeProduct => {
        removeProduct.addEventListener('click', () => {
            let myid = getIdFromString(removeProduct.id);
            deleteItem(myid);
            let element = document.getElementById(`parentProduct${myid}`);
            element.remove();
        });
    });


    let filterName = document.getElementById("btnFilterName");
    filterName.addEventListener("click", () => {
        let name = document.getElementById("nameValue").value;
        filtersItemByName(name);
        hideModel();
    });

    let filterPrice = document.getElementById("btnFilterPrice");
    filterPrice.addEventListener("click", () => {
        let price = document.getElementById("priceVal").value;
        filtersItemByPrice(price);
        hideModel();
    });

    let updateProducts = document.querySelectorAll(".update");
    updateProducts.forEach(updateProduct => {
        updateProduct.addEventListener('click', () => {
            let myid = getIdFromString(updateProduct.id);

            let title = document.getElementById("productTitleinput" + myid).value;
            let price = document.getElementById("productPriceinput" + myid).value;
            let description = document.getElementById("productDescriptioninput" + myid).value;
            let category = document.getElementById("productCategoryinput" + myid).value;
            let image = document.getElementById("productImageinput" + myid).value;
            let count = document.getElementById("productCountinput" + myid).value;
            productupdate = {
                "id": myid,
                "title": title,
                "price": parseInt(price),
                "description": description,
                "category": category,
                "image": image,
                "count": parseInt(count)
            };
            updateItem(productupdate);

            updateDataProductView(productupdate , myid);
        });
    });
});


let addProduct = document.getElementById("sendProduct");
addProduct.addEventListener("click", () => {
    // Give Data From Form :
    let title = document.getElementById("productTitle").value;
    let price = document.getElementById("productPrice").value;
    let description = document.getElementById("productDescription").value;
    let category = document.getElementById("productCategory").value;
    let image = document.getElementById("productImage").value;
    let count = document.getElementById("productCount").value;
    console.log(image);
    if (title && title.trim() !== '' && price.trim() !== '') {
        let getId = localStorage.getItem("id");
        if (getId) {
            let id = ++getId;
        } else {
            localStorage.setItem("id", 1);
            let id = 1;
        }

        let randomNumber = Math.floor(Math.random() * 100);

        let myProduct = {
            "id": randomNumber,
            "title": title,
            "price": parseInt(price),
            "description": description,
            "category": category,
            "image": image,
            "count": parseInt(count)
        };
        addNewItem(myProduct);
        printNewItem(myProduct);
        hideModel("addProduct");
    }
});
