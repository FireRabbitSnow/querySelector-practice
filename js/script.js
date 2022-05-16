//query Selector/

var available = document.querySelector("h2");
console.log(available);

//multiple selectors/
var mainTitle = document.querySelector(".main-title");
console.log(mainTitle);

var firstItem = document.querySelector("ul li");
console.log(firstItem);

//style properties/

var intro = document.querySelector(".intro p");
intro.style.color = "purple";
console.log(intro);

//camleCase property/
intro.style.fontSize = "3em";
intro.style.fontStyle = "italic";

//modifcy atributes
var firstImg = document.querySelector("Img");
firstImg.src = "img/lulu.jpeg";
firstImg.alt = "Lulu bouquet";
console.log(firstImg);

//innerText &innerHTML properites
var firstCaption = document.querySelector("figCaption");
firstCaption.innerText = "The Lulu";
console.log(firstCaption);

//innerHTML property/
firstCaption.innerHTML = "The <strong> Lulu</strong>";
console.log(firstCaption);
