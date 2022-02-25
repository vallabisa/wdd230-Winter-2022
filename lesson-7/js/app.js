// let imagesToLoad = document.querySelectorAll('img[data-src]');
// const loadImages = (image) => {
//   image.setAttribute('src', image.getAttribute('data-src'));
//   image.onload = () => {
//     image.removeAttribute('data-src');
//   };
// };

// imagesToLoad.forEach((img) => {
//     loadImages(img);
//   });

// //Optional parameters being set for the IntersectionObserver
// const imgOptions = {
//     threshold: 0,
//     rootMargin: "0px 0px 50px 0px"
// };

// //Image will load when user scrolls
// if('IntersectionObserver' in window) {
// const observer = new IntersectionObserver((items, observer) => {
//     items.forEach((item) => {
//     if(item.isIntersecting) {
//         loadImages(item.target);
//         observer.unobserve(item.target);
//     }
//     });
// });
// imagesToLoad.forEach((img) => {
//     observer.observe(img);
// });
// } else {
// imagesToLoad.forEach((img) => {
//     loadImages(img);
// });
// }
  


//   //last modified
//   const lastmod = document.querySelector('#lastmod');
//   lastmod.innerHTML = `<strong>Last updated</strong>: ${document.lastModified}`;

//   // select the elements to manipulate (output to)
// const datefield = document.querySelector("date");


// // derive the current date using a date object
// const now = new Date();
// const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
// 	now
// );


// datefield.innerHTML = `<em>${fulldate}</em>`;

// const imagesToLoad = document.querySelectorAll("img[data-src]");

// const imgOptions = {
//     threshold: 0,
//     rootMargin: "0px 0px 50px 0px"
// };

// const loadImages = (image) => {
//     image.setAttribute('src', image.getAttribute('data-src'));
//     image.onload = () => {image.removeAttribute('data-src');};
// };

// if('IntersectionObserver' in window) {
//     const imgObserver = new IntersectionObserver((items, observer) => {
//         items.forEach((item) => {
//             if(items.isIntersecting) {
//                 loadImages(item.target);
//                 observer.unobserve(item.target);
//             }

//         });
//     });
// }

// else {
// }


// Progressive loading images
const imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
