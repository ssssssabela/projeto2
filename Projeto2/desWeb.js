var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var zoomedImages = document.querySelectorAll('.zoomedImage');

zoomedImages.forEach(function(image) {
    image.addEventListener('mouseover', function() {
        zoomInOut(image, true);
    });

    image.addEventListener('mouseout', function() {
        zoomInOut(image, false);
    });
});

function zoomInOut(image, zoomIn) {
    var currentTransform = window.getComputedStyle(image).getPropertyValue('transform');
    var currentScale = parseFloat(currentTransform.split(',')[3]) || 1;
    var newScale = zoomIn ? currentScale * 1.2 : 1;
    image.style.transform = 'scale(' + newScale + ')';
}

$(document).ready(function () {
  Swal.fire({
      title: 'Bem vindo a Ticket cine',
      text: 'Aqui você tem uma vasta seleção de filmes para todos os gostos e idades! ',
      confirmButtonText: 'Ok',
      iconHtml: '<img src="Logo/Logo.jpg" class="custom-icon"> ',
  })
});
