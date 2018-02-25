var sliderImages = document.querySelectorAll("figure"); 
var lenSlider = sliderImages.length;
var sliderButtons = document.querySelectorAll(".button.arrow");


var w = document.documentElement.clientWidth || document.body.clientWidth;
var countShowImg = Math.floor((w - 155) / 125); 
var currIndexImg = 0;
console.log(w, countShowImg, sliderImages[0].style.display);
for(var i = lenSlider-1; i >= countShowImg; i-- ) {
    sliderImages[i].style.display = "none";
}


function changePosition(el, index) {
    // this.style.backgroundPositionY = "-150px";
    var sliderImages = document.querySelectorAll("figure");
    document.querySelector("figure.sliderImg__active").classList.remove("sliderImg__active");
    el.classList.add("sliderImg__active");
    currIndexImg = index;
}
/*
function changePositionArrow(direction) {
    var currentSliderImage = document.querySelector(".sliderImg__active");
    var prevImage = currentSliderImage.previousElementSibling;
    var nextImage = currentSliderImage.nextElementSibling;
    if (direction == "left") {
        if (prevImage != null && prevImage.nodeName != "A") {
            prevImage.classList.add("sliderImg__active"); 
         } else {
              sliderImages[sliderImages.length - 1].classList.add("sliderImg__active");

         }
    } else {
        (nextImage != null && nextImage.nodeName != "A") ? nextImage.classList.add("sliderImg__active") : sliderImages[0].classList.add("sliderImg__active");
    }
    currentSliderImage.classList.remove("sliderImg__active");
}
///////////////////*/
function changePositionArrow2(direction) {
    var prevIndexImg = (currIndexImg - 1 < 0) ? lenSlider-1 : currIndexImg - 1;
    var nextIndexImg = (currIndexImg+1) % lenSlider;
    sliderImages[currIndexImg].classList.remove("sliderImg__active");
    if (direction == "left") {       
            sliderImages[prevIndexImg].classList.add("sliderImg__active"); 
            currIndexImg = prevIndexImg;

    } else {
        sliderImages[nextIndexImg ].classList.add("sliderImg__active"); 
        currIndexImg = nextIndexImg;
    }
    
    
}

//add action on slider image pressed
for (i = 0, len = sliderImages.length; i < len; i++) {
   
   // sliderImages[i].onclick = changePosition;
   ( function (index) {
   sliderImages[index].addEventListener('click', function(){
        changePosition(this, index);
    });
   })(i);

}

//left arrow on slider event
sliderButtons[0].addEventListener('click', function(){
        changePositionArrow2("left");
    });

//right arrow on slider event
sliderButtons[1].addEventListener('click', function(){
    changePositionArrow2("right");
});






