var sliderImages = document.querySelectorAll("figure"); 
var lenSlider = sliderImages.length;
var sliderButtons = document.querySelectorAll(".button.arrow");


var w = document.documentElement.clientWidth || document.body.clientWidth;
var MAX_SHOW_IMG = Math.floor((w - 155) / 125); 
var currIndexImg = 0;
//console.log(w, MAX_SHOW_IMG, sliderImages[0].style.display);
for(var i = lenSlider-1; i >= MAX_SHOW_IMG; i-- ) {
    sliderImages[i].style.display = "none";
}


function changePosition(el, index) {
    // this.style.backgroundPositionY = "-150px";
    var sliderImages = document.querySelectorAll("figure");
    document.querySelector("figure.sliderImg__active").classList.remove("sliderImg__active");
    el.classList.add("sliderImg__active");
    currIndexImg = index;
}

function showImg(from, to) {
    for (var i = 0; i < lenSlider; i++){
        if (i >= from && i <=to){
            sliderImages[i].style.display = "flex";
        } else {
            sliderImages[i].style.display = "none";
        }
        
    }
}

function changePositionArrow(direction) {
    var prevIndexImg = (currIndexImg - 1 < 0) ? lenSlider-1 : currIndexImg - 1;
    var nextIndexImg = (currIndexImg+1) % lenSlider;
    sliderImages[currIndexImg].classList.remove("sliderImg__active");
    var from = 0, to = lenSlider; 
    var flag = false;
    
    if (direction == "left") {  
            if(MAX_SHOW_IMG < lenSlider) {
            if ((lenSlider - currIndexImg) % MAX_SHOW_IMG == 0) {
                from = currIndexImg - MAX_SHOW_IMG;
                to = currIndexImg - 1;
                flag = true;
            
            //current image don't last 
                if(currIndexImg - MAX_SHOW_IMG <= 0) {
                    from = 0;
                    to = MAX_SHOW_IMG-1;
                    //flag = true;
               
                }
            }
            
            //current image is last
            if (prevIndexImg == lenSlider-1) {
                from = lenSlider - MAX_SHOW_IMG;
                to = lenSlider - 1;
                flag = true;
            }  
            if (flag) {
                showImg(from, to);
                flag = false;
            }
        }            
            sliderImages[prevIndexImg].classList.add("sliderImg__active"); 
            currIndexImg = prevIndexImg;

    } else {
        if(MAX_SHOW_IMG < lenSlider) {
            if ((currIndexImg + 1) % MAX_SHOW_IMG == 0) {
                from = currIndexImg + 1;
                to = currIndexImg + MAX_SHOW_IMG;
                flag = true;
            
            //current image don't last 
                if(currIndexImg + MAX_SHOW_IMG >= lenSlider) {
                    from = lenSlider - MAX_SHOW_IMG;
                    to = lenSlider - 1;
                    //flag = true;
               
                }
            }
            
            //current image is last
            if (nextIndexImg == 0) {
                from = 0;
                to = MAX_SHOW_IMG - 1;
                flag = true;
            }  
            if (flag) {
                showImg(from, to);
                flag = false;
            }
        }          
            
        
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
        changePositionArrow("left");
    });

//right arrow on slider event
sliderButtons[1].addEventListener('click', function(){
    changePositionArrow("right");
});






