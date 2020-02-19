$(function(){
  $(window).scroll(function() {
     if($(window).scrollTop() >= 100) {
       alert("mabuhay")
       $('#navblack').addClass('scrolled');
     }
    else {
      $('#navblack').removeClass('scrolled');
    }
  });
});