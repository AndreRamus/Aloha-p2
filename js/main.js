//alert by clicking on subscribe


//smooth scroll
$(document).ready(function(){
   $(function() {
     $('a[href*="#"]:not([href="#"])').click(function() {
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html, body').animate({
             scrollTop: target.offset().top
           }, 800);
           return false;
         }
       }
     });
   });
 });

//Carousel
$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  imagesLoaded:true,
  wrapAround: true,
  autoPlay: true
});
