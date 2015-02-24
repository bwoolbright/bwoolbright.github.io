$(document).ready(function() {
  setupBackgroundImage();
});

function setupBackgroundImage(){
  $('body').removeClass();
  $('body').addClass('about');
  $('section').hide();
  $('section.about').show(300);
  $('#work_nav').click(function(){
    $('body').removeClass();
    $('body').addClass('work');
    $('section').hide();
    $('section.work').show(300);
  });
  $('#contact_nav').click(function(){
    $('body').removeClass();
    $('body').addClass('contact');
    $('section').hide();
    $('section.contact').show(300);
  });
  $('#about_nav').click(function(){
    $('body').removeClass();
    $('body').addClass('about');
    $('section').hide();
    $('section.about').show(300);
  });
}