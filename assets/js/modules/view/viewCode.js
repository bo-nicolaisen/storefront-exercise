export function buildCategoryNav(myCategories, displayElement) {
  let myDisplayElement = document.getElementById(displayElement);
  myDisplayElement.innerHTML = "";

  myCategories.forEach((element) => {
    myDisplayElement.innerHTML += `<button onclick="window._viewCallBacks.categoriesCallBack('${element}')">${element}</button>`;
  });
}

export function buildProductGallery(myProducts, displayElementId,headline) {


  let displayElement = document.getElementById(displayElementId);
  
  let displayHtml=`<h2>${headline}</h2><section>`;
  myProducts.forEach((product) => {
    displayHtml += buildCard(product);
  });
  displayHtml +='</section>'


  displayElement.innerHTML = displayHtml;
}

function buildCard(myCardData) {

  return `<article class="productCard"><h3>${myCardData.title}</h3><img onclick="window._viewCallBacks.productCardCallback('${myCardData.id}')"  src="${myCardData.thumbnail}"<p>Price: ${myCardData.price}</p></article>`;
}


export function buildProductDetailView(productData,displayElementId){
    let displayElement = document.getElementById(displayElementId);

displayElement.innerHTML=`<article><h3>${productData.title}</h3><img  src="${productData.images[1]}"<p>Price: ${productData.price}</p><p>${productData.description}</p><button onclick="window._viewCallBacks.categoriesCallBack('${productData.category}')">back</button></article>`;

}

/*
brand: "Huawei"
category: "smartphones"
description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK."
discountPercentage:10.58
id: 5
images: ['https://i.dummyjson.com/data/products/5/1.jpg', 'https://i.dummyjson.com/data/products/5/2.jpg', 'https://i.dummyjson.com/data/products/5/3.jpg']
price: 499
rating: 4.09
stock: 32
thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg"
title: "Huawei P30" 
*/
