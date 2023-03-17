let images = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg",
  "img/img6.jpg",
  "img/img7.jpg",
  "img/img8.jpg",
  "img/img9.jpg",
];

let imgId = document.getElementById("img-link");
let imgIndex = 0;
setInterval(() => {
  if (imgIndex === images.length) {
    imgIndex = 0;
  }

  let imglink = images[imgIndex];
  imgId.setAttribute("src", imglink);
  imgIndex++;
}, 100);
