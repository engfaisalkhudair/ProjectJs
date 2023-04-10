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

function allPrdoucts() {
  let firstProduct = productsObjects;
  let productsObjLocal = JSON.parse(localStorage.getItem('myProducts'));
  let products;
  if (productsObjLocal && productsObjLocal.length > 0) {
    products = productsObjLocal;
  } else {
    localStorage.setItem('myProducts', JSON.stringify(firstProduct));
    products = firstProduct;
  }
  return products;
}

function createNode(type, className, clidern, textContent, id, src, attribute, typeinput, value , fun , valueFun) {
  let node = document.createElement(type);

  if (Array.isArray(className)) {
    className.forEach(element => {
      node.classList.add(element);
    });
  } else if (className.trim() !== '') {
    node.classList.add(className);
  }

  node.id = id;

  if (src != null) {
    node.src = src;
  }
  if (value != null) {
    node.value = value;
  }
  if (src != null) {
    node.src = src;
  }
  if (fun != null) {
    node.setAttribute("onClick", valueFun);
  }
  if (attribute != null) {
    attribute.forEach(element => {
      node.setAttribute(element.name, element.val);
    });
  }
  node.id = id;
  node.textContent = textContent;
  if (clidern != null) {
    clidern.forEach(element => {
      node.appendChild(element);
    });
  }

  return node;
}

