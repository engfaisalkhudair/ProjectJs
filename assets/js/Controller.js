let productsObjects = [{
    "id": 1,
    "title": "fasail",
    "price": 1009.95,
    "description": "laptop with some details",
    "category": "computers",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlj8luiqhZA-PyP4Chvs2mMp3LabcOLWjSp27RKti&s",
    "count": 20
  },
  {
    "id": 2,
    "title": "test",
    "price": 1009.95,
    "description": "laptop with some details",
    "category": "computers",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlj8luiqhZA-PyP4Chvs2mMp3LabcOLWjSp27RKti&s",
    "count": 20
  },
  {
    "id": 3,
    "title": "Laptop",
    "price": 1009.95,
    "description": "laptop with some details",
    "category": "computers",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlj8luiqhZA-PyP4Chvs2mMp3LabcOLWjSp27RKti&s",
    "count": 20
  },
  {
    "id": 4,
    "title": "Laptop",
    "price": 1009.95,
    "description": "laptop with some details",
    "category": "computers",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlj8luiqhZA-PyP4Chvs2mMp3LabcOLWjSp27RKti&s",
    "count": 20
  },
  {
    "id": 5,
    "title": "Laptop",
    "price": 1009.95,
    "description": "laptop with some details",
    "category": "computers",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlj8luiqhZA-PyP4Chvs2mMp3LabcOLWjSp27RKti&s",
    "count": 20
  }
]

