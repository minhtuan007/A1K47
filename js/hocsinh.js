document.addEventListener('DOMContentLoaded', function() {
    function Hocsinh(stt, name, birth, pic, slogan, fb,  phone, mail, ytb){
        this.stt = stt;
        this.pic = pic;
        this.slogan = slogan;
        this.name = name;
        this. birth = birth;
        this.phone = phone;
        this.mail = mail;
        this.fb = fb;
        this.ytb = ytb;
        
    };
    var avt =  [
        new Hocsinh('1', 'Nguyễn Thuận An', '19/05/2006', 'url("footage/hocsinh_footage/1.jpg")', '', 'https://www.facebook.com/xeom.an.311', '0974372351', 'thuanan19526@gmail.com'),
        new Hocsinh('2', 'Lê Bùi Trâm Anh', '28/09/2006', 'url("footage/hocsinh_footage/2.png")', 'Dù có sai nhưng nếu có bản lĩnh thì sai cũng thành đúng. Thế giới này chỉ công nhận kẻ mạnh, không chấp nhận kẻ yếu', 'https://www.facebook.com/le.b.anh.7359?mibextid=LQQJ4d', '0912618183', 'Tranh280906@gmail.com'),
        new Hocsinh('3', 'Nguyễn Quỳnh Anh', '08/12/2006', 'url("footage/hocsinh_footage/3.jpg")', 'Đậu NV1 điểm cao🍀🍀🍀', 'https://www.facebook.com/quynanh0812', '0a', 'a'),
        new Hocsinh('4', 'Hoàng Văn Chí', '08/10/2006', 'url("footage/hocsinh_footage/4.jpeg")', 'Yêu lớp', 'https://www.facebook.com/profile.php?id=100024156893457&mibextid=kFxxJD', '0352607531', 'chih76186@gmail.com'),
        new Hocsinh('5', 'Phạm Mạnh Cường', '09/09/2006', 'url("footage/hocsinh_footage/5.jpg")', 'Tiệc tàn, hẹn gặp lại</br>Được đi chung với mọi người một đoạn thật vinh dự', 'https://www.facebook.com/barcelona.live.716/', '0357728952', 'manhcuongp9926@gmail.com'),
        new Hocsinh('6', 'Trần Thị Thùy Dung', '26/10/2006', 'url("footage/hocsinh_footage/6.jpg")', 'Chẳng sợ gì hơn là cô đơn', 'https://www.facebook.com/profile.php?id=100073957577613&mibextid=ZbWKwL', '0586558915', 'gsvshgsvs@gmail.com'),
        new Hocsinh('7', 'Đào Xuân Anh Dũng', '10/1/2006', 'url("footage/hocsinh_footage/7.jpg")', 'Yêu bạn:))))', 'https://www.facebook.com/daoxuananhdung?mibextid=LQQJ4d', '0328162805', 'daoxuananhdung@gmail.com'),
        new Hocsinh('8', 'Phan Đăng Dũng', '29/11/2006', 'url("footage/hocsinh_footage/8.jpg")', '"Bước vào đời tay trắng cùng lắm lại trở về với trắng tay </br>Khi ta yêu cuộc đời, cuộc đời cũng sẽ yêu ta đắm say"', 'https://www.facebook.com/profile.php?id=100089653197732', '0365164726', 'phandangyeah@gmail.com', 'https://www.youtube.com/@doublep4536'),
        new Hocsinh('9', 'Trần Quang Dũng', '22/02/2006', 'url("footage/hocsinh_footage/9.JPG")', 'Học - Học nữa - Học mãi', 'https://www.facebook.com/profile.php?id=100067477338146&mibextid=ZbWKwL', '0387374428', 'dtranquang02@gmail.com'),
        new Hocsinh('10', 'Phạm Thị Xuân Đan', '17/04/2006', 'url("footage/hocsinh_footage/10.jpeg")', '"Đời là những chuyến đi</br>Đi đúng đời sẽ đẹp"', 'https://www.facebook.com/linhdan.pham.1742006?mibextid=LQQJ4d', '0984767281', 'dan123nehaha@gmail.com'),
        new Hocsinh('11', 'Vũ Bùi Thúy Hà', '07/05/2006', 'url("footage/hocsinh_footage/11.jpg")', 'Học - Học nữa - Học mãi', 'https://www.facebook.com/vubui.thuyha?mibextid=ZbWKwL', '0967322983', 'Gain070506@gmail.com'),
        new Hocsinh('12', 'Hồ Xuân Hai', '20/09/2006', 'url("footage/hocsinh_footage/12.jfif")', 'Hi', 'https://web.facebook.com/profile.php?id=100089158823872', '0365287558', 'hoxuanhai2k6@gmail.com'),
        new Hocsinh('13', 'Nguyễn Trường Hải', '11/4/2006', 'url("footage/hocsinh_footage/13.jpeg")', 'Cùng nhau đi học, cùng nhau lớn', 'https://www.facebook.com/profile.php?id=100032368830594&mibextid=ZbWKwL', '0988580334', 'nguyentruonghai.com@gmail.com'),
        new Hocsinh('14', 'Trần Nguyễn Hoàng Hải', '17/05/2006', 'url("footage/hocsinh_footage/14.jpg")', 'The only reason I got into math, was so I could find the shortest distance to you', 'https://www.facebook.com/tnhh.17506', '0983170506', 'tnhha1k47@gmail.com'),
        new Hocsinh('15', 'Nguyễn Thị Thu Hằng', '09/01/2006', 'url("footage/hocsinh_footage/15.jpg")', 'Hãy sống như hoa Hướng Dương, luôn hướng về phía Mặt Trời tỏa nắng.', 'https://www.facebook.com/ntthang0901', '0961523025', 'duongtichqc@gmail.com'),
        new Hocsinh('16', 'Nguyễn Hồng Hạnh', '29/6/2006', 'url("footage/hocsinh_footage/16.jpg")', 'Có công mài sắt có ngày nên kim	', 'https://www.facebook.com/profile.php?id=100080820369750&mibextid=ZbWKwL', '0339825508', 'Honzhann2906@gmail.com'),
        new Hocsinh('17', 'Trương Văn Hiệp', '28/07/2006', 'url("footage/hocsinh_footage/17.jpg")', 'Có Những Cảm Xúc Chúng Ta Chỉ Cảm Nhận Được Cho Đến Khi Rời Xa Nó', 'https://www.facebook.com/profile.php?id=100035099512414', '0342809530', 'hiep80411@gmail.com'),
        new Hocsinh('18', 'Lê Huy Hiếu', '16/9/2006', 'url("footage/hocsinh_footage/18.jfif")', 'Tôi muốn giàu', 'https://www.facebook.com/profile.php?id=100052413280100', '0969270087', 'hieuu16092006@gmail.com'),
        new Hocsinh('19', 'Hoàng Thị Thu Hương', '07/02/2006', 'url("footage/hocsinh_footage/19.JPG")', 'đổ biết bao nhiêu máu, mồ hôi, nước mắt....</br>Cuối cùng tôi đã sống sót</br>Byeee', 'https://www.facebook.com/chinhi.thienhuong/', '0364371469', 'gaupanda2k3@gmail.com'),
        new Hocsinh('20', 'Nguyễn Đăng Huy', '13/10/2006', 'url("footage/hocsinh_footage/20.jpg")', 'Danh dự là điều thiêng liêng cao quý nhất', 'https://www.facebook.com/peinud', '0971748026', 'Fay135790@gmail.com'),
        new Hocsinh('21', 'Nguyễn Đậu Quang Huy', '01/10/2006', 'url("footage/hocsinh_footage/21.png")', 'STEP  BY STEP - DAY BY DAY', 'https://www.facebook.com/profile.php?id=100023832394538', '0378757359', 'ngqhuy1001@gmail.com'),
        new Hocsinh('22', 'Trần Văn Khánh', '27/03/2006', 'url("footage/hocsinh_footage/22.jpeg")', 'Giàu vì bạn, sang vì vợ =)))', 'https://www.facebook.com/tvk27080304', '0333328867', 'khanhhungcut27032006@gmail.com'),
        new Hocsinh('23', 'Thái Doãn Kiên', '18/11/2006', 'url("footage/hocsinh_footage/23.jpeg")', 'Bi chưa dừng xin đừng đứng dậy </br> Chưa có kết quả xin đừng dừng lại', 'https://www.facebook.com/profile.php?id=100070665421470&mibextid=LQQJ4d', '0961814319', 'kienthaidoan4@gmail.com'),
        new Hocsinh('24', 'Ngô Phương Linh', '24/11/2006', 'url("footage/hocsinh_footage/24.jpg")', 'Mệt nào rùi cũng sẽ qua như cầu vồng sau cơn mưa í, chẳng phải rất đẹp sao. Hy vọng mình bây giờ hay sau này lun tươi cười, zui zẻ, bình yên và thật thành công nhé', 'https://www.facebook.com/profile.php?id=100071753696180', '0332051611', 'phuonglinh241106@gmail.com'),
        new Hocsinh('25', 'Hồ Bá Lương', '06/01/2006', 'url("footage/hocsinh_footage/25.jpg")', 'врач', 'https://www.facebook.com/profile.php?id=100019609389741', '0332346757', 'baluong0601@gmail.com'),
        new Hocsinh('26', 'Trịnh Thị Khánh Ly', '05/01/2006', 'url("footage/hocsinh_footage/26.jpg")', "Don't give up on your dreams. Keep sleeping...", 'https://www.facebook.com/khanhly.trinh.9619', '0979509027', 'khanhlytrinh15@gmail.com'),
        new Hocsinh('27', 'Lưu Tuấn Mạnh', '7/10/2006', 'url("footage/hocsinh_footage/27.jpg")', 'Tốc độ thành công nhanh hơn tốc độ già đi của bố mẹ', 'https://www.facebook.com/profile.php?id=100055664130300&mibextid=ZbWKwL', '0983807628', 'luutuanmanh07102006@gmail.com'),
        new Hocsinh('28', 'Nghiêm Nghĩa', '09/07/2006', 'url("footage/hocsinh_footage/28.jpg")', '"Khi tất cả mọi thứ dường như chống lại bạn, hãy nhớ rằng máy bay cất cánh được nhờ ngược chiều gió" </br>Nhớ nhé 💚', 'https://www.facebook.com/nghia.nghiem.3150', '0862786277', 'nghianghiem6@gmail.com'),
        new Hocsinh('29', 'Ngô Phúc Nguyên', '30/10/2006', 'url("footage/hocsinh_footage/29.jpg")', 'Không phàn nàn, không giải thích!', 'https://www.facebook.com/profile.php?id=100079873676892', '0374814873', 'npn5979@gmail.com'),
        new Hocsinh('30', 'Trần Quang Nhật', '21/06/2006', 'url("footage/hocsinh_footage/30.JPG")', "I don't care what society says. I've never regretted doing anything. I will survive and do what I want to.", 'https://www.facebook.com/barca.cules.547', '0983613769', '2006quangnhat@gmail.com'),
        new Hocsinh('31', 'Trần Linh Nhi', '03/01/2006', 'url("footage/hocsinh_footage/31.jfif")', '', 'https://www.facebook.com/profile.php?id=100082135999540&mibextid=LQQJ4d', '0971137504', 'tlinhnhi2831@gmail.com'),
        new Hocsinh('32', 'Hồ Thị Thu Phương', '12/10/2006', 'url("footage/hocsinh_footage/32.jpg")', '"Ai cũng là thiên tài. Nhưng nếu bạn đánh giá một con cá qua khả năng leo cây của nó thì nó sẽ sống cả đời tin rằng mình là kẻ ngu ngốc" </br>-Albert Einstein-', 'https://www.facebook.com/profile.php?id=61552665020815&mibextid=ZbWKwL', '0981071401', 'hothithuphuong1210@gmail.com'),
        new Hocsinh('33', 'Hồ Thị Quyên', '16/6/2006', 'url("footage/hocsinh_footage/33.jpg")', 'A1k47', 'https://www.facebook.com/quyen06er?mibextid=ZbWKwL', '0978535269', 'Quyenho950@gmail.com'),
        new Hocsinh('34', 'Nguyễn Hữu Tài', '25/01/2006', 'url("footage/hocsinh_footage/34.jpg")', '“Tiếp tục luyện  tập ngay cả khi không có ai theo dõi bạn.” </br>– Alex Morgan –', 'https://www.facebook.com/profile.php?id=100084731051951&mibextid=LQQJ4d', '0369684637', 'nguyenhuutai25122006@gmail.com'),
        new Hocsinh('35', 'Nguyễn Phi Tài', '04/02/2006', 'url("footage/hocsinh_footage/35.jpg")', ':|', 'https://www.facebook.com/', '0986489768', 'tainguyenh2006@gmail.com'),
        new Hocsinh('36', 'Trần Ngọc Tài', '10/10/2006', 'url("footage/hocsinh_footage/36.jpg")', 'Làm ơn đừng bắt đền nữaaaa </br>- Ths.Trần Ngọc Tài - ', 'https://www.facebook.com/profile.php?id=100070454085843', '0827005961', 'tranngoctai101020@gmail.com'),
        new Hocsinh('37', 'Hoàng Danh Thái', '12/07/2006', 'url("footage/hocsinh_footage/37.jpg")', 'ok', 'https://www.facebook.com/profile.php?id=100062670963312', '0971604746', 'thai9bqc@gmail.com'),
        new Hocsinh('38', 'Hoàng Minh Thư', '26/05/2006', 'url("footage/hocsinh_footage/38.jpg")', '"Feel like Cinderella naega byeonhae"', 'https://www.facebook.com/h.m.t.2605', '0385087736', 'hoangminhthu26526@gmail.com'),
        new Hocsinh('39', 'Hồ Thị Thư', '24/01/2006', 'url("footage/hocsinh_footage/39.jpg")', 'Thời niên thiếu không thể quay lại ấy…', 'https://www.facebook.com/profile.php?id=100032057058239', '0393499180', 'thuh67647@gmail.com'),
        new Hocsinh('40', 'Phan Phương Thuý', '02/11/2006', 'url("footage/hocsinh_footage/40.jfif")', 'Hãy tin vào bản thân mình và không bao giờ từ bỏ giấc mơ của mình', 'https://www.facebook.com/phuonggthuyy2912', '0969322792', 'phanphuongthuyyy@gmail.com'),
        new Hocsinh('41', 'Dương Bảo Trâm', '08/08/2006', 'url("footage/hocsinh_footage/41.jfif")', '', 'https://www.facebook.com/profile.php?id=100040592173021&mibextid=LQQJ4d', '0965722403', 'tramduong339@gmail.com'),
        new Hocsinh('42', 'Nguyễn Huyền Trang', '25/12/2006', 'url("footage/hocsinh_footage/42.jpg")', 'Thành công nhé!', 'https://www.facebook.com/profile.php?id=100035118379199', '0778573463', 'nguyentrang25122006@gmail.com'),
        new Hocsinh('43', 'Đàm Minh Tuấn', '03/12/2006', 'url("footage/hocsinh_footage/43.JPG")', '"Những thay đổi đơn thuần về lượng, đến một mức độ nhất định, sẽ chuyển hóa thành những sự khác nhau về chất "</br>  -Ph.Ăng-ghen-', 'https://www.facebook.com/minhtuank47', '0865474657', 'damminhtuan2006@gmail.com', 'https://www.youtube.com/@minhtuan2119'),
        new Hocsinh('44', 'Nguyễn Như Tuệ', '02/05/2006', 'url("footage/hocsinh_footage/44.jpg")', 'Thật ra á', 'https://www.facebook.com/tue.nhu.3705?mibextid=ZbWKwL', '0343971327', 'nhutue252006@gmail.com'),
        new Hocsinh('45', 'Nguyễn Thị Thuý Xuân', '8/1/2006', 'url("footage/hocsinh_footage/45.jpg")', 'Sống là để tận hưởng và trải nghiệm', 'https://www.facebook.com/profile.php?id=100025906342514&mibextid=LQQJ4d', '0396899295', 'xuanhinh206@gmail.com'),
        
    ];

    var next = document.getElementById("next");
    var prev = document.getElementById("prev");
    var name = document.getElementById("name");
    var birth = document.getElementById("birth");
    var phone = document.getElementById("phone");
    var mail = document.getElementById("mail");
    var slogan = document.getElementById("slogan");
    var fb = document.getElementById("fb");
    var ytb = document.getElementById("ytb");
    var ytb_btn = document.getElementById("ytb_btn");
    var undone = document.querySelectorAll(".undone");
    var code_contact = document.getElementById("code_contact");
    var form = document.getElementById("form");
    var password_status = document.getElementById("password_status");
    var contact_status = document.getElementById('contact_status');
    var close_contact = document.getElementById('close_contact');
    var distance = document.getElementById('distance');
    
    document.getElementById("avt_right").style.backgroundImage = avt[1].pic;
    document.getElementById("avt_right_sec").style.backgroundImage = avt[2].pic;
    document.getElementById("avt_left").style.backgroundImage = avt[avt.length-1].pic;
    document.getElementById("avt_left_sec").style.backgroundImage = avt[avt.length-2].pic;
    document.getElementById("avt_main").style.backgroundImage = avt[0].pic;

    var avt_right_idx = 2;
    var avt_left_idx = avt.length-2;
    var avt_main = 0;

    next.addEventListener('click', function(){ 
        var slide = document.querySelector('.slide');
        var avtShow = document.querySelectorAll('.avt');
        slide.appendChild(avtShow[0]);

        avt_right_idx = avt_right_idx + 1;
        avt_left_idx = avt_left_idx +1;
        if(avt_right_idx === 45){
            avt_right_idx = 0;
        }
        if(avt_left_idx === 45){
            avt_left_idx = 0;
        }

        avt_main = avt_right_idx - 2;
        if(avt_right_idx === 1){
            avt_main = 44;
        }else if (avt_right_idx === 0) {
            avt_main = 43;
        } 
      
        
        avtShow[0].style.backgroundImage = avt[avt_right_idx].pic;
        name.innerHTML = avt[avt_main].name;
        birth.innerHTML = avt[avt_main].birth;
        mail.innerHTML = avt[avt_main].mail;
        phone.innerHTML = avt[avt_main].phone;
        slogan.innerHTML = avt[avt_main].slogan;
        fb.href = avt[avt_main].fb;
        if(avt[avt_main].ytb !== undefined){
            ytb.href = avt[avt_main].ytb;
            ytb_btn.style.display = 'block';
        }else{
            ytb_btn.style.display = 'none';
        }

        if (window.matchMedia("(max-width: 740px)").matches){
            var h = document.getElementById("slogan").clientHeight + 277 - 221 + 60;
            distance.style.height = `${h}`+'px';
        }
    });

    prev.addEventListener('click', function(){
        var slide = document.querySelector('.slide');
        var avtShow = document.querySelectorAll('.avt');
        slide.prepend(avtShow[avtShow.length-1]);

        if(avt_left_idx === 0){
            avt_left_idx = 45;
        }
        if(avt_right_idx === 0){
            avt_right_idx = 45;
        }
        avt_right_idx = avt_right_idx - 1; 
        avt_left_idx = avt_left_idx - 1;

        avt_main = avt_right_idx - 2;
        if(avt_right_idx === 1){
            avt_main = 44;
        }else if (avt_right_idx === 0) {
            avt_main = 43;
        } 
        
        avtShow[avtShow.length-1].style.backgroundImage = avt[avt_left_idx].pic;
        name.innerHTML = avt[avt_main].name;
        birth.innerHTML = avt[avt_main].birth;
        mail.innerHTML = avt[avt_main].mail;
        phone.innerHTML = avt[avt_main].phone;
        slogan.innerHTML = avt[avt_main].slogan; 
        fb.href = avt[avt_main].fb;
        if(avt[avt_main].ytb != undefined){
            ytb.href = avt[avt_main].ytb;
            ytb_btn.style.display = 'flex';
        }else{
            ytb_btn.style.display = 'none';
        }


        if (window.matchMedia("(max-width: 740px)").matches){
            var h = document.getElementById("slogan").clientHeight + 277 - 221 + 60;
            distance.style.height = `${h}`+'px';
        }
    });

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

    var n = 0;
    var key = 'hsa1k47';
    form.addEventListener('submit', function(event){
        event.preventDefault();
        if(code_contact.value === key){
            mail.innerHTML = avt[avt_main].mail;
            phone.innerHTML = avt[avt_main].phone;
            document.getElementById('contact').style.display = 'none';
            document.getElementById('contact_info').style.display = 'block';
            contact_status.innerText = 'Ẩn liên lạc';
            document.querySelector('.main_2').style.zIndex = '0';
        }else{
            n = n+1;
           password_status.innerHTML = 'Sai mật khẩu lần ' + n ;
        }
    });

    contact_status.addEventListener('click', function(){
        if(contact_status.innerText === 'Xem liên lạc'){
            document.getElementById('contact').style.display = 'flex';
            document.querySelector('.main_2').style.zIndex = '50';
        }
        else if(contact_status.innerText === 'Ẩn liên lạc'){
            document.getElementById('contact_info').style.display = 'none'
            contact_status.innerText = 'Xem liên lạc'
        }
    });

    close_contact.addEventListener('click', function(){
        document.getElementById('contact').style.display = 'none';
        document.querySelector('.main_2').style.zIndex = '0';

    })

    var menu_mobile = document.getElementById('menu_mobile');
    var t = 0;
    menu_mobile.onclick = function(){
        t = t + 1;
        if(t%2){
            document.querySelector('.nav_items').style.display = 'flex';
            menu_mobile.style.rotate = '90deg';
            document.querySelector('.logoA1').style.width = '0px';
            document.querySelector('.navbar').style.height = '120px';
            document.querySelector('.hocsinh').style.display = 'none';
        }else{
            document.querySelector('.nav_items').style.display = 'none';
            menu_mobile.style.rotate = '0deg';
            document.querySelector('.logoA1').style.width = '48px';
            document.querySelector('.navbar').style.height = '48px';
            document.querySelector('.hocsinh').style.display = 'block';

        }
    }
    
});