function showAllProducts() {

  let products = allPrdoucts();

  products.forEach(product => {

    let productContainer = document.querySelector(".newData");

    // #---Content Body 
    let productImage = createNode("img", "", null, "",`image${product.id}`, product.image, null);
    let productTitle = createNode("h4", "title-card", null, product.title, `title-card${product.id}`, null);
    let productDescription = createNode("div", ["loc", "mt-2"], null, product.description, `productDescription${product.id}`, null);
    let productCategory = createNode("div", ["category", "mt-2"], null, `Category : ${product.category}`,`productCategory${product.id}`, null);
    let productPrice = createNode("div", "mt-3", null, `Price : ${product.price}`, `productPrice${product.id}`, null);
    let productCount = createNode("div", ["mt-3", "mb-3"], null, `Count : ${product.count}`,`productCount${product.id}`, null);
    let bodyContent = createNode("div", "card-body", [productImage, productTitle, productDescription, productCategory, productPrice, productCount], "", "", null);
    // #---Content Body 


    // #---Content Footer
    let btnRemove = createNode("button",
     ["btn", "btn-danger", "mt-2", "deleteProduct"], null,
      "remove", `btnRemove${product.id}`, null, null , null , null, "onClick" , `deleteProduct(${product.id})`);

    let btnUpdate = createNode("button", ["btn", "btn-success", "ms-2"],
      null, "Update", ``, null,
      [{
          "name": "data-bs-toggle",
          "val": "modal"
        },
        {
          "name": "data-bs-target",
          "val": `#updateProduct${product.id}`
        }
      ], null, null
    );


    let btnAddtoCart = createNode("button", ["btn", "btn-warning", "addForCart"],
     null, "Add To Cart", `btnAddtoCart${product.id}`,  null, null , null , null, "onClick" , `addProductForCart(${product.id})`);
    let footerContent = createNode("div", "card-footer", [btnAddtoCart, btnUpdate, btnRemove], ``, product.id, null);
    // #---Content Footer


    let productConetnt = createNode("div", "card", [bodyContent, footerContent], "", `parentProduct${product.id}`);
    let productElement = createNode("div", "col", [productConetnt], "", `parentProduct${product.id}`);
    productContainer.appendChild(productElement);



    let productTitlelabel = createNode("label", "col-form-label", null, "Product Title:", ``, null, null);
    let productTitleinput = createNode("input", "form-control", null, "Product Title:",
      `productTitleinput${product.id}`, null, null, "text", `${product.title}`);
    let productPricelabel = createNode("label", "col-form-label", null, "Product price:", ``, null, null);
    let productPriceinput = createNode("input", "form-control", null, "Product Title:",
      `productPriceinput${product.id}`, null, null, "text", `${product.price}`);
    let productDescriptionlabel = createNode("label", "col-form-label", null, "Product description:", ``, null, null);
    let productDescriptioninput = createNode("input", "form-control", null, "Product Title:",
      `productDescriptioninput${product.id}`, null, null, "text", `${product.description}`);
    let productCategorylabel = createNode("label", "col-form-label", null, "Product category:", ``, null, null);
    let productCategoryinput = createNode("input", "form-control", null, "Product Title:",
      `productCategoryinput${product.id}`, null, null, "text", `${product.category}`);
    let productImagelabel = createNode("label", "col-form-label", null, "Product image:", ``, null, null);
    let productImageinput = createNode("input", "form-control", null, "Product Title:",
      `productImageinput${product.id}`, null, null, "text", `${product.image}`);
    let productCountlabel = createNode("label", "col-form-label", null, "Product count:", ``, null, null);
    let productCountinput = createNode("input", "form-control", null, "Product count:",
      `productCountinput${product.id}`, null, null, "text", `${product.count}`);

    let arrayElementForParent = [productTitlelabel, productTitleinput,
      productPricelabel, productPriceinput,
      productDescriptionlabel, productDescriptioninput,
      productCategorylabel, productCategoryinput,
      productImagelabel, productImageinput,
      productCountlabel, productCountinput
    ];

    let parentIndex = createNode("div", "mb-3", arrayElementForParent, "", ``, null, null);
    let form = createNode("form", "", [parentIndex], "", ``, null, null);
    let modalbody = createNode("div", "modal-body", [form], "", ``, null, null);


    let btnclosefooter = createNode("button", ["btn", "btn", "btn-secondary", "ms-2"],
      null, "Close", `updateProduct${product.id}`, null,
      [{
          "name": "data-bs-toggle",
          "val": "modal"
        },
        {
          "name": "data-bs-toggle",
          "val": `Close`
        }
      ]
    );
    let updateProductmodal = createNode("button", ["btn", "btn-primary", "update"], null, "Update Product",
     `myupdateProduct${product.id}`, null, null , null , null, "onClick" , `updateProductMain(${product.id})`);
    let modalfooter = createNode("div", "modal-footer", [btnclosefooter, updateProductmodal], "", ``, null, null);

    let texttitle = createNode("h1", ["modal-title", "fs-5"], null, `Update Product ${product.title}`, ``, null, null);
    let btnclose = createNode("button", "btn-close", null, ``,
      `updateProduct${product.id}`, null, [{
        "name": "data-bs-dismiss",
        val: "modal"
      }, {
        "name": "aria-label",
        val: "Close"
      }]);
    let modalHeader = createNode("div", "modal-header", [texttitle, btnclose], "", ``, null, null);

    let modalContent = createNode("div", "modal-content", [modalHeader, modalbody, modalfooter], "", ``, null, null);


    let modalDialog = createNode("div", "modal-dialog", [modalContent], "", ``, null, null);

    let mainModal = createNode("div", ["modal", "fade", "myModal"],
      [modalDialog], "", `updateProduct${product.id}`, null, [{
        "name": "aria-hidden",
        "val": "true"
      }]);

    productContainer.appendChild(mainModal);
    productContainer.appendChild(productElement);

  });
}

showAllProducts();
// Done delete
let products = allPrdoucts();

function deleteProduct(id){

  let productFind = products.filter(obj => obj.id !== id);
  let index = productsObjects.filter(item => item.id !== id);
    productsObjects = index;
  // if (index !== -1) {
  //   cartItems.splice(index, 1);
  // }
  let element = document.getElementById(`parentProduct${id}`);
  element.remove();
  return localStorage.setItem("myProducts", JSON.stringify(productFind));
}


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

function getItemById(id) {
  let products = allPrdoucts();
  let productFind = products.find(obj => obj.id === id);
  return productFind;
}

