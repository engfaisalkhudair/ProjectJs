document.addEventListener("DOMContentLoaded", function() {
    cartProducts();
    let totalcount = totalCount();
    let totalprice = totalPrice();
    console.log(totalcount);
    let printTotalCount = document.getElementById("totalCount");
    printTotalCount.innerHTML = totalcount;
    let printTotalPrice = document.getElementById("totalPrice");
    printTotalPrice.innerHTML = totalprice;

    let removeProducts = document.querySelectorAll('.deleteProduct');

    removeProducts.forEach(removeProduct => {
        removeProduct.addEventListener('click', () => {
        let getid = removeProduct.id;
        console.log(getid);

        var myid = getid.match(/\d+/)[0];
        let product =  getItemById(parseInt(parseInt(myid)));
        deleteItemCart(parseInt(myid));
        window.location.reload();
      });
    });

});
