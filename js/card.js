arrayProduct = [];
function displayProduct(arrayProduct){
 // console.log(arrayProduct.length);
let totalValue = 0
  const totalProducts = document.getElementById("total-products"); //Table id
  totalProducts.innerText = arrayProduct.length;

  const cartContainer = document.getElementById("products-cart");

  cartContainer.textContent = ''; //data clear 

  for(let i = 0; i<arrayProduct.length; i++){
   // console.log(arrayProduct[i].productName);
   totalValue =totalValue+arrayProduct[i].productPriect;
   console.log(totalValue);
    const tr = document.createElement("tr");//Table create 
    tr.innerHTML = `
    <th>${i+1}</th>
    <td>${arrayProduct[i].productName}</td>
    <td>${arrayProduct[i].productPriect}</td>
    `;

     cartContainer.appendChild(tr);
  }

const tr = document.createElement("tr");
        tr.innerHTML = `
        <td></td>
        <td>Total Result</td>
        <td>${totalValue}</td>
        `

        cartContainer.appendChild(tr);
        }

function addToCart(element){
     //console.log(element.parentNode.children);
    // console.log(element.parentNode.children[0].innerText);
    // console.log(element.parentNode.children[1].children[0].innerText);
     const productName = element.parentNode.children[0].innerText;
     const productPrice = element.parentNode.children[1].children[0].innerText;
    // console.log("product Name is :",productName ,"productPrice is :",productPrice);


    const ObjecProduct = {
        productName : productName,
        productPriect:parseInt(productPrice)
    }
     //console.log(ObjecProduct);
    
     arrayProduct.push(ObjecProduct);
    
     displayProduct(arrayProduct);
}