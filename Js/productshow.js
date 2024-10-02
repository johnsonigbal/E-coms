

const parent=document.getElementById('shopdress')
console.log(parent);

const params = new URLSearchParams(window.location.search);
const pro = params.get('pro'); // "object"
const data = JSON.parse(decodeURIComponent(pro));
if (pro) {

    let imgElement = parent.querySelector("img"); // Access the child <img> element

    imgElement.src=data.image;

    let h3element = parent.querySelector("h3"); 

    h3element.innerText=data.title;

    let h2element = parent.querySelector("h2"); 

    h2element.innerText=data.price

    let pelement = parent.querySelector("p"); 

    pelement.innerText=data.description;

    let h4element = parent.querySelector("h4"); 

    h4element.innerText=data.category
}

function valAddcart()
{
    let getoldval=JSON.parse(localStorage.getItem('listofcart'))
    getoldval[getoldval.length]=data
    let storedata=JSON.stringify(getoldval)
    localStorage.setItem('listofcart', storedata);

    console.log(JSON.parse(localStorage.getItem("listofcart")));
    
}



