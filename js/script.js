
$(document).ready(function(){
    $(this).scrollTop(0);
});

$(document).ready(function(){

    $(".fade").hide(0).delay(100).fadeIn(200);
    // (".hero").delay(200).addClass('animated fadeInDown')
    $(".conf-logo").addClass('animated fadeInDown');
    $(".location").addClass('animated fadeInLeft');
    $(".sold-out-btn").addClass('animated fadeInUp');
    $(".sold-out-btn").addClass('animated not-hidden');
    $(".nineteen").addClass('animated fadeInUp');
    $(".bg").addClass('animated fadeIn');
    $(".memberRegistration").addClass('animated bounce');




});






// Speaker Bio Modals


// var closeModal = function(){$('.close-modal').on('click', function(){

//           $(this).parent().parent().removeClass("fadeIn").addClass("fadeOut").setTimeout(deleteModal, 500).remove();
//                   });
// }



/*Generate Sessions*/
// var sessionsGoHere = $('.the-sessions');
// var thisSession;
// var sessionId;
// var sessionTitle;
// var sessionDesc;
// var sessionSponsor;
// var sessionTime;
// var sessionDateTime;
// var eventPod;
// var isSponsored;
// var featuredSess;

// for (var prop in sessions) {
//   thisSession= sessions[prop];
//   sessionId = thisSession.id;
//   sessionTitle = thisSession.title; 
//   sessionDesc = thisSession.desc;
//   sessionSponsor = thisSession.sponsor;
//   sessionTime = thisSession.time;
//   sessionDateTime = thisSession.datetime;
//   featuredSess = thisSession.special
//   if (sessionSponsor  === '') {
//     isSponsored = 'hidden'
//   } else {
//     isSponsored = 'sponsored'
//   }
//   eventPod = '<section class="event cf" id="'+sessionId+'"><div class="left"><p><time datetime="'+sessionDateTime+'">'+sessionTime+'</time></p></div><div class="right"><h4>'+featuredSess+sessionTitle+'</h4><p>'+sessionDesc+'</p><p class="'+isSponsored+'">Sponsored by '+sessionSponsor+'</p></div></section>';
//   sessionsGoHere.append(eventPod);
// }





//If mobile, hide nav on menu item click
$('nav a').on('click', function() {
  if ($w.width() < 1146) {
    nav.toggleClass('unhide-nav');
    menu.toggleClass('menu-close');
  }
});

//Smooth Scrolling: https://css-tricks.com/snippets/jquery/smooth-scrolling/
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

var card = $('.check'),
  offset = .9;

$(window).on('scroll', function(){
  (!window.requestAnimationFrame) 
    ? setTimeout(function(){ showBlocks(card, offset); }, 100)
    : window.requestAnimationFrame(function(){ showBlocks(card, offset); });
});

function showBlocks(blocks, offset) {
  blocks.each(function(){
    ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).hasClass('is-hidden') ) && $(this).removeClass('is-hidden').addClass('not-hidden');
  });
}





$(".col").hover(function (e) {
    $(".col").removeClass("active");
    // or $(".active").removeClass("active");
    
    $(this).addClass("active");
});
