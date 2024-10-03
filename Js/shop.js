
initalval()
async function initalval()
{
      
   let val=   await fetch('../Api/cloth.json').then(res=>res.json()).catch(res=>{return "fetching data problem"})
   getapidata(val)
}

function  getapidata(api)
{
  // console.log(api,"console");
  const productcontainer=document.getElementById("procontainer")
  // console.log(productcontainer);

  api.forEach(eachobj => {
  const productDiv = document.createElement('div');
  productDiv.classList.add('pro');
  productDiv.addEventListener('click',()=>{
    console.log(eachobj)  
    
   let stringfydata= encodeURIComponent(JSON.stringify(eachobj))
   
    window.location.href=`productshow.html?pro=${stringfydata}`;
    })
  productDiv.innerHTML=`
                <img src=${eachobj.image} alt="">
                <div class="des">
                    <span>${eachobj.category}</span>
                    <h5>${eachobj.title}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>${eachobj.price}</h4>
                </div>
                <a href="#"> <i  class="fas fa-shopping-cart cart "></i></a>
            `
            if (productcontainer) {
              productcontainer.appendChild(productDiv);
          } else {
              console.error("Parent element not found");
          }

        });



}

const mobilemenu=document.getElementById('bar')
const navbar=document.getElementById('navbar')
const closed=document.getElementById('close')

// const cartmenu=document.getElementById('cartmenu')

// cartmenu.addEventListener("click",()=>{window.location.href='/E-coms/Html/cart.html'})


if (mobilemenu||closed)
{
    mobilemenu.addEventListener("click",()=>{
        navbar.classList.add('active')
    })

    closed.addEventListener("click",()=>{
        navbar.classList.remove('active')
    })
}