function mergedArrayTwo() {
    let firstProduct = productsObjects;
    let productsObjLocal = JSON.parse(localStorage.getItem('myProducts'));
    let products;
    if(productsObjLocal && productsObjLocal.length > 0){
      products = productsObjLocal;
      console.log("done");
    }else{
      localStorage.setItem('myProducts', JSON.stringify(firstProduct));
      products = firstProduct;
      console.log("else");
    }
    return products;

}
// -----------------Main Products----------------------------
function mainProducts() {

  let products = mergedArrayTwo();
  console.log(products);
  products.forEach(product => {
    let productContainer = document.querySelector(".newData");

    let productElement = document.createElement("div")
    productElement.classList.add("col");
    productElement.id = `parentProduct${product.id}`;

    let productConetnt = document.createElement("div")
    productConetnt.classList.add("card");


    let productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.id = "image";
    productConetnt.appendChild(productImage);

    let bodyContent = document.createElement("div")
    bodyContent.classList.add("card-body");

    // #---Content Body 
    let productTitle = document.createElement("h4")
    productTitle.classList.add("title-card");
    productTitle.id = "title-card";
    productTitle.textContent = product.title;
    bodyContent.appendChild(productTitle);

    let productDescription = document.createElement("div")
    productDescription.classList.add("loc", "mt-2");
    productDescription.id = "productDescription";
    productDescription.textContent = product.description;
    bodyContent.appendChild(productDescription);

    let productCategory = document.createElement("div")
    productCategory.classList.add("category", "mt-2");
    productCategory.id = "productCategory";
    productCategory.textContent = `Category : ${product.category}`;
    bodyContent.appendChild(productCategory);

    let productPrice = document.createElement("div")
    productPrice.classList.add("mt-3");
    productPrice.id = "productPrice";
    productPrice.textContent = `Price : ${product.price}`;
    bodyContent.appendChild(productPrice);

    let productCount = document.createElement("div")
    productCount.classList.add("mt-3", "mb-3");
    productCount.id = "productCount";
    productCount.textContent = `Count : ${product.count}`;
    bodyContent.appendChild(productCount);
    // #---Content Body 

    // #---Content Footer

    let footerContent = document.createElement("div")
    footerContent.classList.add("card-footer");
    footerContent.dataset.id = product.id;

    let btnAddtoCart = document.createElement("button")
    btnAddtoCart.classList.add("btn", "btn-warning", "addForCart");
    btnAddtoCart.textContent = "Add To Cart";
    btnAddtoCart.id = `btnAddtoCart${product.id}`;
    footerContent.appendChild(btnAddtoCart);

    let btnUpdate = document.createElement("button")
    btnUpdate.classList.add("btn", "btn-success", "ms-2");
    btnUpdate.textContent = "Update";
    btnUpdate.setAttribute("data-bs-toggle", "modal");
    btnUpdate.setAttribute("data-bs-target", `#updateProduct${product.id}`);
    footerContent.appendChild(btnUpdate);

    let btnRemove = document.createElement("button")
    btnRemove.classList.add("btn", "btn-danger", "mt-2", "deleteProduct");
    btnRemove.id = `btnRemove${product.id}`;
    btnRemove.textContent = "remove";
    footerContent.appendChild(btnRemove);

    // #---Content Footer
    productConetnt.appendChild(bodyContent)
    productConetnt.appendChild(footerContent)


    // Make Modal For Update Data Product: 

    let mainModal = document.createElement("div")
    mainModal.classList.add("modal", "fade");
    mainModal.id = `updateProduct${product.id}`;
    mainModal.setAttribute("aria-hidden", "true");

    let modalDialog = document.createElement("div")
    modalDialog.classList.add("modal-dialog");

    let modalContent = document.createElement("div")
    modalContent.classList.add("modal-content");

    let modalHeader = document.createElement("div")
    modalHeader.classList.add("modal-header");

    let texttitle = document.createElement("h1");
    texttitle.classList.add("modal-title", "fs-5");
    texttitle.textContent = `Update Product ${product.title}`;
    modalHeader.appendChild(texttitle);

    let btnclose = document.createElement("button")
    btnclose.classList.add("btn-close");
    btnclose.id = `updateProduct${product.id}`;
    btnclose.setAttribute("data-bs-dismiss", "modal");
    btnclose.setAttribute("aria-label", "Close");
    modalHeader.appendChild(btnclose);

    modalContent.appendChild(modalHeader);

    let modalbody = document.createElement("div")
    modalbody.classList.add("modal-body");

    let form = document.createElement("form");

    let parentIndex = document.createElement("div")
    parentIndex.classList.add("mb-3");

    let productTitlelabel = document.createElement("label")
    productTitlelabel.classList.add("col-form-label");
    productTitlelabel.textContent = "Product Title:";
    parentIndex.appendChild(productTitlelabel);

    let productTitleinput = document.createElement("input")
    productTitleinput.classList.add("form-control");
    productTitleinput.type = "text";
    productTitleinput.value = `${product.title}`;
    productTitleinput.id = `productTitleinput${product.id}`;
    parentIndex.appendChild(productTitleinput);

    let productPricelabel = document.createElement("label")
    productPricelabel.classList.add("col-form-label");
    productPricelabel.textContent = "Product price:";
    parentIndex.appendChild(productPricelabel);

    let productPriceinput = document.createElement("input")
    productPriceinput.classList.add("form-control");
    productPriceinput.type = "text";
    productPriceinput.value = `${product.price}`;
    productPriceinput.id = `productPriceinput${product.id}`;
    parentIndex.appendChild(productPriceinput);

    let productDescriptionlabel = document.createElement("label")
    productDescriptionlabel.classList.add("col-form-label");
    productDescriptionlabel.textContent = "Product description:";
    parentIndex.appendChild(productDescriptionlabel);

    let productDescriptioninput = document.createElement("input")
    productDescriptioninput.classList.add("form-control");
    productDescriptioninput.type = "text";
    productDescriptioninput.value = `${product.description}`;
    productDescriptioninput.id = `productDescriptioninput${product.id}`;
    parentIndex.appendChild(productDescriptioninput);

    let productCategorylabel = document.createElement("label")
    productCategorylabel.classList.add("col-form-label");
    productCategorylabel.textContent = "Product category:";
    parentIndex.appendChild(productCategorylabel);

    let productCategoryinput = document.createElement("input")
    productCategoryinput.classList.add("form-control");
    productCategoryinput.type = "text";
    productCategoryinput.value = `${product.category}`;
    productCategoryinput.id = `productCategoryinput${product.id}`;

    parentIndex.appendChild(productCategoryinput);

    let productImagelabel = document.createElement("label")
    productImagelabel.classList.add("col-form-label");
    productImagelabel.textContent = "Product image:";
    parentIndex.appendChild(productImagelabel);

    let productImageinput = document.createElement("input")
    productImageinput.classList.add("form-control");
    productImageinput.type = "text";
    productImageinput.value = `${product.image}`;
    productImageinput.id = `productImageinput${product.id}`;

    parentIndex.appendChild(productImageinput);

    let productCountlabel = document.createElement("label")
    productCountlabel.classList.add("col-form-label");
    productCountlabel.textContent = "Product count:";
    parentIndex.appendChild(productCountlabel);

    let productCountinput = document.createElement("input")
    productCountinput.classList.add("form-control");
    productCountinput.type = "text";
    productCountinput.value = `${product.count}`;
    productCountinput.id = `productCountinput${product.id}`;
    parentIndex.appendChild(productCountinput);


    form.appendChild(parentIndex);
    modalbody.appendChild(form);

    let modalfooter = document.createElement("div")
    modalfooter.classList.add("modal-footer");

    let btnclosefooter = document.createElement("button");
    btnclosefooter.classList.add("btn", "btn-secondary");
    btnclosefooter.id = `updateProduct${product.id}`;
    btnclosefooter.textContent = "Close";
    btnclosefooter.setAttribute("data-bs-dismiss", "modal");
    btnclosefooter.setAttribute("aria-label", "Close");
    modalfooter.appendChild(btnclosefooter);

    let updateProductmodal = document.createElement("button");
    updateProductmodal.classList.add("btn", "btn-primary", "update");
    updateProductmodal.textContent = "Update Product";
    updateProductmodal.id = `myupdateProduct${product.id}`;
    modalfooter.appendChild(updateProductmodal);

    modalContent.appendChild(modalbody);
    modalContent.appendChild(modalfooter);

    modalDialog.appendChild(modalContent);
    mainModal.appendChild(modalDialog);

    // let productImage = document.createElement("img");
    // productImage.src = product.image;
    // productImage.id = "image";
    // productConetnt.appendChild(productImage);

    // let bodyContent =  document.createElement("div")
    // bodyContent.classList.add("card-body");


    productElement.appendChild(productConetnt);
    productElement.appendChild(mainModal);
    productContainer.appendChild(productElement);

  });

};

