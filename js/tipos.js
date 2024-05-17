let slideIndex = [1, 1, 1, 1, 1, 1]; // Se agregó un elemento para cada slideshow
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6"]; // Se agregó un nombre de clase para cada slideshow

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2); // Se llama a la función para mostrar las diapositivas del nuevo slideshow
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);

    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = x.length}

    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }

    x[slideIndex[no]-1].style.display = "block";  
}
