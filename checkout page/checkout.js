
var cartArr = JSON.parse(localStorage.getItem("cartitems")) || [];
document.querySelector("#itemno").innerText = cartArr.length;

function displaycart(cartArr) {
  document.getElementById("tbody").innerHTML = "";

  cartArr.map(function (elem, index) {

    var row = document.createElement("tr")

    var col1 = document.createElement("td")
    col1.setAttribute("id", "namecol")
    var p1 = document.createElement("p")
    p1.innerText = elem.brand.toUpperCase()
    var p2 = document.createElement("p")
    p2.innerText = elem.name + "-" + elem.kg
    p2.setAttribute("id", "veg")

    var col2 = document.createElement("td")
    col2.setAttribute("id", "Rs")
    col2.innerText = "Rs" + elem.mrp


    var col3 = document.createElement("td")
    var btn1 = document.createElement("button")
    var img = document.createElement("img")
    img.setAttribute("src", "outline_add_black_24dp.png")
    btn1.append(img)


    btn1.addEventListener("click", function () {
      inc(index)
    })

    var btn2 = document.createElement("button")
    btn2.addEventListener("click", function () {
      dec(index)
    })


    var img = document.createElement("img")
    img.setAttribute("src", "outline_remove_black_24dp.png")
    btn2.append(img)


    var qtyinput = document.createElement("input")
    qtyinput.setAttribute("id", "qtyinput")
    qtyinput.setAttribute("value", elem.quantity)

    var div = document.createElement("div")
    div.setAttribute("id", "quant")
    div.append(btn1, qtyinput, btn2)

    var col4 = document.createElement("td")
    col4.innerText = "Rs" + "" + elem.mrp * elem.quantity

    var col5 = document.createElement("td")
    col5.innerText = "X"
    col5.setAttribute("id", "remove")
    col5.addEventListener("click", function () {
      removeitem(index)
    })



    col3.append(div)
    col1.append(p1, p2)
    row.append(col1, col2, col3, col4, col5)
    document.querySelector("#tbody").append(row)


  })
}

total();
function total() {
  var total = cartArr.reduce(function (acc, elem) {
    return acc + (elem.mrp * elem.quantity)

  }, 0)
  document.getElementById("total").textContent = total;
  document.getElementById("subtotal").textContent = total;
}

displaycart(cartArr)
total();

function inc(index) {
  cartArr[index].quantity++;
  localStorage.setItem("cartitems", JSON.stringify(cartArr));
  displaycart(cartArr)
  total();
}

function dec(index) {

  cartArr[index].quantity--;
  localStorage.setItem("cartitems", JSON.stringify(cartArr));
  displaycart(cartArr)
  total();
}




document.querySelector("#empty").addEventListener("click", clearall)

function clearall() {
  cartArr = []
  document.querySelector("#subtotal").innerText = "";
  document.querySelector("#total").innerText = "";
  localStorage.setItem("cartitems", JSON.stringify(cartArr));
  document.querySelector("#itemno").innerText = cartArr.length;
  document.querySelector("#cartnum").innerText = cartArr.length;
  displaycart(cartArr)
}

document.querySelector("#cartnum").innerText = cartArr.length;

document.querySelector("#checkout").addEventListener("click", checkout)
function checkout() {
  window.location.href = "../payment/address.html"
}

function removeitem(index) {
  cartArr.splice(index, index + 1)
  localStorage.setItem("cartitems", JSON.stringify(cartArr));
  document.querySelector("#itemno").innerText = cartArr.length;
  document.querySelector("#cartnum").innerText = cartArr.length;
  total();
  displaycart(cartArr)

}

document.querySelector("#continue").addEventListener("click", continueshop)
function continueshop() {
  window.location.href = "/unwieldy-sponge-3549/checkout page/checkout.html"
}