function filtersItemByName(title) {
  let products = allPrdoucts();
  let filteredData = products.filter(obj => obj.title === title);
  console.log(filteredData.length)
  if(filteredData.length > 0){
    console.log("yes")

    let productContainer = document.querySelector(".newData");
    productContainer.innerHTML = "";
    filteredData.forEach(product => {

      let productContainer = document.querySelector(".newData");
  
      // #---Content Body 
      let productImage = createNode("img", "", null, "",`image${product.id}`, product.image, null);
      let productTitle = createNode("h4", "title-card", null, product.title, `title-card${product.id}`, null);
      let productDescription = createNode("div", ["loc", "mt-2"], null, product.description, `productDescription${product.id}`, null);
      let productCategory = createNode("div", ["category", "mt-2"], null, `Category : ${product.category}`,`productCategory${product.id}`, null);
      let productPrice = createNode("div", "mt-3", null, `Price : ${product.price}`, `productPrice${product.id}`, null);
      let productCount = createNode("div", ["mt-3", "mb-3"], null, `Count : ${product.count}`,`productCount${product.id}`, null);
      let bodyContent = createNode("div", "card-body", [productImage, productTitle, productDescription, productCategory, productPrice, productCount], "", "", null);
      // #---Content Body 
  
  
      // #---Content Footer
      let btnRemove = createNode("button",
       ["btn", "btn-danger", "mt-2", "deleteProduct"], null,
        "remove", `btnRemove${product.id}`, null, null , null , null, "onClick" , `deleteProduct(${product.id})`);
  
      let btnUpdate = createNode("button", ["btn", "btn-success", "ms-2"],
        null, "Update", ``, null,
        [{
            "name": "data-bs-toggle",
            "val": "modal"
          },
          {
            "name": "data-bs-target",
            "val": `#updateProduct${product.id}`
          }
        ], null, null
      );
  
  
      let btnAddtoCart = createNode("button", ["btn", "btn-warning", "addForCart"],
       null, "Add To Cart", `btnAddtoCart${product.id}`,  null, null , null , null, "onClick" , `addProductForCart(${product.id})`);
      let footerContent = createNode("div", "card-footer", [btnAddtoCart, btnUpdate, btnRemove], ``, product.id, null);
      // #---Content Footer
  
  
      let productConetnt = createNode("div", "card", [bodyContent, footerContent], "", `parentProduct${product.id}`);
      let productElement = createNode("div", "col", [productConetnt], "", `parentProduct${product.id}`);
      productContainer.appendChild(productElement);
  
  
  
      let productTitlelabel = createNode("label", "col-form-label", null, "Product Title:", ``, null, null);
      let productTitleinput = createNode("input", "form-control", null, "Product Title:",
        `productTitleinput${product.id}`, null, null, "text", `${product.title}`);
      let productPricelabel = createNode("label", "col-form-label", null, "Product price:", ``, null, null);
      let productPriceinput = createNode("input", "form-control", null, "Product Title:",
        `productPriceinput${product.id}`, null, null, "text", `${product.price}`);
      let productDescriptionlabel = createNode("label", "col-form-label", null, "Product description:", ``, null, null);
      let productDescriptioninput = createNode("input", "form-control", null, "Product Title:",
        `productDescriptioninput${product.id}`, null, null, "text", `${product.description}`);
      let productCategorylabel = createNode("label", "col-form-label", null, "Product category:", ``, null, null);
      let productCategoryinput = createNode("input", "form-control", null, "Product Title:",
        `productCategoryinput${product.id}`, null, null, "text", `${product.category}`);
      let productImagelabel = createNode("label", "col-form-label", null, "Product image:", ``, null, null);
      let productImageinput = createNode("input", "form-control", null, "Product Title:",
        `productImageinput${product.id}`, null, null, "text", `${product.image}`);
      let productCountlabel = createNode("label", "col-form-label", null, "Product count:", ``, null, null);
      let productCountinput = createNode("input", "form-control", null, "Product count:",
        `productCountinput${product.id}`, null, null, "text", `${product.count}`);
  
      let arrayElementForParent = [productTitlelabel, productTitleinput,
        productPricelabel, productPriceinput,
        productDescriptionlabel, productDescriptioninput,
        productCategorylabel, productCategoryinput,
        productImagelabel, productImageinput,
        productCountlabel, productCountinput
      ];
  
      let parentIndex = createNode("div", "mb-3", arrayElementForParent, "", ``, null, null);
      let form = createNode("form", "", [parentIndex], "", ``, null, null);
      let modalbody = createNode("div", "modal-body", [form], "", ``, null, null);
  
  
      let btnclosefooter = createNode("button", ["btn", "btn", "btn-secondary", "ms-2"],
        null, "Close", `updateProduct${product.id}`, null,
        [{
            "name": "data-bs-toggle",
            "val": "modal"
          },
          {
            "name": "data-bs-toggle",
            "val": `Close`
          }
        ]
      );
      let updateProductmodal = createNode("button", ["btn", "btn-primary", "update"], null, "Update Product",
       `myupdateProduct${product.id}`, null, null , null , null, "onClick" , `updateProductMain(${product.id})`);
      let modalfooter = createNode("div", "modal-footer", [btnclosefooter, updateProductmodal], "", ``, null, null);
  
      let texttitle = createNode("h1", ["modal-title", "fs-5"], null, `Update Product ${product.title}`, ``, null, null);
      let btnclose = createNode("button", "btn-close", null, ``,
        `updateProduct${product.id}`, null, [{
          "name": "data-bs-dismiss",
          val: "modal"
        }, {
          "name": "aria-label",
          val: "Close"
        }]);
      let modalHeader = createNode("div", "modal-header", [texttitle, btnclose], "", ``, null, null);
  
      let modalContent = createNode("div", "modal-content", [modalHeader, modalbody, modalfooter], "", ``, null, null);
  
  
      let modalDialog = createNode("div", "modal-dialog", [modalContent], "", ``, null, null);
  
      let mainModal = createNode("div", ["modal", "fade", "myModal"],
        [modalDialog], "", `updateProduct${product.id}`, null, [{
          "name": "aria-hidden",
          "val": "true"
        }]);
  
      productContainer.appendChild(mainModal);
      productContainer.appendChild(productElement);
  
    });
    return true;
  }else{
    return false;
  }
}
function filtersItemByPrice(price) {
  let products = allPrdoucts();
  let filteredData = products.filter(obj => obj.price == price);
  if(filteredData){
    let productContainer = document.querySelector(".newData");
    productContainer.innerHTML = "";
    filteredData.forEach(product => {
      let productContainer = document.querySelector(".newData");
      // #---Content Body 
      let productImage = createNode("img", "", null, "",`image${product.id}`, product.image, null);
      let productTitle = createNode("h4", "title-card", null, product.title, `title-card${product.id}`, null);
      let productDescription = createNode("div", ["loc", "mt-2"], null, product.description, `productDescription${product.id}`, null);
      let productCategory = createNode("div", ["category", "mt-2"], null, `Category : ${product.category}`,`productCategory${product.id}`, null);
      let productPrice = createNode("div", "mt-3", null, `Price : ${product.price}`, `productPrice${product.id}`, null);
      let productCount = createNode("div", ["mt-3", "mb-3"], null, `Count : ${product.count}`,`productCount${product.id}`, null);
      let bodyContent = createNode("div", "card-body", [productImage, productTitle, productDescription, productCategory, productPrice, productCount], "", "", null);
      // #---Content Body 
  
  
      // #---Content Footer
      let btnRemove = createNode("button",
       ["btn", "btn-danger", "mt-2", "deleteProduct"], null,
        "remove", `btnRemove${product.id}`, null, null , null , null, "onClick" , `deleteProduct(${product.id})`);
  
      let btnUpdate = createNode("button", ["btn", "btn-success", "ms-2"],
        null, "Update", ``, null,
        [{
            "name": "data-bs-toggle",
            "val": "modal"
          },
          {
            "name": "data-bs-target",
            "val": `#updateProduct${product.id}`
          }
        ], null, null
      );
  
  
      let btnAddtoCart = createNode("button", ["btn", "btn-warning", "addForCart"],
       null, "Add To Cart", `btnAddtoCart${product.id}`,  null, null , null , null, "onClick" , `addProductForCart(${product.id})`);
      let footerContent = createNode("div", "card-footer", [btnAddtoCart, btnUpdate, btnRemove], ``, product.id, null);
      // #---Content Footer
  
  
      let productConetnt = createNode("div", "card", [bodyContent, footerContent], "", `parentProduct${product.id}`);
      let productElement = createNode("div", "col", [productConetnt], "", `parentProduct${product.id}`);
      productContainer.appendChild(productElement);
  
  
  
      let productTitlelabel = createNode("label", "col-form-label", null, "Product Title:", ``, null, null);
      let productTitleinput = createNode("input", "form-control", null, "Product Title:",
        `productTitleinput${product.id}`, null, null, "text", `${product.title}`);
      let productPricelabel = createNode("label", "col-form-label", null, "Product price:", ``, null, null);
      let productPriceinput = createNode("input", "form-control", null, "Product Title:",
        `productPriceinput${product.id}`, null, null, "text", `${product.price}`);
      let productDescriptionlabel = createNode("label", "col-form-label", null, "Product description:", ``, null, null);
      let productDescriptioninput = createNode("input", "form-control", null, "Product Title:",
        `productDescriptioninput${product.id}`, null, null, "text", `${product.description}`);
      let productCategorylabel = createNode("label", "col-form-label", null, "Product category:", ``, null, null);
      let productCategoryinput = createNode("input", "form-control", null, "Product Title:",
        `productCategoryinput${product.id}`, null, null, "text", `${product.category}`);
      let productImagelabel = createNode("label", "col-form-label", null, "Product image:", ``, null, null);
      let productImageinput = createNode("input", "form-control", null, "Product Title:",
        `productImageinput${product.id}`, null, null, "text", `${product.image}`);
      let productCountlabel = createNode("label", "col-form-label", null, "Product count:", ``, null, null);
      let productCountinput = createNode("input", "form-control", null, "Product count:",
        `productCountinput${product.id}`, null, null, "text", `${product.count}`);
  
      let arrayElementForParent = [productTitlelabel, productTitleinput,
        productPricelabel, productPriceinput,
        productDescriptionlabel, productDescriptioninput,
        productCategorylabel, productCategoryinput,
        productImagelabel, productImageinput,
        productCountlabel, productCountinput
      ];
  
      let parentIndex = createNode("div", "mb-3", arrayElementForParent, "", ``, null, null);
      let form = createNode("form", "", [parentIndex], "", ``, null, null);
      let modalbody = createNode("div", "modal-body", [form], "", ``, null, null);
  
  
      let btnclosefooter = createNode("button", ["btn", "btn", "btn-secondary", "ms-2"],
        null, "Close", `updateProduct${product.id}`, null,
        [{
            "name": "data-bs-toggle",
            "val": "modal"
          },
          {
            "name": "data-bs-toggle",
            "val": `Close`
          }
        ]
      );
      let updateProductmodal = createNode("button", ["btn", "btn-primary", "update"], null, "Update Product",
       `myupdateProduct${product.id}`, null, null , null , null, "onClick" , `updateProductMain(${product.id})`);
      let modalfooter = createNode("div", "modal-footer", [btnclosefooter, updateProductmodal], "", ``, null, null);
  
      let texttitle = createNode("h1", ["modal-title", "fs-5"], null, `Update Product ${product.title}`, ``, null, null);
      let btnclose = createNode("button", "btn-close", null, ``,
        `updateProduct${product.id}`, null, [{
          "name": "data-bs-dismiss",
          val: "modal"
        }, {
          "name": "aria-label",
          val: "Close"
        }]);
      let modalHeader = createNode("div", "modal-header", [texttitle, btnclose], "", ``, null, null);
  
      let modalContent = createNode("div", "modal-content", [modalHeader, modalbody, modalfooter], "", ``, null, null);
  
  
      let modalDialog = createNode("div", "modal-dialog", [modalContent], "", ``, null, null);
  
      let mainModal = createNode("div", ["modal", "fade", "myModal"],
        [modalDialog], "", `updateProduct${product.id}`, null, [{
          "name": "aria-hidden",
          "val": "true"
        }]);
  
      productContainer.appendChild(mainModal);
      productContainer.appendChild(productElement);
  
    });
    return true;
  }else{
    return false;
  }
}
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