function addNewItem(product) {
  let products = JSON.parse(localStorage.getItem("myProducts")) || [];
  const newProduct = {
    "id": product.id,
    "title": product.title,
    "price": product.price,
    "description": product.description,
    "category": product.category,
    "image": product.image,
    "count": product.count
  };
  products.push(newProduct);
  return localStorage.setItem("myProducts", JSON.stringify(products));
}


function deleteAllItem() {
  localStorage.removeItem("myProducts");
}

function updateItem(product) {
  let products = mergedArrayTwo();

  let id = parseInt(product.id);
  let productFind = products.find(obj => obj.id == id);

  if (productFind) {
    productFind.title = product.title;
    productFind.price = product.price;
    productFind.description = product.description;
    productFind.category = product.category;
    productFind.image = product.image;
    productFind.count = product.count;
    localStorage.setItem("myProducts", JSON.stringify(products));
  } else {
    alert("Dont Find ");
  }
}

function deleteItem(id) {

  let products = mergedArrayTwo();
  let productFind = products.filter(obj => obj.id !== id);
  // productsObjects.splice(productFind, ++productFind);
  return localStorage.setItem("myProducts", JSON.stringify(productFind));
}

function getItemById(id) {
  let products = mergedArrayTwo();
  let productFind = products.find(obj => obj.id === id);
  return productFind;
}

