/*


            BOUTON FLOTTANT NAV BAR


*/

var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
      $('button.bouton_flottant').addClass('show');
    } else {
      $('button.bouton_flottant').removeClass('show');
    }
  });
  
  /*$('button.bouton_flottant    ').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 80);
    return false;
  });*/