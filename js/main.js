/*  //  Grab the input element and add event listener to it
 let filterInput = document.getElementById("filterInput");
 filterInput.addEventListener("keyup", filterName);

 // event function for the input element
 function filterName() {
   // Grab the value of the input element and convert it to uppercase
   filterValue = filterInput.value.toUpperCase();

   // Grab the ul
   let ul = document.getElementById("names");
   // Grab all the collection items
   let li = ul.querySelectorAll("li.collection-item");
   // loop through the li collection items grabbed
   for (let i = 0; i < li.length; i++) {
     //
     let a = li[i].getElementsByTagName("a")[0];
     if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
       li[i].style.display = "";
     } else {
       li[i].style.display = "none";
     }
   }


   console.log(filterValue)

   // filterInput.value = ""; 
 } */

let searchContact = document.getElementById("searchContact");
searchContact.addEventListener("keyup", contactFunction);

function contactFunction() {
  let searchContactValue = searchContact.value.toUpperCase();
  let ul = document.getElementById("ul");
  let li = ul.querySelectorAll("li.names");
  // let sideMessage = document.querySelector("span");

  for (let i = 0; i < li.length; i++) {
    if (li[i].innerHTML.toUpperCase().indexOf(searchContactValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
     /* let sideMessage = confirm("No contacts found!! Would you like to add a new contact?");
     if(sideMessage) {

     } */
    }
  }
  // console.log(li)
}

/* 
let h1 = document.querySelector("h1"),
siteData = {
  siteName: "Our site",
  siteAddress: "chicago"
},
normalData;
let Cat = "blacky";
localStorage.setItem("theCat", Cat);
let change = localStorage.getItem("theCat"); // musmus
h1.innerHTML = change;
localStorage.removeItem("theCat");

localStorage.setItem("siteData", JSON.stringify(siteData));
normalData = JSON.parse(localStorage.getItem("siteData"))
h1.innerText = normalData.siteName;

let postData = {
  ul: "The Head",
  li1: "The neck",
  li2: "the mouth",
  li3: "the meat"
}, 
stringedPostData = JSON.stringify(postData);
localStorage.setItem("stringedPostData", stringedPostData);
let normalPostData = JSON.parse(localStorage.getItem("stringedPostData"));

let div = document.createElement("div"),
body = document.getElementsByClassName("container")[0];
body.appendChild(div);
div.style.backgroundColor = "red";
div.style.border = "2px yellow solid"
let h3 = document.createElement("h3")
h3.textContent = "here we are";
div.appendChild(h3);

for(let i in normalPostData) {
  document.write(normalPostData[i])
}
// localStorage.clear()
console.log(localStorage.key(3))
 */