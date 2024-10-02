

const mobilemenu=document.getElementById('bar')
const navbar=document.getElementById('navbar')
const closed=document.getElementById('close')

if (mobilemenu||closed)
{
    mobilemenu.addEventListener("click",()=>{
        navbar.classList.add('active')
    })

    closed.addEventListener("click",()=>{
        navbar.classList.remove('active')
    })
}

let img = document.getElementsByClassName('dressbox');

// console.log(img);

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", () => {
    // Correct: Get all img tags inside the dressbox div
    const imgTag = img[i].getElementsByTagName('img');
    console.log(imgTag);
    
    // If you want to access the first image, you can use imgTag[0]
    if (imgTag.length > 0) {
      console.log(imgTag[0].src); // Example: log the image src
      document.getElementById("maindress").src=imgTag[0].src;
    }
  });
}



  addNewProduct()

  function addNewProduct() {

    let getdata=JSON.parse(localStorage.getItem("listofcart"))

    console.log(getdata);
    

    // 1. Select the parent container where you want to append the new <ul>
    const productContainer = document.getElementById("productContainer");
    
    getdata.forEach(getdata => {
      
    // 2. Create a new <ul> element
    const ul = document.createElement("ul");
    // ul.className = "table-header table-body"; // Set the class for styling

    // 3. Create new <li> elements and add them to the new <ul>
    const closeIcon = document.createElement("li");
    closeIcon.innerHTML = `<i onclick="childdelete(${getdata.id})" class="far fa-window-close"></i>`;

    const imgItem = document.createElement("li");
    imgItem.innerHTML = `<img src=${getdata.image} alt="" srcset="">`;

    const productName = document.createElement("li");
    productName.innerHTML = `<h5>${getdata.title}</h5>`;

    const valueItem = document.createElement("li");
    valueItem.innerHTML = `<h5 id="value">${getdata.price}</h5>`;

    const quantityInput = document.createElement("li");
    quantityInput.innerHTML = `<input type="number" name="quantity"  value=${1} onchange="valchange(${getdata.id},this.value)">`;

    const subtotalItem = document.createElement("li");
    subtotalItem.innerHTML = `<h5 id="subtotal">${getdata.price}</h5>`;

    ul.id=getdata.id

    // 4. Append each <li> to the new <ul>
    ul.appendChild(closeIcon);
    ul.appendChild(imgItem);
    ul.appendChild(productName);
    ul.appendChild(valueItem);
    ul.appendChild(quantityInput);
    ul.appendChild(subtotalItem);

    // 5. Append the new <ul> to the productContainer
    productContainer.appendChild(ul);
    });
}



let total_val_data=[]

function valchange(id,val)
{
  const parent=document.getElementById(id)
  price=parent.children[3].children[0].textContent
  const totprice=price*val;

  parent.children[5].children[0].textContent=totprice
  console.log(totprice);

  total_val_data=total_val_data.map(data=>{
    if(data.id===id)
    {
      data.price=totprice;
    }
    })
}


function childdelete(index1) {

  console.log(index1);
  
  let getoldval=JSON.parse(localStorage.getItem('listofcart'))

  getoldval=getoldval.filter(getoldval=>getoldval.id!==index1)

  let storedata=JSON.stringify(getoldval)
  localStorage.setItem('listofcart', storedata);

  // 1. Get the parent element
  const parent = document.getElementById("productContainer");

  console.log(parent);

  const child =document.getElementById(`${index1}`)

  console.log(child);
  
  
  parent.removeChild(child);

}


function totalval(){

  let getoldval=JSON.parse(localStorage.getItem('listofcart'))
  
  let coupon=document.getElementById("coupon").value
  let total_val_data = [];

  getoldval.map(data=>{
    total_val_data[total_val_data.length]={id:data.id,price:data.price}
  })

  let total=0;
  total_val_data.map(data=>{total+=Number(data.price);})

  if("offer5"===coupon)
    {
      let originalPrice = total;
      let discountPercentage = 5;
      let discountAmount = (originalPrice * discountPercentage) / 100;
      total = originalPrice - discountAmount;
    }
    else{
      
    }

    let cell = document.querySelector("#cart-checkout table tr:nth-child(1) td:nth-child(2)");
   
    cell.innerHTML=`$${total}`

    let totalcell = document.querySelector("#cart-checkout table tr:nth-child(3) td:nth-child(2)");
    
    totalcell.innerHTML=`$${total}`

    
}




