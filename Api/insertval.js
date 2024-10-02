initalval()

export  async function initalval(text)
{
      
   let val=   await fetch('../Api/cloth.json').then(res=>res.json()).catch(res=>{return "fetching data problem"})
   getapidata(val)
}


const productcontainer=document.getElementById("procontainer")

console.log(productcontainer);

function getapidata(api)
{
  console.log(api,"console");
  let i=0;

  api.forEach(eachobj => {
  i++;


  const productDiv = document.createElement('div');
  productDiv.classList.add('pro');

  productDiv.addEventListener('click',()=>{
    
    console.log(eachobj)
    productdisplay(eachobj)
    
    window.location.href='productshow.html'
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
            productcontainer.appendChild(productDiv);
        });



}