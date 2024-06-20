document.addEventListener('DOMContentLoaded', function() {
    function Hocsinh(stt, name, birth, pic, slogan, phone){
        this.stt = stt;
        this.pic = pic;
        this.slogan = slogan;
        this.name = name;
        this. birth = birth;
        this.phone = phone;
    };
    var avt =  [
        new Hocsinh('1', 'Nguyễn Thuận An', '19/05/2006', 'url("footage/hocsinh_footage/1.png")', 'Your goal should never be starting a company. Focus on the change you want to make', '0987654321'),
        new Hocsinh('2', 'Lê Bùi Trâm Anh', '28/09/2006', 'url("footage/hocsinh_footage/2.png")', 'Dù có sai nhưng nếu có bản lĩnh thì sai cũng thành đúng. Thế giới này chỉ công nhận kẻ mạnh, không chấp nhận kẻ yếu', '0987654321'),
        new Hocsinh('3', 'Nguyễn Quỳnh Anh', '12/08/2006', 'url("footage/hocsinh_footage/3.jpg")', 'Đậu NV1 điểm cao🍀🍀🍀', '0987654321'),
        new Hocsinh('4', 'Hoàng Văn Chí', '10/08/2006', 'url("footage/hocsinh_footage/4.jpg")', 'c', '0987654321'),
        new Hocsinh('5', 'Phạm Mạnh Cường', '09/09/2006', 'url("footage/hocsinh_footage/5.jpg")', 'Thành cựu học sinh rồi nha cả vườn', '0987654321'),
        new Hocsinh('6', 'Trần Thị Thùy Dung', '26/10/2006', 'url(" ")', 'slogan', '0987654321'),
        new Hocsinh('7', 'Đào Xuân Anh Dũng', '01/10/2006', 'url("footage/hocsinh_footage/7.jpg")', 'Học im lặng, nhưng tinh thần vẫn sôi động', '0987654321'),
        new Hocsinh('8', 'Phan Đăng Dũng', '29/11/2006', 'url("footage/hocsinh_footage/8.jpg")', '"Cuộc sống của mỗi người cũng giống như 1 trận đấu quyền anh, </br>chúng ta chỉ thực sự thất bại khi chúng ta từ chối đứng dậy..."', '0987654321'),
        new Hocsinh('9', 'Trần Quang Dũng', '22/02/2006', 'url("footage/hocsinh_footage/09.JPG")', 'Học- Học nữa- Học mãi', '0987654321'),
        new Hocsinh('10', 'Phạm Thị Xuân Đan', '17/04/2006', 'url(" ")', 'slogan', '0987654321'),
        new Hocsinh('11', 'Vũ Bùi Thúy Hà', '05/07/2006', 'url("footage/hocsinh_footage/11.jpg")', 'Bạn biết điều tuyệt vời nhất của một tấm ảnh là gì không? Là nó sẽ không bao giờ thay đổi dù cho những người trong tấm ảnh đã đổi thay.', '0987654321'),
        new Hocsinh('12', 'Hồ Xuân Hai', '20/09/2006', 'url(" ")', 'slogan', '0987654321'),
        new Hocsinh('13', 'Nguyễn Trường Hải', '04/11/2006', 'url(" ")', 'slogan', '0987654321'),
        new Hocsinh('14', 'Trần Nguyễn Hoàng Hải', '17/05/2006', 'url("footage/hocsinh_footage/14.JPG")', 'slogan', '0987654321'),
        new Hocsinh('15', 'Nguyễn Thị Thanh Hằng', '01/09/2006', 'url("footage/hocsinh_footage/15.jpg")', 'Nỗ lực của bạn là dáng vẻ đẹp nhất, rực rỡ nhất', '0987654321'),
        new Hocsinh('16', 'Nguyễn Thị Hồng Hạnh', '29/06/2006', 'url(" ")', 'slogan', '0987654321'),
        new Hocsinh('17', 'Trương Văn Hiệp', '28/07/2006', 'url(" ")', 'slogan', '0987654321'),
        new Hocsinh('18', 'Lê Huy Hiếu', '16/09/2006', 'url(" ")', 'slogan', '0987654321'),
        new Hocsinh('19', 'Hoàng Thị Thu Hương', '02/07/2006', 'url("footage/hocsinh_footage/19.JPG")', '"Muốn ra khỏi trường thật sớm </br>Cũng.... muốn chậm lại một chút "', '0987654321'),
        new Hocsinh('20', 'Nguyễn Đăng Huy', '13/10/2006', 'url(" ")', 'slogan', '0987654321'),
        new Hocsinh('21', 'Nguyễn Đậu Quang Huy', '01/10/2006', 'url(" ")', 'slogan', '0987654321'),
        new Hocsinh('22', 'Trần Văn Khánh', '27/03/2006', 'url("footage/hocsinh_footage/22.jpeg")', 'Giàu vì bạn, sang vì vợ =)))', '0987654321'),
        new Hocsinh('23', 'Thái Doãn Kiên', '18/11/2006', 'url("footage/hocsinh_footage/23.jpeg")', 'Nohope ', '0987654321'),
        new Hocsinh('24', 'Ngô Phương Linh', '24/11/2006', 'url(" ")', 'Today is bad. Tomorrow will be worse but the day after tomorrow will be sunshine', '0987654321'),
        new Hocsinh('25', 'Hồ Bá Lương', '01/06/2006', 'url("footage/hocsinh_footage/25.jpg")', '12 năm ăn học để rồi cố gắng đỗ nv1, và lúc đỗ được ngành này mọi người sẽ phải gọi mình với cái tên đầy thân thương "Lương Y"🤣', '0987654321'),
        new Hocsinh('26', 'Trịnh Thị Khánh Ly', '05/01/2006', 'url("footage/hocsinh_footage/26.jpg")', "Don't give up on your dreams. Keep sleeping...", '0987654321'),
        new Hocsinh('27', 'Lưu Tuấn Mạnh', '10/07/2006', 'url(" ")', 'slogan', '0987654321'),
        new Hocsinh('28', 'Nghiêm Thị Nghĩa', '07/09/2006', 'url("footage/hocsinh_footage/28.jpg")', '"Khi tất cả mọi thứ dường như chống lại bạn, hãy nhớ rằng máy bay cất cánh được nhờ ngược chiều gió" </br>Nhớ nhé 💚', '0987654321'),
        new Hocsinh('29', 'Ngô Phúc Nguyên', '30/10/2006', 'url(" ")', 'slogan', '0987654321'),
        new Hocsinh('30', 'Trần Quang Nhật', '21/06/2006', 'url("footage/hocsinh_footage/30.JPG")', "I don't care what society says. I've never regretted doing anything. I will survive and do what I want to.", '0987654321'),
        new Hocsinh('31', 'Trần Linh Nhi', '01/03/2006', 'url(" ")', 'slogan', '0987654321'),
        new Hocsinh('32', 'Hồ Thị Thu Phương', '10/12/2006', 'url(" ")', '"Ai cũng là thiên tài. Nhưng nếu bạn đánh giá một con cá qua khả năng leo cây của nó thì nó sẽ sống cả đời tin rằng mình là kẻ ngu ngốc" </br>-Albert Einstein- ', '0987654321'),
        new Hocsinh('33', 'Hồ Thị Quyên', '16/06/2006', 'url(" ")', 'slogan', '0987654321'),
        new Hocsinh('34', 'Nguyễn Hữu Tài', '25/01/2006', 'url("footage/hocsinh_footage/34.jpeg")', 'No risk no story', '0987654321'),
        new Hocsinh('35', 'Nguyễn Phi Tài', '02/04/2006', 'url(" ")', 'slogan', '0987654321'),
        new Hocsinh('36', 'Trần Ngọc Tài', '10/10/2006', 'url(" ")', 'slogan', '0987654321'),
        new Hocsinh('37', 'Hoàng Danh Thái', '07/12/2006', 'url(" ")', 'slogan', '0987654321'),
        new Hocsinh('38', 'Hoàng Minh Thư', '26/05/2006', 'url(" ")', 'slogan', '0987654321'),
        new Hocsinh('39', 'Hồ Thị Thư', '24/01/2006', 'url("footage/hocsinh_footage/39.jpg")', 'Thời niên thiếu không thể quay lại ấy…', '0987654321'),
        new Hocsinh('40', 'Phan Phương Thúy', '11/02/2006', 'url(" ")', 'Hãy tin vào bản thân mình và không bao giờ từ bỏ giấc mơ của mình', '0987654321'),
        new Hocsinh('41', 'Dương Bảo Trâm', '08/08/2006', 'url("")', 'slogan', '0987654321'),
        new Hocsinh('42', 'Nguyễn Huyền Trang', '15/12/2006', 'url("")', 'slogan', '0987654321'),
        new Hocsinh('43', 'Đàm Minh Tuấn', '12/03/2006', 'url("footage/hocsinh_footage/43.JPG")', '"Những thay đổi đơn thuần về lượng, đến một mức độ nhất định, sẽ chuyển hóa thành những sự khác nhau về chất "</br>  -Ph.Ăng-ghen-', '0987654321'),
        new Hocsinh('44', 'Nguyễn Như Tuệ', '05/02/2006', 'url("")', 'slogan', '0987654321'),
        new Hocsinh('45', 'Nguyễn Thị Thúy Xuân', '01/08/2006', 'url("")', 'slogan', '0987654321'),
    ];
    console.log(avt[0].pic)

    var next = document.getElementById("next");
    var prev = document.getElementById("prev");
    var name = document.getElementById("name");
    var birth = document.getElementById("birth");
    var phone = document.getElementById("phone");
    var mail = document.getElementById("mail");
    var slogan = document.getElementById("slogan");
    
    document.getElementById("avt_right").style.backgroundImage = avt[1].pic;
    document.getElementById("avt_right_sec").style.backgroundImage = avt[2].pic;
    document.getElementById("avt_left").style.backgroundImage = avt[avt.length-1].pic;
    document.getElementById("avt_left_sec").style.backgroundImage = avt[avt.length-2].pic;
    document.getElementById("avt_main").style.backgroundImage = avt[0].pic;

    var avt_right_idx = 2;//anhr 2
    var avt_left_idx = avt.length-2;//anhr cuối
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
        slogan.innerHTML = avt[avt_main].slogan
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
        slogan.innerHTML = avt[avt_main].slogan

        
    });


    
});

