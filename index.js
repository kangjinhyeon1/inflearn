axios.get('https://0df27f83-8083-4e98-83a5-911b8ac85b03.mock.pstmn.io/grab')
.then(function(result){
  console.log('통신 결과 : ', result);
  const products = result.data.product;

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
}).catch(function(error){
  console.error('error 발생 : ', error);
});
