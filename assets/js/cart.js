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
        let parent = document.getElementsByClassName("card-footer");
        const productId = parent[0].getAttribute("data-id");
        deleteItemCart(2);
        window.location.reload();
      });
    });
});
