var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}



fetch('./image.json')
.then((response) => response.json())
.then((json) => {
    const images_path = json['images_path']
    const images_description = json['images_description']

    let image_list = []
    let navigation_list = []

    for (let i = 0; i < images_path.length; i++) {

        let text = `
        <div class="mySlides fade">
            <div class="numbertext">${i} / ${images_path.length}</div>
            <img src="${images_path[i]}" style="width:100%">
            <div class="text">${images_description[i]}</div> 
        </div>
        `
        image_list.push(text)

        let nav = `<span class="dot"></span>`;
        navigation_list.push(nav);
            
    }

    document.getElementById('carousel-images').innerHTML = image_list.join('\n')
    document.getElementById('carousel-navigation').innerHTML = navigation_list.join('\n');

})
