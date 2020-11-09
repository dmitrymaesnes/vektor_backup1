
// header animation
// (function(){

//     var doc = document.documentElement;
//     var w = window;
  
//     var prevScroll = w.scrollY || doc.scrollTop;
//     var curScroll;
//     var direction = 0;
//     var prevDirection = 0;
  
//     var header = document.getElementById('site-header');
  
//     var checkScroll = function() {
  
//       /*
//       ** Find the direction of scroll
//       ** 0 - initial, 1 - up, 2 - down
//       */
  
//       curScroll = w.scrollY || doc.scrollTop;
//       if (curScroll > prevScroll) { 
//         //scrolled up
//         direction = 2;
//       }
//       else if (curScroll < prevScroll) { 
//         //scrolled down
//         direction = 1;
//       }
  
//       if (direction !== prevDirection) {
//         toggleHeader(direction, curScroll);
//       }
      
//       prevScroll = curScroll;
//     };
  
//     var toggleHeader = function(direction, curScroll) {
//       if (direction === 2 && curScroll > 52) { 
        
//         //replace 52 with the height of your header in px
  
//         header.classList.add('hide');
//         prevDirection = direction;
//       }
//       else if (direction === 1) {
//         header.classList.remove('hide');
//         prevDirection = direction;
//       }
//     };
    
//     window.addEventListener('scroll', checkScroll);
  
//   })();





// header - color changer
// $(window).scroll(function(){
//   if ($(window).scrollTop() < 900) {
//       // $('.header').addClass('scroll');
//       var block = document.getElementById('site-header');
//       block.style.backgroundColor = '#a6aaaa00'

//       $('.p_header').css('color','white')
//       $('.p_header').css('font-weight','normal')
//   }
//   else {
//       // $('.header').removeClass('scroll')
//       var block = document.getElementById('site-header');
//       // block.style.backgroundColor = '#222222'

//       $('.p_header').css('color','black')
//       $('.p_header').css('font-weight','bold')
//   }
// });




// animated pictures
let bg1 = document.querySelector('.vr');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg1.style.transform = 'translate(' + x * 10 + 'px, -' + y * 10 + 'px)';
});

let bg2 = document.querySelector('.cube');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg2.style.transform = 'translate(' + x * 10 + 'px, -' + y * 10 + 'px)';
});

let bg3 = document.querySelector('.macbook');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg3.style.transform = 'translate(' + x * 10 + 'px, -' + y * 10 + 'px)';
});

let bg4 = document.querySelector('.apple_pencil');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg4.style.transform = 'translate(' + x * 10 + 'px, -' + y * 10 + 'px)';
});