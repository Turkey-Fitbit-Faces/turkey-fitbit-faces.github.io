var input = document.getElementById("input")
var bundle = document.getElementById("bundles")
var popupBox = document.getElementById("popup")

let data = [];
let data2 = [];

let allImages = [];

function close() {
  popupBox.style = "display:none;"
  document.getElementById("cover").style = "display:none"
}


function popup(image, name, discription, gallaryLink, purchase) {
  // alert(image + " " + name + " " + date + " " + extendedDis + " " + gallaryLink + " " + purchase)
  popupBox.style = "display:block;"
  document.getElementById("cover").style = "display:block"
  // if(free === false) {
  popupBox.innerHTML = `
                    <div class="info">
                      <img src="${image}" style="height:250px; width:250px;"/> <br>
                      <span class="header">${name}</span> <br>
                      <p class='discription'>${discription}</p> <br>
                      <a href="${gallaryLink}" class="popupButton button">Gallery Link</a>
                      <a href="${purchase}" class="popupButton button">Purchase</a> 
                      <a class="popupButton button" id="closeTest" onclick='popupBox.style = "display:none;"; document.getElementById("cover").style="display:none";'>Close</a>
                    </div>
                    `
  // }
  // else{
  //   popupBox.innerHTML = `
  //                   <div class="info">
  //                     <img src="${image}" style="height:250px; width:250px;"/> <br>
  //                     <span class="header">${name}</span> <br>
  //                     <span class="gray">Date Released: ${date}</span>
  //                     <p>${extendedDis}</p>
  //                     <p>${extendedDis2}</p> <br>
  //                     <a href="${gallaryLink}" class="popupButton">Gallary Link</a>
  //                     <a href="${purchase}" class="popupButton">Free!</a> <br> <br> <br>
  //                     <a class="popupButton" id="closeTest" onclick='popupBox.style = "display:none;"; document.getElementById("cover").style="display:none";'>Close</a>
  //                   </div>
  //                   `
  // }

}

function test() {
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i])
    // if(data[i].free === false) {
    input.innerHTML += `
                    <div class="text">
                      <div class="clocks" onclick='popup("${data[i].image}", "${data[i].name}", "${data[i].description}", "${data[i].appstoreUrl}", "${data[i].shop}");'>
                          <div>

                          <div><img class="hideThese" src="${data[i].image}"/></div>
                          <div class="header">${data[i].name}</div>
                          <div class="gray price">Price: ${data[i].price} USD</div>
                          
                          </div>
                      </div>
                      <div class="gallaryButton button" onclick="window.location.href='${data[i].fitbitAppstoreUrl}'"><a href="${data[i].fitbitAppstoreUrl}">Gallery Link</a></div>
                      <div class="purchaseButton button" onclick="window.location.href='${data[i].shop}'"><a href="${data[i].shop}">Purchase</a></div>
                    </div>
                      `
    // }
    // else{
    //   input.innerHTML += `
    //                     <div class="clocks">
    //                     <ul class="ulStyling">
    //                       <div onclick='popup("${data[i].image}", "${data[i].name}", "${data[i].dateReleased}", "${data[i].extendedDis}", "${data[i].extendedDis2}", "${data[i].appstoreUrl}", "${data[i].shop}", ${data[i].free});'>
    //                         <li><img class="hideThese" src="${data[i].image}"/>
    //                         <li class="header">${data[i].name}</li>
    //                         <li class="gray">${data[i].description}</li>
    //                         <li class="gray">Date Released: ${data[i].dateReleased}</li>
    //                         <li class="gray">Ratings: ${data[i].rating}</li>
    //                         <li class="gray"><s>Price: 0.00</s></li>
    //                         <li class="gray"><s>Trial Length: 0</s></li>
    //                         </div>
    //                         <a href="${data[i].appstoreUrl}"><li class="gallaryButton fix">Gallary Link</li></a>
    //                         <a href="${data[i].shop}"><li class="purchaseButton"><s>Purchase</s> Free!</li></a>
    //                       </ul>
    //                     </div>
    //                   `
    // }

  }
}

function test2() {

  for (let i = 0; i < data2.length; i++) {
    var emagines = [] 


    // console.log(data2[i])
    for (var k = 0; k < data2[i].apps.length; k++) {
      console.log(data2[i].apps[k])
      for (var j = 0; j < allImages.length; j++) {
        if (data2[i].apps[k] === allImages[j].id) {
            emagines.push(allImages[j].image);
            console.log(allImages[j].image)
        }
      }
    }

    console.log(emagines)
    // if(data2[i].free === false) {
    bundle.innerHTML += `
                      <div class="text">
                        <div class="clocks" onclick='popup("${data2[i].image}", "${data2[i].name}", "${data2[i].description}", "${data2[i].appstoreUrl}", "${data2[i].shop}");'>
                            <div>
                            <div class="center">
                            <div class="images" id="images${i}">
                            </div>
                            </div>
                            <div class="header">${data2[i].name}</div>
                            <div class="gray price">Price: ${data2[i].price} USD</div>
                            
                            </div>
                        </div>
                        <div class="gallaryButton button" onclick="window.location.href='${data2[i].overview}'"><a href="${data2[i].overview}">Items Included</a></div>
                        <div class="purchaseButton button" onclick="window.location.href='${data2[i].shop}'"><a href="${data2[i].shop}">Purchase</a></div>
                      </div>
                        `

    var imagesDiv = document.getElementById("images" + i);
    
    for(var j = 0; j < emagines.length; j++) {
      if(emagines.length >= 8 && j >= 8) {
        imagesDiv.innerHTML += `<span class="filler">${emagines.length-8}+</span>`;
        break;
      }else if(emagines === 9 && j === 9) {
        imagesDiv.innerHTML += `<img class="hideThese" src="${emagines[j]}">`;
      }else{
        imagesDiv.innerHTML += `<img class="hideThese" src="${emagines[j]}">`;
      }
    }
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}

fetch('https://api.kiezelpay.com/api/merchant/productList?key=e926a0a52544531e487b4166f760fa56')
  .then(response => response.json())
  .then(dat => {
    data = dat.products;
    data2 = dat.bundles;
    dat.products.filter(x => { id = x.id; image = x.image; allImages.push({ id, image }) })
    test();
    test2();
  });
