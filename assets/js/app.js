import {buildCategoryNav,buildProductGallery,buildProductDetailView} from "./modules/view/viewCode.js";
import {getAllProducts,getProductCategories,getProductsByCategory,getProductById} from "./modules/model/dummyjasonLib.js";

let categoriesDisplayElement='categoriesNav';
let productDisplayElement='productDisplay';

initApp();

function initApp(){

    getProductCategories().then((categories)=>{
      
        buildCategoryNav(categories,categoriesDisplayElement);

    });


  
        getAllProducts (3,3).then((products)=>{
      
        buildProductGallery(products,productDisplayElement,'Featured products');

    });

    
}

// callBack functions

window._viewCallBacks = { categoriesCallBack,productCardCallback};

function categoriesCallBack(clickedCategory){

    getProductsByCategory(clickedCategory).then((products)=>{
      
        buildProductGallery(products,productDisplayElement,clickedCategory);

    });

}

function productCardCallback(productId){

console.log(productId);

getProductById(productId).then((product)=>{
      
    buildProductDetailView(product,productDisplayElement);

});

}