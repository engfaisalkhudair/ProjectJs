
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
        hideModels("addProduct");
    }
});

function updateProductMain(id){
    let title = document.getElementById("productTitleinput" + id).value;
    let price = document.getElementById("productPriceinput" + id).value;
    let description = document.getElementById("productDescriptioninput" + id).value;
    let category = document.getElementById("productCategoryinput" + id).value;
    let image = document.getElementById("productImageinput" + id).value;
    let count = document.getElementById("productCountinput" + id).value;
    productupdate = {
      "id": id,
      "title": title,
      "price": parseInt(price),
      "description": description,
      "category": category,
      "image": image,
      "count": parseInt(count)
    };
    updateItem(productupdate);
    updateDataProductView(productupdate , id);
    hideModels(`updateProduct${id}`);
}

let filterName = document.getElementById("btnFilterName");
filterName.addEventListener("click", () => {
    let name = document.getElementById("nameValue").value;
    console.log(name);
    if(filtersItemByName(name)){
        filtersItemByName(name);
    }else{
        let productContainer = document.querySelector(".newData");
        productContainer.innerHTML = "Dont Found This product";
    }
    hideModels("filterName");
});

let filterPrice = document.getElementById("btnFilterPrice");
filterPrice.addEventListener("click", () => {
    let price = document.getElementById("priceVal").value;
    if(filtersItemByPrice(price)){
        filtersItemByPrice(price);
    }else{
        let productContainer = document.querySelector(".newData");
        productContainer.innerHTML = "Dont Found This product";
    }
    hideModels("filterPrice");
});