function filtersItemByName(title) {
  let products = mergedArrayTwo();
  let filteredData = products.filter(obj => obj.title === title);
  let productContainer = document.querySelector(".newData");
  productContainer.innerHTML = "";
  filteredData.forEach(product => {

    let productElement = document.createElement("div")
    productElement.classList.add("col");

    let productConetnt = document.createElement("div")
    productConetnt.classList.add("card");


    let productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.id = "image";
    productConetnt.appendChild(productImage);

    let bodyContent = document.createElement("div")
    bodyContent.classList.add("card-body");

    // #---Content Body 
    let productTitle = document.createElement("h4")
    productTitle.classList.add("title-card");
    productTitle.id = "title-card";
    productTitle.textContent = product.title;
    bodyContent.appendChild(productTitle);

    let productDescription = document.createElement("div")
    productDescription.classList.add("loc", "mt-2");
    productDescription.id = "productDescription";
    productDescription.textContent = product.description;
    bodyContent.appendChild(productDescription);

    let productCategory = document.createElement("div")
    productCategory.classList.add("category", "mt-2");
    productCategory.id = "productCategory";
    productCategory.textContent = `Category : ${product.category}`;
    bodyContent.appendChild(productCategory);

    let productPrice = document.createElement("div")
    productPrice.classList.add("mt-3");
    productPrice.id = "productPrice";
    productPrice.textContent = `Price : ${product.price}`;
    bodyContent.appendChild(productPrice);

    let productCount = document.createElement("div")
    productCount.classList.add("mt-3", "mb-3");
    productCount.id = "productCount";
    productCount.textContent = `Count : ${product.count}`;
    bodyContent.appendChild(productCount);
    // #---Content Body 

    // #---Content Footer

    let footerContent = document.createElement("div")
    footerContent.classList.add("card-footer");
    footerContent.dataset.id = product.id;

    let btnAddtoCart = document.createElement("button")
    btnAddtoCart.classList.add("btn", "btn-warning", "addForCart");
    btnAddtoCart.textContent = "Add To Cart";
    footerContent.appendChild(btnAddtoCart);

    let btnUpdate = document.createElement("button")
    btnUpdate.classList.add("btn", "btn-success", "ms-2");
    btnUpdate.textContent = "Update";
    footerContent.appendChild(btnUpdate);

    let btnRemove = document.createElement("button")
    btnRemove.classList.add("btn", "btn-danger", "mt-2", "deleteProduct");
    console.log(1);
    btnRemove.textContent = "remove";
    footerContent.appendChild(btnRemove);

    // #---Content Footer
    productConetnt.appendChild(bodyContent)
    productConetnt.appendChild(footerContent)

    productElement.appendChild(productConetnt);

    productContainer.appendChild(productElement);

  });

  // return filteredData;

}

function filtersItemByPrice(price) {
  let products = mergedArrayTwo();
  let filteredData = products.filter(obj => obj.price == price);

  let productContainer = document.querySelector(".newData");
  productContainer.innerHTML = "";
  filteredData.forEach(product => {

    let productElement = document.createElement("div")
    productElement.classList.add("col");

    let productConetnt = document.createElement("div")
    productConetnt.classList.add("card");


    let productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.id = "image";
    productConetnt.appendChild(productImage);

    let bodyContent = document.createElement("div")
    bodyContent.classList.add("card-body");

    // #---Content Body 
    let productTitle = document.createElement("h4")
    productTitle.classList.add("title-card");
    productTitle.id = "title-card";
    productTitle.textContent = product.title;
    bodyContent.appendChild(productTitle);

    let productDescription = document.createElement("div")
    productDescription.classList.add("loc", "mt-2");
    productDescription.id = "productDescription";
    productDescription.textContent = product.description;
    bodyContent.appendChild(productDescription);

    let productCategory = document.createElement("div")
    productCategory.classList.add("category", "mt-2");
    productCategory.id = "productCategory";
    productCategory.textContent = `Category : ${product.category}`;
    bodyContent.appendChild(productCategory);

    let productPrice = document.createElement("div")
    productPrice.classList.add("mt-3");
    productPrice.id = "productPrice";
    productPrice.textContent = `Price : ${product.price}`;
    bodyContent.appendChild(productPrice);

    let productCount = document.createElement("div")
    productCount.classList.add("mt-3", "mb-3");
    productCount.id = "productCount";
    productCount.textContent = `Count : ${product.count}`;
    bodyContent.appendChild(productCount);
    // #---Content Body 

    // #---Content Footer

    let footerContent = document.createElement("div")
    footerContent.classList.add("card-footer");
    footerContent.dataset.id = product.id;

    let btnAddtoCart = document.createElement("button")
    btnAddtoCart.classList.add("btn", "btn-warning", "addForCart");
    btnAddtoCart.textContent = "Add To Cart";
    footerContent.appendChild(btnAddtoCart);

    let btnUpdate = document.createElement("button")
    btnUpdate.classList.add("btn", "btn-success", "ms-2");
    btnUpdate.textContent = "Update";
    footerContent.appendChild(btnUpdate);

    let btnRemove = document.createElement("button")
    btnRemove.classList.add("btn", "btn-danger", "mt-2", "deleteProduct");
    console.log(1);
    btnRemove.textContent = "remove";
    footerContent.appendChild(btnRemove);

    // #---Content Footer
    productConetnt.appendChild(bodyContent)
    productConetnt.appendChild(footerContent)

    productElement.appendChild(productConetnt);

    productContainer.appendChild(productElement);

  });
  return filteredData;
}
// ---------------------------------------------

