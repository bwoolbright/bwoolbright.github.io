$(document).ready(function() {
  setupBackgroundImage();
  setupAnimsition();
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

function setupAnimsition(){
  $(".animsition").animsition({
    
      inClass               :   'fade-in',
      outClass              :   'fade-out',
      inDuration            :    1500,
      outDuration           :    800,
      linkElement           :   '.animsition-link',
      // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
      loading               :    true,
      loadingParentElement  :   'body', //animsition wrapper element
      loadingClass          :   'animsition-loading',
      unSupportCss          : [ 'animation-duration',
                                '-webkit-animation-duration',
                                '-o-animation-duration'
                              ],
      //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      
      overlay               :   false,
      
      overlayClass          :   'animsition-overlay-slide',
      overlayParentElement  :   'body'
    });
  }