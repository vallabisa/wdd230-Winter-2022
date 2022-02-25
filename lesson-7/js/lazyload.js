const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `<strong>Last updated</strong>: ${document.lastModified}`;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;


// select the elements to manipulate (output to)
const datefield = document.querySelector("date");


// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);


datefield.innerHTML = `<em>${fulldate}</em>`;

// display a banner on Mondays or Tuesdays only
var currentDay = now.getDay()
if (currentDay = 2) {
    document.getElementById("day").innerHTML = "Hello!";
}
if (currentDay = 3) {
    document.getElementById("day").innerHTML = "Hello!";
}


//Progressive Loading of Images
let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
  });