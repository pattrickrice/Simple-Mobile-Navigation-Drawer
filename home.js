$(document).ready(function () {
});
function myFunction(x) {
  x.classList.toggle("change");
  if($('#menu-drawer').hasClass('open')){
    $('#menu-drawer').removeClass('open');
    $('#menu-drawer').addClass('close');
  }else{
    $('#menu-drawer').removeClass('close');
    $('#menu-drawer').addClass('open')
  }
  if($('#overlay').hasClass('over')){
    $('#overlay').removeClass('over');
    $('#overlay').addClass('under');
  }else{
    $('#overlay').removeClass('under');
    $('#overlay').addClass('over')
  }
};
