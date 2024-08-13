document.addEventListener('DOMContentLoaded', function() {

function Video (stt, link){
    this.stt = stt;
    this.link = link;
}

var videoList = [
    new Video('1', 'https://www.youtube.com/embed/sFH9qUVs94c?si=5VKGWf76XbOe1wOH'),
    new Video('2', 'https://www.youtube.com/embed/WEjFtOCivgk?si=7aP5SU_bWNGVzrNu'),
    new Video('3', 'https://www.youtube.com/embed/nPctHzUlQH4?si=jY39k0tLDgQPjwkE'),
    new Video('4', 'https://www.youtube.com/embed/L6TKUau2YAI?si=qfwLvRt-zQnNqqWY'),
    new Video('5', 'https://www.youtube.com/embed/oKBtqvGhN44?si=CuPSqy2N9K7tECEA'),
    new Video('6', 'https://www.youtube.com/embed/r6yAJr7Gjuc?si=SMsOD35L-XJAcakf'),
    new Video('7', 'https://www.youtube.com/embed/Xs6HE_1oibs?si=Ufvyu-6bNKTxpvnG'),
    new Video('8', 'https://www.youtube.com/embed/t7eNOOofFHc?si=6oxZlabA5rtyChe6'),
    new Video('9', 'https://drive.google.com/file/d/1ULortLEeHaqWdkz0eTuogHyACM1CpuyQ/preview'),
]


if (window.matchMedia("(max-width: 740px)").matches){
    var screenWidth = window.innerWidth;
    var screenHeight = screenWidth * 9 / 16;

    document.getElementById('video').style.height = screenHeight;
    document.getElementById('video').style.width = screenWidth;
    document.getElementById('frame').style.height = screenHeight;
    document.getElementById('frame').style.width = screenWidth;
    document.getElementById('frame').style.transform = 'scale(0.95)';
    // document.getElementById('frame').style.transform = 'translate(0px,0px)';
}




var group  = document.getElementsByClassName('group');
var group_container  = document.querySelector('.group_container');
var choosenGroup = null;
for(let i = 0; i<group.length; i++){
    group[i].addEventListener('click', function(){
        choosenGroup = i;
        var showGroup = document.getElementById('list').children[1+ choosenGroup];
        showGroup.classList.remove('hide');
        var name = showGroup.querySelector('.name');
        var home = showGroup.querySelector('.home');
        var thumb_content = showGroup.querySelector('.thumb_content');
        var back_name = showGroup.querySelector('.back_name');
        for(let j = 0; j<group.length; j++){
                group[j].style.width = '0px';
                group[j].style.opacity = '0';
                group[j].style.transform = 'translate(0px,0px)';
                setTimeout(function(){
                    group[j].classList.add('hide');
                },  350)
        }
        group_container.classList.add('hide');
         setTimeout(function(){
            name.style.height = '100%';
            name.style.opacity = '1';
            home.style.opacity = '1';
            home.style.transform = 'translateY(0px)';
            thumb_content.style.transform = 'translateX(0px)';
            thumb_content.style.opacity = '1';
            back_name.style.transform = 'translateX(0px)';
            back_name.style.opacity = '1';
        },350)

        home.addEventListener('click', function(){
            setTimeout(function(){ 
                showGroup.classList.add('hide');
            },  800)
            name.style.height = '0%';
            name.style.opacity = '0';
            home.style.opacity = '0';
            home.style.transform = 'translateY(-45px)';
            thumb_content.style.transform = 'translateX(400px)';
            thumb_content.style.opacity = '0';
            back_name.style.transform = 'translateX(-400px)';
            back_name.style.opacity = '0';
            
            for(let j = 0; j<group.length; j++){
                group[j].classList.remove('hide');
                group_container.classList.remove('hide');
                setTimeout(function(){ 
                    group[j].style.width = '300px';
                    group[j].style.opacity = '1';
                    if (window.matchMedia("(max-width: 740px)").matches){
                        group[j].style.transform = 'translate(0px,0px)';
                    }else{
                        group[j].style.transform = 'translate(50px,0px)';
                    }
                },  350)
        }
        })
        var videoEmbeded = document.getElementById('videoEmbeded');
        var choosenVideo = showGroup.children[1].getElementsByClassName('thumb');
        for(let j = 0; j < choosenVideo.length; j++){
            choosenVideo[j].addEventListener('click', function(){
                videoEmbeded.src = videoList[Number(choosenVideo[j].id)-1].link;
            })
        }
    })
}

var menu_mobile = document.getElementById('menu_mobile');
var t = 0;
menu_mobile.addEventListener('click',function(){
    t = t + 1;
    console.log(t)
    if(t%2===0){
        document.getElementById('menu_mobile').style.transform = 'rotate(0deg)';
        document.getElementById('dir').style.transform = 'translateY(-100px)';
        setTimeout(function(){
            document.getElementById('navbar').style.height = '48px';
        },50)
        setTimeout(function(){
            document.getElementById('title').style.transform = 'translateY(0px)';
            document.getElementById('title').style.opacity = '1';
            document.getElementById('logo').style.opacity = '1';
        document.getElementById('logo').style.transform = 'translateX(0px)';
        },510)
        setTimeout(function(){
            // setTimeout(function(){
                document.getElementById('logo').style.display = 'block';
                document.getElementById('title').style.display = 'flex';
            // },100)
            document.getElementById('dir').style.display = 'none';
        },500)
        

    }else{
        console.log('run')
        document.getElementById('menu_mobile').style.transform = 'rotate(90deg)';
        document.getElementById('title').style.transform = 'translateY(20px)';
        document.getElementById('title').style.opacity = '0';
        document.getElementById('logo').style.opacity = '0';
        document.getElementById('logo').style.transform = 'translateX(-50px)';
        setTimeout(function(){
            document.getElementById('title').style.display = 'none';
            document.getElementById('logo').style.display = 'none';
            document.getElementById('dir').style.display = 'flex';
            document.getElementById('navbar').style.height = '102px';
        },300)
        setTimeout(function(){
            document.getElementById('dir').style.transform = 'translateY(0px)';
            document.getElementById('dir').style.width = 'calc(100% - 48px)';
        }, 350)

    }
})

})