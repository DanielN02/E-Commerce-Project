const productsContainer = document.getElementById("products"); //selects elements with id "produtcs"
fetch("json/collectibles.json") //fetches the json file.
  .then((response) => response.json()) //converts response into a json file
  .then((data) => {
    //taking json data into product container html
    data.forEach((product) => {
      productsContainer.innerHTML += `
      <div class="card">
     <h1>${product.item}</h1>  
     <div class="card-image">
      <img src=${product.photo} />    
     </div>  
      <h2>${product.price}</h2>
      <p>${product.description}</p>
      <button type= "button" class ="product-btn">
      Purchase</button>
      </div>
     `;
    });
  });
("");
