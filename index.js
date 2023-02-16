//const allImages=document.querySelectorAll('.modal-content img')
//const modal=document.querySelector('.modal')
const menu=document.querySelector('.musuKava')
const menu2=document.querySelector('.musuKava2')
const meniuImg=document.querySelector('.meniuImg')
const hamburger=document.querySelector('.hamburger')
const secondNav=document.querySelector('.second-nav')
const navItem2=document.querySelectorAll('.nav-item2')
const popupImgOff=document.querySelector('.popup-imgOff')

const images = document.querySelectorAll(".galerija .container-img img");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal-content img");
const arrowLeft = document.querySelector(".arrowleft");
const arrowRight = document.querySelector(".arrowright");
var closeButton = document.querySelector(".close-button");



let currentImageIndex = 0;

images.forEach(function(image) {
  image.addEventListener("click", function() {
    modal.style.display = "block";
    modalImage.src = image.src;
    currentImageIndex = [...images].indexOf(image);
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
  });
  
})});
menu.addEventListener("click", function() {
    modal.style.display = "block";
    modalImage.src = images[1].src;
    currentImageIndex = 0;
    closeButton.addEventListener("click", function() {
      modal.style.display = "none";})
  });
menu2.addEventListener("click", function() {
    modal.style.display = "block";
    modalImage.src = images[1].src;
    currentImageIndex = 0;
    closeButton.addEventListener("click", function() {
      modal.style.display = "none";})
  });  

modal.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

function showPreviousImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  modalImage.src = images[currentImageIndex].src;
}

function showNextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  modalImage.src = images[currentImageIndex].src;
}

arrowLeft.addEventListener("click", showPreviousImage);
arrowRight.addEventListener("click", showNextImage);


// var images = document.querySelectorAll(".container-img img");
// const images2 = document.querySelectorAll(".galerija .container-img img");
// var modal = document.querySelector(".modal");
// var modalImg = document.querySelector(".modal-content img");
// var closeButton = document.querySelector(".close-button");
    
//     for (var i = 0; i < images.length; i++) {
//       images[i].addEventListener("click", function() {
//         modal.style.display = "block";
//         modalImg.src = this.src;
//       });
//     }
    
//     closeButton.addEventListener("click", function() {
//       modal.style.display = "none";
//     });
    
//     modal.addEventListener("click", function(e) {
//       if (e.target === modal) {
//         modal.style.display = "none";
//       }
//     });
    
//     modal.addEventListener("click", function(e) {
//         if (e.target === modal) {
//           modal.style.display = "none";
//         }
//       });

//     let currentImageIndex = 0;
//       function showPreviousImage() {
//         currentImageIndex--;
//         if (currentImageIndex < 0) {
//             currentImageIndex = images2.length - 1;
//           }
//           modalImg.src = images2[currentImageIndex].src;
//         }
//         function showNextImage() {
//         currentImageIndex++;
//         if (currentImageIndex >= images2.length) {
//             currentImageIndex = 0;
//         }
//         modalImage.src = images2[currentImageIndex].src;
//         }

//     arrowLeft.addEventListener("click", showPreviousImage);
//     arrowRight.addEventListener("click", showNextImage);

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    secondNav.classList.toggle('active');
})
navItem2.forEach(item => item.addEventListener('click', ()=>{
    hamburger.classList.remove('active');
    secondNav.classList.remove('active');
}))

