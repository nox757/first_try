var sliderImages = document.querySelectorAll("figure");


function change_position() {
    // this.style.backgroundPositionY = "-150px";
    var sliderImages = document.querySelectorAll("figure");
    document.querySelector("figure.sliderImg__active").classList.remove("sliderImg__active");
    this.classList.add("sliderImg__active");
}

for (i = 0, len = sliderImages.length; i < len; i++) {
    
    sliderImages[i].onclick = change_position;

}