function addProductForCart(id) {
  let product  = getItemById(id);
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
  alert("Done Add For Cart");
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
    return productsCart.length;
  } else {
    return 0;
  }
}

const numberEle = document.getElementById('number');

function increaseValue() {
  let value = parseInt(numberEle.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  numberEle.value = value;
}

function decreaseValue() {
  let value = parseInt(numberEle.value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  numberEle.value = value;
}

function getIdFromString(dataId) {
  let getid = dataId;
  var myid = getid.match(/\d+/)[0];
  return parseInt(myid);
}

function updateDataProductView(product , id){
  let getHtmlData = document.getElementById(`parentProduct${id}`);
  let image = document.getElementById(`image${id}`);
  image.src = product.image;
  let title = document.getElementById(`title-card${id}`);
  title.textContent = product.title;
  let description = document.getElementById(`productDescription${id}`);
  description.textContent = product.description;
  let price = document.getElementById(`productCategory${id}`);
  price.textContent = `Category : ${product.category}`;
  let count = document.getElementById(`productCount${id}`);
  count.textContent = `Count : ${product.count}`;
}

function hideModels(id) {
  var modal = bootstrap.Modal.getInstance(`#${id}`);
  modal.hide();
}

function printNewItem(product){
  
  let productContainer = document.querySelector(".newData");

  // #---Content Body 
  let productImage = createNode("img", "", null, "",`image${product.id}`, product.image, null);
  let productTitle = createNode("h4", "title-card", null, product.title, `title-card${product.id}`, null);
  let productDescription = createNode("div", ["loc", "mt-2"], null, product.description, `productDescription${product.id}`, null);
  let productCategory = createNode("div", ["category", "mt-2"], null, `Category : ${product.category}`,`productCategory${product.id}`, null);
  let productPrice = createNode("div", "mt-3", null, `Price : ${product.price}`, `productPrice${product.id}`, null);
  let productCount = createNode("div", ["mt-3", "mb-3"], null, `Count : ${product.count}`,`productCount${product.id}`, null);
  let bodyContent = createNode("div", "card-body", [productImage, productTitle, productDescription, productCategory, productPrice, productCount], "", "", null);
  // #---Content Body 


  // #---Content Footer
  let btnRemove = createNode("button",
   ["btn", "btn-danger", "mt-2", "deleteProduct"], null,
    "remove", `btnRemove${product.id}`, null, null , null , null, "onClick" , `deleteProduct(${product.id})`);

  let btnUpdate = createNode("button", ["btn", "btn-success", "ms-2"],
    null, "Update", ``, null,
    [{
        "name": "data-bs-toggle",
        "val": "modal"
      },
      {
        "name": "data-bs-target",
        "val": `#updateProduct${product.id}`
      }
    ], null, null
  );


  let btnAddtoCart = createNode("button", ["btn", "btn-warning", "addForCart"],
   null, "Add To Cart", `btnAddtoCart${product.id}`,  null, null , null , null, "onClick" , `addProductForCart(${product.id})`);
  let footerContent = createNode("div", "card-footer", [btnAddtoCart, btnUpdate, btnRemove], ``, product.id, null);
  // #---Content Footer


  let productConetnt = createNode("div", "card", [bodyContent, footerContent], "", `parentProduct${product.id}`);
  let productElement = createNode("div", "col", [productConetnt], "", `parentProduct${product.id}`);
  productContainer.appendChild(productElement);



  let productTitlelabel = createNode("label", "col-form-label", null, "Product Title:", ``, null, null);
  let productTitleinput = createNode("input", "form-control", null, "Product Title:",
    `productTitleinput${product.id}`, null, null, "text", `${product.title}`);
  let productPricelabel = createNode("label", "col-form-label", null, "Product price:", ``, null, null);
  let productPriceinput = createNode("input", "form-control", null, "Product Title:",
    `productPriceinput${product.id}`, null, null, "text", `${product.price}`);
  let productDescriptionlabel = createNode("label", "col-form-label", null, "Product description:", ``, null, null);
  let productDescriptioninput = createNode("input", "form-control", null, "Product Title:",
    `productDescriptioninput${product.id}`, null, null, "text", `${product.description}`);
  let productCategorylabel = createNode("label", "col-form-label", null, "Product category:", ``, null, null);
  let productCategoryinput = createNode("input", "form-control", null, "Product Title:",
    `productCategoryinput${product.id}`, null, null, "text", `${product.category}`);
  let productImagelabel = createNode("label", "col-form-label", null, "Product image:", ``, null, null);
  let productImageinput = createNode("input", "form-control", null, "Product Title:",
    `productImageinput${product.id}`, null, null, "text", `${product.image}`);
  let productCountlabel = createNode("label", "col-form-label", null, "Product count:", ``, null, null);
  let productCountinput = createNode("input", "form-control", null, "Product count:",
    `productCountinput${product.id}`, null, null, "text", `${product.count}`);

  let arrayElementForParent = [productTitlelabel, productTitleinput,
    productPricelabel, productPriceinput,
    productDescriptionlabel, productDescriptioninput,
    productCategorylabel, productCategoryinput,
    productImagelabel, productImageinput,
    productCountlabel, productCountinput
  ];

  let parentIndex = createNode("div", "mb-3", arrayElementForParent, "", ``, null, null);
  let form = createNode("form", "", [parentIndex], "", ``, null, null);
  let modalbody = createNode("div", "modal-body", [form], "", ``, null, null);


  let btnclosefooter = createNode("button", ["btn", "btn", "btn-secondary", "ms-2"],
    null, "Close", `updateProduct${product.id}`, null,
    [{
        "name": "data-bs-toggle",
        "val": "modal"
      },
      {
        "name": "data-bs-toggle",
        "val": `Close`
      }
    ]
  );
  let updateProductmodal = createNode("button", ["btn", "btn-primary", "update"], null, "Update Product",
   `myupdateProduct${product.id}`, null, null , null , null, "onClick" , `updateProductMain(${product.id})`);
  let modalfooter = createNode("div", "modal-footer", [btnclosefooter, updateProductmodal], "", ``, null, null);

  let texttitle = createNode("h1", ["modal-title", "fs-5"], null, `Update Product ${product.title}`, ``, null, null);
  let btnclose = createNode("button", "btn-close", null, ``,
    `updateProduct${product.id}`, null, [{
      "name": "data-bs-dismiss",
      val: "modal"
    }, {
      "name": "aria-label",
      val: "Close"
    }]);
  let modalHeader = createNode("div", "modal-header", [texttitle, btnclose], "", ``, null, null);

  let modalContent = createNode("div", "modal-content", [modalHeader, modalbody, modalfooter], "", ``, null, null);


  let modalDialog = createNode("div", "modal-dialog", [modalContent], "", ``, null, null);

  let mainModal = createNode("div", ["modal", "fade", "myModal"],
    [modalDialog], "", `updateProduct${product.id}`, null, [{
      "name": "aria-hidden",
      "val": "true"
    }]);

  productContainer.appendChild(mainModal);
  productContainer.appendChild(productElement);

}
