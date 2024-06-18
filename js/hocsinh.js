document.addEventListener('DOMContentLoaded', function() {
    
    var avt =  [
        'url("../footage/hocsinh_footage/1.png")',
        'url("../footage/hocsinh_footage/2.png")',
        'url("../footage/hocsinh_footage/3.png")',
        'url("../footage/hocsinh_footage/4.jpg")',
        'url("../footage/hocsinh_footage/5.jpg")',
        'url("../footage/hocsinh_footage/6.jpeg")',
        'url("../footage/hocsinh_footage/7.jpg")',
        'url("../footage/hocsinh_footage/8.png")',
        'url("../footage/hocsinh_footage/9.jpg")',
        'url("../footage/hocsinh_footage/10.jpg")',
    ];
    var next = document.getElementById("next");
    var prev = document.getElementById("prev");
    
    document.getElementById("avt_right").style.backgroundImage = avt[1];
    document.getElementById("avt_right_sec").style.backgroundImage = avt[2];
    document.getElementById("avt_left").style.backgroundImage = avt[avt.length-1];
    document.getElementById("avt_left_sec").style.backgroundImage = avt[avt.length-2];
    document.getElementById("avt_main").style.backgroundImage = avt[0];

    var avt_right_idx = 1;//anhr 2
    var avt_left_idx = avt.length-1;//anhr cuối

    next.addEventListener('click', function(){ 
        var slide = document.querySelector('.slide');
        var avtShow = document.querySelectorAll('.avt');
        slide.appendChild(avtShow[0]);
        avt_right_idx = avt.indexOf(avtShow[4].style.backgroundImage);
        avt_right_idx = (avt_right_idx+1) % avt.length;
        avtShow[0].style.backgroundImage = avt[avt_right_idx];
        console.log(avtShow[2].style[1])
        console.log(avtShow[2].style.height)
        console.log(avtShow[2])
    });

    prev.addEventListener('click', function(){
        var slide = document.querySelector('.slide');
        var avtShow = document.querySelectorAll('.avt');
        slide.prepend(avtShow[avtShow.length-1]);
        avt_left_idx = avt.indexOf(avtShow[0].style.backgroundImage)

        if(avt_left_idx == 0){
            avt_left_idx = avt.length-1;
        }else{
            avt_left_idx = (avt_left_idx-1) % avt.length;
        }

        avtShow[avtShow.length-1].style.backgroundImage = avt[avt_left_idx];
    });


    
});