document.addEventListener('DOMContentLoaded', function() {

  
  if (window.matchMedia("(max-width: 740px)").matches){
     document.getElementById("slide_container").style.marginTop =
     `${document.querySelector(".container_GVCN").clientHeight + document.querySelector(".text_container").clientHeight }` + 'px' ;

     var n = Number(document.getElementById("slide_container").style.marginTop.slice(0, -2));
     document.getElementById("fheight").style.marginTop =
     `${n + document.getElementById("slide_container").clientHeight + 5}` + 'px';

     console.log(`${n + document.getElementById("slide_container").clientHeight + 5}` + 'px')
    }  
    
  var noibat = [
    'url("footage/noibat/1.jpg")',
    'url("footage/noibat/2.jpg")',
    'url("footage/noibat/3.jpg")',
    'url("footage/noibat/4.jpg")',
    'url("footage/noibat/5.jpg")',
    'url("footage/noibat/6.jpg")',
    'url("footage/noibat/7.jpg")',
    'url("footage/noibat/8.jpg")',
    'url("footage/noibat/9.jpg")',
    'url("footage/noibat/10.jpg")',
    'url("footage/noibat/11.jpg")',
    'url("footage/noibat/12.jpg")',
  ]

  document.getElementById("c3").style.backgroundImage = noibat[0];
  document.getElementById("c4").style.backgroundImage = noibat[1];
  document.getElementById("c5").style.backgroundImage = noibat[2];
  var img_idx = 2;

  function slider() {
    var slide = document.querySelector('.slide');
    var child = document.querySelectorAll('.child');
    slide.appendChild(child[0]);
    img_idx = (img_idx + 1) % noibat.length;
    child[0].style.backgroundImage = noibat[img_idx];
  };

  setTimeout(slider,1000);
  var intervalID = setInterval(slider, 4000);
  var play = 0;
  document.getElementById("play_pause").addEventListener('click', function(){
    play = play + 1;
    if(play%2 === 0){
      slider();
      intervalID = setInterval(slider, 4000);
      document.getElementById("play").style.display = 'block';
      document.getElementById("pause").style.display = 'none';
    }else{
      clearInterval(intervalID);
      document.getElementById("play").style.display = 'none';
      document.getElementById("pause").style.display = 'block';
    }
  });
  


  var undone = document.querySelectorAll(".undone");
  undone.forEach(function(undone) {
    undone.addEventListener('click', function() {
        document.querySelector(".notify").classList.add('hidden_notify');
        document.getElementById("notify_text").innerHTML = 'Tính năng đang được hoàn thiện, bạn chờ nhé <3';
        setTimeout(function() {
            document.getElementById("notify_text").innerHTML = '';
            document.querySelector(".notify").classList.remove('hidden_notify');
        }, 2000);
    });
});


var menu_mobile = document.getElementById('menu_mobile');
var t = 0;
menu_mobile.onclick = function(){
    t = t + 1;
    if(t%2){
        document.querySelector('.nav_items').style.display = 'flex';
        menu_mobile.style.rotate = '90deg';
        document.querySelector('.logoA1').style.width = '0px';
        document.querySelector('.navbar').style.height = '120px';
        document.querySelector('.trangchu').style.display = 'none';
    }else{
        document.querySelector('.nav_items').style.display = 'none';
        menu_mobile.style.rotate = '0deg';
        document.querySelector('.logoA1').style.width = '48px';
        document.querySelector('.navbar').style.height = '48px';
        document.querySelector('.trangchu').style.display = 'block';

    }
}

});