axios.get('https://0df27f83-8083-4e98-83a5-911b8ac85b03.mock.pstmn.io/grab')
.then(function(result){
  console.log('통신 결과 : ', result);
}).catch(function(error){
  console.error('error 발생 : ', error);
});
var products = [
  {
    name: "농구공",
    price: 10000,
    seller: "조던",
    imgUrl: "images/products/basketball1.jpg",
  },
  {
    name: "축구공",
    price: 50000,
    seller: "메시",
    imgUrl: "images/products/soccerball1.jpg",
  },
  {
    name: "키보드",
    price: 10000,
    seller: "그랩",
    imgUrl: "images/products/keyboard1.jpg",
  },
];
let productsHtml = "";
for (var i = 0; i < products.length; i++) {
  let product = products[i];
  productsHtml =
    productsHtml +
    '<div class="product-card">' +
    "<div>" +
    '<img class="product-img" src="' +
    product.imgUrl +
    '">' +
    "</div>" +
    '<div class="product-contents">' +
    '<span class="product-name">' +
    product.name +
    "</span>" +
    '<span class="product-price">' +
    product.price +
    "원" +
    "</span>" +
    '<div class="product-seller">' +
    '<img class="product-avatar" src="./images/icons/avatar.png">' +
    "<span>" +
    product.seller +
    "</span>" +
    "</div>" +
    "</div>" +
    "</div>";
}

document.querySelector("#product-list").innerHTML = productsHtml;
