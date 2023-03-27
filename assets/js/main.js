document.addEventListener("DOMContentLoaded", function() {
    
    mainProducts();


    let addProductInCart = document.querySelectorAll('.addForCart')
    addProductInCart.forEach(e => {
        e.addEventListener('click', () => {   
                     
            let getid = e.id;
            var myid = getid.match(/\d+/)[0]; 
            let product =  getItemById(parseInt(myid));
            // product.forEach((item) => {
            //     console.log(item.id);
            // });
            newProductForCart = {
                "id": parseInt(myid),
                "title": product.title,
                "price": parseInt(product.price),
                "description": product.description,
                "category": product.category,
                "image": product.image,
                "count": parseInt(product.count)
            };
            
            addProductForCart(newProductForCart);
            // window.location.reload();
            alert("Done Add Product For Cart");
      });
    });
    
    let removeProducts = document.querySelectorAll('.deleteProduct');

    removeProducts.forEach(removeProduct => {
        removeProduct.addEventListener('click', () => {
              
        let getid = removeProduct.id;
        var myid = getid.match(/\d+/)[0]; 
        let product =  getItemById(parseInt(parseInt(myid)));

        deleteItem(parseInt(myid));
        window.location.reload();
      });
    });


    let filterName = document.getElementById("btnFilterName");
    filterName.addEventListener("click" , () => {
        let name = document.getElementById("nameValue").value;
        filtersItemByName(name);
    });

    let filterPrice = document.getElementById("btnFilterPrice");
    filterPrice.addEventListener("click" , () => {
        let price = document.getElementById("priceVal").value;
        filtersItemByPrice(price);
    });

    let updateProducts = document.querySelectorAll(".update");

    updateProducts.forEach(updateProduct => {
        updateProduct.addEventListener('click', () => {
            let getid = updateProduct.id;
            var myid = getid.match(/\d+/)[0];
            
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
            window.location.reload()

      });
    });
    // products = {
    //     "id": 1,
    //     "title": "test",
    //     "price": 100229.95,
    //     "description": "laptopشسي  with some details",
    //     "category": "computers",
    //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlj8luiqhZA-PyP4Chvs2mMp3LabcOLWjSp27RKti&s",
    //     "count": 1
    // }

    // addProductForCart(products);

    // updateItem(product); 
    // deleteAllItem();
    // deleteItem(2);
    // filtersItemByName("test");
    // filtersItemByPrice(100229.95);
    // increaseValue();
    // decreaseValue();
    // totalPrice(); 
    // filtersItemByName("asd");
    // totalCount();

});


let addProduct = document.getElementById("sendProduct");
addProduct.addEventListener("click" , () => {
    // Give Data From Form :
    let title = document.getElementById("productTitle").value;
    let price = document.getElementById("productPrice").value;
    let description = document.getElementById("productDescription").value;
    let category = document.getElementById("productCategory").value;
    let image = document.getElementById("productImage").value;
    let count = document.getElementById("productCount").value;
    console.log(image);
    if(title && title.trim() !== '' && price.trim() !== ''){

        let getId = localStorage.getItem("id");
        let id;
        if(getId){
            id = ++getId;
        }else{
            localStorage.setItem("id" , 1);
            id = 1;
        }

        let max = 100; // the maximum value
        let randomNumber = Math.floor(Math.random() * max); 

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

        window.location.reload()
    }
});




    // let products = document.getElementsByClassName('deleteProduct');
    // console.log(products);

    // products[0].addEventListener('click', event => {
    //     let parent = document.getElementsByClassName("card-footer");
    //     const productId = parent[0].getAttribute("data-id");
    //     console.log(productId);
    //     window.location.reload()
    // });