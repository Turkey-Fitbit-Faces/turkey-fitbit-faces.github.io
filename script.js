var input = document.getElementById("input")
var popupBox = document.getElementById("popup")

let data = [];

function close() {
  popupBox.style = "display:none;"
  document.getElementById("cover").style="display:none"
}


function popup(image, name, discription, gallaryLink, purchase) {
  // alert(image + " " + name + " " + date + " " + extendedDis + " " + gallaryLink + " " + purchase)
  popupBox.style = "display:block;"
  document.getElementById("cover").style="display:block"
  // if(free === false) {
    popupBox.innerHTML = `
                    <div class="info">
                      <img src="${image}" style="height:250px; width:250px;"/> <br>
                      <span class="header">${name}</span> <br>
                      <p class='discription'>${discription}</p> <br>
                      <a href="${gallaryLink}" class="popupButton">Gallery Link</a>
                      <a href="${purchase}" class="popupButton">Purchase</a> <br> <br> <br>
                      <a class="popupButton" id="closeTest" onclick='popupBox.style = "display:none;"; document.getElementById("cover").style="display:none";'>Close</a>
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


for (let i = 0; i < data.length; i++) {
  console.log(data[i])
  // if(data[i].free === false) {
    input.innerHTML += `
                      <div class="clocks">
                        <ul class="ulStyling">
                          <div onclick='popup("${data[i].image}", "${data[i].name}", "${data[i].description}", "${data[i].appstoreUrl}", "${data[i].shop}");'>

                          <li><img class="hideThese" src="${data[i].image}"/>
                          <li class="header">${data[i].name}</li>
                          <!--<li class="gray discription">${data[i].description}</li>
                          <li class="gray">Date Released: ${data[i].dateReleased}</li>
                          <li class="gray">Ratings: ${data[i].rating}</li>-->
                          <li class="gray price">Price: ${data[i].price} USD</li>
                          <!--<li class="gray">Trial Length: ${data[i].trialLength}</li>-->
                          </div>
                          <a href="${data[i].fitbitAppstoreUrl}"><li class="gallaryButton fix">Gallery Link</li></a>
                          <a href="${data[i].shop}"><li class="purchaseButton">Purchase</li></a>
                        </ul>
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
  .then(data => data = data.products);
