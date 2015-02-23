$(document).ready(function() {
  setupBackgroundImage();
});

function setupBackgroundImage(){
  $('body').removeClass();
  $('body').addClass('about');
  $('#work_nav').click(function(){
    $('body').removeClass();
    $('body').addClass('work');
  });
  $('#contact_nav').click(function(){
    $('body').removeClass();
    $('body').addClass('contact');
  });
  $('#about_nav').click(function(){
    $('body').removeClass();
    $('body').addClass('about');
  });
}