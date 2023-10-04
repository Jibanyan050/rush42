//holds images
const images = [
  "https://www.un.org/development/desa/disabilities/wp-content/uploads/sites/15/2019/07/E-SDGs-Poster-801x476.png",
  "https://www.floraandfauna.com.au/media/wysiwyg/What-Are-The-17-Sustainable-Development-Goals.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-WKfq8ejlr611Q6yW5A5Mj-FQeie3ElzkQ&usqp=CAU"
];

let currentImageIndex = 0;
//rotates through images
function changeBackground() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.body.style.backgroundImage = "url('" + images[currentImageIndex] + "')";
}//injects url into background image's url

setInterval(changeBackground, 5000);

function openJustice() {
  let source = "http://127.0.0.1:3000/discovery_piscine/rush1/006/sace.html";
  window.open(source);
}

function openEducation() {
  let source = "http://127.0.0.1:3000/discovery_piscine/rush1/006/sace.html";
  window.open(source);
}