// ---------------Cart Products-----------------
function cartProducts() {
  let cartproducts;
  let cartproductsObjLocal = localStorage.getItem('productsCart');
  if (cartproductsObjLocal) {
    cartproducts = JSON.parse(cartproductsObjLocal);
    cartproducts.forEach(product => {
      let productContainer = document.querySelector(".productsCart");

      let productElement = document.createElement("div")
      productElement.classList.add("col");
      productElement.id = `parentProduct${product.id}`;

      let productConetnt = document.createElement("div")
      productConetnt.classList.add("card");


      let productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.id = "image";
      productConetnt.appendChild(productImage);

      let bodyContent = document.createElement("div")
      bodyContent.classList.add("card-body");

      // #---Content Body 
      let productTitle = document.createElement("h4")
      productTitle.classList.add("title-card");
      productTitle.id = "title-card";
      productTitle.textContent = product.title;
      bodyContent.appendChild(productTitle);

      let productDescription = document.createElement("div")
      productDescription.classList.add("loc", "mt-2");
      productTitle.id = "productDescription";
      productDescription.textContent = product.description;
      bodyContent.appendChild(productDescription);

      let productCategory = document.createElement("div")
      productCategory.classList.add("category", "mt-2");
      productTitle.id = "productCategory";
      productCategory.textContent = `Category : ${product.category}`;
      bodyContent.appendChild(productCategory);

      let productPrice = document.createElement("div")
      productPrice.classList.add("mt-3");
      productTitle.id = "productPrice";
      productPrice.textContent = `Price : ${product.price}`;
      bodyContent.appendChild(productPrice);

      let productCount = document.createElement("div")
      productCount.classList.add("mt-3", "mb-3");
      productTitle.id = "productCount";
      productCount.textContent = `Count : ${product.count}`;
      bodyContent.appendChild(productCount);
      // #---Content Body 

      // #---Content Footer

      let footerContent = document.createElement("div")
      footerContent.classList.add("card-footer");


      let btnRemove = document.createElement("button")
      btnRemove.classList.add("btn", "btn-danger", "mt-2", "deleteProduct");
      btnRemove.textContent = "remove";      
      btnRemove.id = `parentProducts${product.id}`;


      footerContent.appendChild(btnRemove);

      // #---Content Footer
      productConetnt.appendChild(bodyContent)
      productConetnt.appendChild(footerContent)

      productElement.appendChild(productConetnt);

      productContainer.appendChild(productElement);

    });
    console.log("Dont Have Products Cart");
    return true;
  } else {
    console.log("Dont Have Products Cart");
  }
  return false;
};

function addProductForCart(product) {
  let productsCart = JSON.parse(localStorage.getItem("productsCart")) || [];
  const newProductCart = {
    "id": product.id,
    "title": product.title,
    "price": product.price,
    "description": product.description,
    "category": product.category,
    "image": product.image,
    "count": product.count
  };
  productsCart.push(newProductCart);
  localStorage.setItem("productsCart", JSON.stringify(productsCart));
}

function deleteItemCart(id) {
  let productsCart = JSON.parse(localStorage.getItem("productsCart"));
  let productFindCart = productsCart.filter(obj => obj.id !== id);
  return localStorage.setItem("productsCart", JSON.stringify(productFindCart));
}

function totalPrice() {

  let productsCart = JSON.parse(localStorage.getItem("productsCart"));
  if (productsCart) {
    const totalprice = productsCart.reduce((acc, productCart) => {
      return acc + productCart.price;
    }, 0);
    return totalprice;
  } else {
    return 0;
  }
}

function totalCount() {
  let productsCart = JSON.parse(localStorage.getItem("productsCart"));

  if (productsCart) {
    // const totalcount = productsCart.reduce((acc, productCart) => {
    //   return acc + productCart.count;
    // }, 0);
    // return totalcount;
    return productsCart.length;
  } else {
    return 0;
  }
}

// ---------------------------------------------

// ---------------------------------------------
function increaseValue() {
  let value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  let value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}
// ---------------------------------------------
