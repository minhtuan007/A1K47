document.addEventListener('DOMContentLoaded', function() {
    function Hocsinh(stt, name, pic, slogan, fb, ytb){
        this.stt = stt;
        this.pic = pic;
        this.slogan = slogan;
        this.name = name;
        this.fb = fb;
        this.ytb = ytb;

    };
    var avt =  [
        new Hocsinh('1', 'Nguyễn Thuận An', 'url("footage/optimized/hocsinh/1.jpg")', '', 'https://www.facebook.com/xeom.an.311'),
        new Hocsinh('2', 'Lê Bùi Trâm Anh', 'url("footage/optimized/hocsinh/2.jpg")', 'Dù có sai nhưng nếu có bản lĩnh thì sai cũng thành đúng. Thế giới này chỉ công nhận kẻ mạnh, không chấp nhận kẻ yếu', 'https://www.facebook.com/le.b.anh.7359?mibextid=LQQJ4d'),
        new Hocsinh('3', 'Nguyễn Quỳnh Anh', 'url("footage/optimized/hocsinh/3.jpg")', 'Đậu NV1 điểm cao🍀🍀🍀', 'https://www.facebook.com/quynanh0812'),
        new Hocsinh('4', 'Hoàng Văn Chí', 'url("footage/optimized/hocsinh/4.jpg")', 'Yêu lớp', 'https://www.facebook.com/profile.php?id=100024156893457&mibextid=kFxxJD'),
        new Hocsinh('5', 'Phạm Mạnh Cường', 'url("footage/optimized/hocsinh/5.jpg")', 'Tiệc tàn, hẹn gặp lại\nĐược đi chung với mọi người một đoạn thật vinh dự', 'https://www.facebook.com/barcelona.live.716/'),
        new Hocsinh('6', 'Trần Thị Thùy Dung', 'url("footage/optimized/hocsinh/6.jpg")', 'Chẳng sợ gì hơn là cô đơn', 'https://www.facebook.com/profile.php?id=100073957577613&mibextid=ZbWKwL'),
        new Hocsinh('7', 'Đào Xuân Anh Dũng', 'url("footage/optimized/hocsinh/7.jpg")', 'Yêu bạn:))))', 'https://www.facebook.com/daoxuananhdung?mibextid=LQQJ4d'),
        new Hocsinh('8', 'Phan Đăng Dũng', 'url("footage/optimized/hocsinh/8.jpg")', '"Bước vào đời tay trắng cùng lắm lại trở về với trắng tay \nKhi ta yêu cuộc đời, cuộc đời cũng sẽ yêu ta đắm say"', 'https://www.facebook.com/profile.php?id=100089653197732', 'https://www.youtube.com/@doublep4536'),
        new Hocsinh('9', 'Trần Quang Dũng', 'url("footage/optimized/hocsinh/9.jpg")', 'Học - Học nữa - Học mãi', 'https://www.facebook.com/profile.php?id=100067477338146&mibextid=ZbWKwL'),
        new Hocsinh('10', 'Phạm Thị Xuân Đan', 'url("footage/optimized/hocsinh/10.jpg")', '"Đời là những chuyến đi\nĐi đúng đời sẽ đẹp"', 'https://www.facebook.com/linhdan.pham.1742006?mibextid=LQQJ4d'),
        new Hocsinh('11', 'Vũ Bùi Thúy Hà', 'url("footage/optimized/hocsinh/11.jpg")', 'Học - Học nữa - Học mãi', 'https://www.facebook.com/vubui.thuyha?mibextid=ZbWKwL'),
        new Hocsinh('12', 'Hồ Xuân Hai', 'url("footage/optimized/hocsinh/12.jpg")', 'Hi', 'https://web.facebook.com/profile.php?id=100089158823872'),
        new Hocsinh('13', 'Nguyễn Trường Hải', 'url("footage/optimized/hocsinh/13.jpg")', 'Cùng nhau đi học, cùng nhau lớn', 'https://www.facebook.com/profile.php?id=100032368830594&mibextid=ZbWKwL'),
        new Hocsinh('14', 'Trần Nguyễn Hoàng Hải', 'url("footage/optimized/hocsinh/14.jpg")', 'The only reason I got into math, was so I could find the shortest distance to you', 'https://www.facebook.com/tnhh.17506'),
        new Hocsinh('15', 'Nguyễn Thị Thu Hằng', 'url("footage/optimized/hocsinh/15.jpg")', 'Hãy sống như hoa Hướng Dương, luôn hướng về phía Mặt Trời tỏa nắng.', 'https://www.facebook.com/ntthang0901'),
        new Hocsinh('16', 'Nguyễn Hồng Hạnh', 'url("footage/optimized/hocsinh/16.jpg")', 'Có công mài sắt có ngày nên kim	', 'https://www.facebook.com/profile.php?id=100080820369750&mibextid=ZbWKwL'),
        new Hocsinh('17', 'Trương Văn Hiệp', 'url("footage/optimized/hocsinh/17.jpg")', 'Có Những Cảm Xúc Chúng Ta Chỉ Cảm Nhận Được Cho Đến Khi Rời Xa Nó', 'https://www.facebook.com/profile.php?id=100035099512414'),
        new Hocsinh('18', 'Lê Huy Hiếu', 'url("footage/optimized/hocsinh/18.jpg")', 'Tôi muốn giàu', 'https://www.facebook.com/profile.php?id=100052413280100'),
        new Hocsinh('19', 'Hoàng Thị Thu Hương', 'url("footage/optimized/hocsinh/19.jpg")', 'đổ biết bao nhiêu máu, mồ hôi, nước mắt....\nCuối cùng tôi đã sống sót\nByeee', 'https://www.facebook.com/chinhi.thienhuong/'),
        new Hocsinh('20', 'Nguyễn Đăng Huy', 'url("footage/optimized/hocsinh/20.jpg")', 'Danh dự là điều thiêng liêng cao quý nhất', 'https://www.facebook.com/peinud'),
        new Hocsinh('21', 'Nguyễn Đậu Quang Huy', 'url("footage/optimized/hocsinh/21.jpg")', 'STEP  BY STEP - DAY BY DAY', 'https://www.facebook.com/profile.php?id=100023832394538'),
        new Hocsinh('22', 'Trần Văn Khánh', 'url("footage/optimized/hocsinh/22.jpg")', 'Giàu vì bạn, sang vì vợ =)))', 'https://www.facebook.com/tvk27080304'),
        new Hocsinh('23', 'Thái Doãn Kiên', 'url("footage/optimized/hocsinh/23.jpg")', 'Bi chưa dừng xin đừng đứng dậy \n Chưa có kết quả xin đừng dừng lại', 'https://www.facebook.com/profile.php?id=100070665421470&mibextid=LQQJ4d'),
        new Hocsinh('24', 'Ngô Phương Linh', 'url("footage/optimized/hocsinh/24.jpg")', 'Mệt nào rùi cũng sẽ qua như cầu vồng sau cơn mưa í, chẳng phải rất đẹp sao. Hy vọng mình bây giờ hay sau này lun tươi cười, zui zẻ, bình yên và thật thành công nhé', 'https://www.facebook.com/profile.php?id=100071753696180'),
        new Hocsinh('25', 'Hồ Bá Lương', 'url("footage/optimized/hocsinh/25.jpg")', 'врач', 'https://www.facebook.com/profile.php?id=100019609389741'),
        new Hocsinh('26', 'Trịnh Thị Khánh Ly', 'url("footage/optimized/hocsinh/26.jpg")', "Don't give up on your dreams. Keep sleeping...", 'https://www.facebook.com/khanhly.trinh.9619'),
        new Hocsinh('27', 'Lưu Tuấn Mạnh', 'url("footage/optimized/hocsinh/27.jpg")', 'Tốc độ thành công nhanh hơn tốc độ già đi của bố mẹ', 'https://www.facebook.com/profile.php?id=100055664130300&mibextid=ZbWKwL'),
        new Hocsinh('28', 'Nghiêm Nghĩa', 'url("footage/optimized/hocsinh/28.jpg")', '"Khi tất cả mọi thứ dường như chống lại bạn, hãy nhớ rằng máy bay cất cánh được nhờ ngược chiều gió" \nNhớ nhé 💚', 'https://www.facebook.com/nghia.nghiem.3150'),
        new Hocsinh('29', 'Ngô Phúc Nguyên', 'url("footage/optimized/hocsinh/29.jpg")', 'Không phàn nàn, không giải thích!', 'https://www.facebook.com/profile.php?id=100079873676892'),
        new Hocsinh('30', 'Trần Quang Nhật', 'url("footage/optimized/hocsinh/30.jpg")', "I don't care what society says. I've never regretted doing anything. I will survive and do what I want to.", 'https://www.facebook.com/barca.cules.547'),
        new Hocsinh('31', 'Trần Linh Nhi', 'url("footage/optimized/hocsinh/31.jpg")', '', 'https://www.facebook.com/profile.php?id=100082135999540&mibextid=LQQJ4d'),
        new Hocsinh('32', 'Hồ Thị Thu Phương', 'url("footage/optimized/hocsinh/32.jpg")', '"Ai cũng là thiên tài. Nhưng nếu bạn đánh giá một con cá qua khả năng leo cây của nó thì nó sẽ sống cả đời tin rằng mình là kẻ ngu ngốc" \n-Albert Einstein-', 'https://www.facebook.com/profile.php?id=61552665020815&mibextid=ZbWKwL'),
        new Hocsinh('33', 'Hồ Thị Quyên', 'url("footage/optimized/hocsinh/33.jpg")', 'A1k47', 'https://www.facebook.com/quyen06er?mibextid=ZbWKwL'),
        new Hocsinh('34', 'Nguyễn Hữu Tài', 'url("footage/optimized/hocsinh/34.jpg")', '“Tiếp tục luyện  tập ngay cả khi không có ai theo dõi bạn.” \n– Alex Morgan –', 'https://www.facebook.com/profile.php?id=100084731051951&mibextid=LQQJ4d'),
        new Hocsinh('35', 'Nguyễn Phi Tài', 'url("footage/optimized/hocsinh/35.jpg")', ':|', 'https://www.facebook.com/'),
        new Hocsinh('36', 'Trần Ngọc Tài', 'url("footage/optimized/hocsinh/36.jpg")', 'Làm ơn đừng bắt đền nữaaaa \n- Ths.Trần Ngọc Tài - ', 'https://www.facebook.com/profile.php?id=100070454085843'),
        new Hocsinh('37', 'Hoàng Danh Thái', 'url("footage/optimized/hocsinh/37.jpg")', 'ok', 'https://www.facebook.com/profile.php?id=100062670963312'),
        new Hocsinh('38', 'Hoàng Minh Thư', 'url("footage/optimized/hocsinh/38.jpg")', '"Feel like Cinderella naega byeonhae"', 'https://www.facebook.com/h.m.t.2605'),
        new Hocsinh('39', 'Hồ Thị Thư', 'url("footage/optimized/hocsinh/39.jpg")', 'Thời niên thiếu không thể quay lại ấy…', 'https://www.facebook.com/profile.php?id=100032057058239'),
        new Hocsinh('40', 'Phan Phương Thuý', 'url("footage/optimized/hocsinh/40.jpg")', 'Hãy tin vào bản thân mình và không bao giờ từ bỏ giấc mơ của mình', 'https://www.facebook.com/phuonggthuyy2912'),
        new Hocsinh('41', 'Dương Bảo Trâm', 'url("footage/optimized/hocsinh/41.jpg")', '', 'https://www.facebook.com/profile.php?id=100040592173021&mibextid=LQQJ4d'),
        new Hocsinh('42', 'Nguyễn Huyền Trang', 'url("footage/optimized/hocsinh/42.jpg")', 'Thành công nhé!', 'https://www.facebook.com/profile.php?id=100035118379199'),
        new Hocsinh('43', 'Đàm Minh Tuấn', 'url("footage/optimized/hocsinh/43.jpg")', '"Những thay đổi đơn thuần về lượng, đến một mức độ nhất định, sẽ chuyển hóa thành những sự khác nhau về chất "\n  -Ph.Ăng-ghen-', 'https://www.facebook.com/minhtuank47', 'https://www.youtube.com/@minhtuan2119'),
        new Hocsinh('44', 'Nguyễn Như Tuệ', 'url("footage/optimized/hocsinh/44.jpg")', 'Thật ra á', 'https://www.facebook.com/tue.nhu.3705?mibextid=ZbWKwL'),
        new Hocsinh('45', 'Nguyễn Thị Thuý Xuân', 'url("footage/optimized/hocsinh/45.jpg")', 'Sống là để tận hưởng và trải nghiệm', 'https://www.facebook.com/profile.php?id=100025906342514&mibextid=LQQJ4d'),
        
    ];

    var next = document.getElementById("next");
    var prev = document.getElementById("prev");
    var name = document.getElementById("name");
    var slogan = document.getElementById("slogan");
    var fb = document.getElementById("fb");
    var ytb = document.getElementById("ytb");
    var ytb_btn = document.getElementById("ytb_btn");
    var undone = document.querySelectorAll(".undone");
    var distance = document.getElementById('distance');
    var privateInfoButton = document.getElementById('private_info_button');
    var privateInfoPanel = document.getElementById('private_info_panel');
    var privateBirth = document.getElementById('private_birth');
    var privatePhone = document.getElementById('private_phone');
    var privateEmail = document.getElementById('private_email');
    var privateLockButton = document.getElementById('private_lock_button');
    var privateDialog = document.getElementById('private_dialog');
    var privateDialogClose = document.getElementById('private_dialog_close');
    var privateUnlockForm = document.getElementById('private_unlock_form');
    var privatePassword = document.getElementById('private_password');
    var privatePasswordStatus = document.getElementById('private_password_status');
    var privateRecords = null;
    
    document.getElementById("avt_right").style.backgroundImage = avt[1].pic;
    document.getElementById("avt_right_sec").style.backgroundImage = avt[2].pic;
    document.getElementById("avt_left").style.backgroundImage = avt[avt.length-1].pic;
    document.getElementById("avt_left_sec").style.backgroundImage = avt[avt.length-2].pic;
    document.getElementById("avt_main").style.backgroundImage = avt[0].pic;

    var avt_right_idx = 2;
    var avt_left_idx = avt.length-2;
    var avt_main = 0;

    function updateMobileDistance(){
        if(window.matchMedia("(max-width: 740px)").matches){
            var privateHeight = privateInfoButton.offsetHeight + 14;
            if(!privateInfoPanel.hidden){
                privateHeight += privateInfoPanel.scrollHeight + 12;
            }
            distance.style.height = `${slogan.clientHeight + 116 + privateHeight}px`;
        }
    }

    function decodeBase64(value){
        var binary = window.atob(value);
        var bytes = new Uint8Array(binary.length);
        for(var i = 0; i < binary.length; i += 1){
            bytes[i] = binary.charCodeAt(i);
        }
        return bytes;
    }

    async function decryptPrivateRecords(password){
        if(!window.crypto || !window.crypto.subtle){
            throw new Error('Trình duyệt không hỗ trợ giải mã an toàn.');
        }

        var response = await fetch('./data/student-private.enc.json', {
            cache: 'no-store',
            credentials: 'same-origin'
        });
        if(!response.ok){
            throw new Error('Không tải được dữ liệu mã hóa.');
        }

        var envelope = await response.json();
        if(envelope.version !== 1 || envelope.kdf.name !== 'PBKDF2' || envelope.cipher.name !== 'AES-GCM'){
            throw new Error('Định dạng dữ liệu mã hóa không hợp lệ.');
        }

        var passwordKey = await window.crypto.subtle.importKey(
            'raw',
            new TextEncoder().encode(password),
            'PBKDF2',
            false,
            ['deriveKey']
        );
        var key = await window.crypto.subtle.deriveKey({
            name: 'PBKDF2',
            salt: decodeBase64(envelope.kdf.salt),
            iterations: envelope.kdf.iterations,
            hash: envelope.kdf.hash
        }, passwordKey, {
            name: 'AES-GCM',
            length: 256
        }, false, ['decrypt']);

        var plaintext = await window.crypto.subtle.decrypt({
            name: 'AES-GCM',
            iv: decodeBase64(envelope.cipher.iv),
            tagLength: envelope.cipher.tagLength,
            additionalData: new TextEncoder().encode(envelope.cipher.additionalData)
        }, key, decodeBase64(envelope.ciphertext));

        var records = JSON.parse(new TextDecoder().decode(plaintext));
        if(!Array.isArray(records) || records.length !== avt.length){
            throw new Error('Dữ liệu sau giải mã không hợp lệ.');
        }
        return new Map(records.map(function(record){ return [String(record.id), record]; }));
    }

    function renderPrivateInfo(){
        if(!privateRecords || privateInfoPanel.hidden){
            return;
        }
        var record = privateRecords.get(String(avt[avt_main].stt));
        privateBirth.textContent = record && record.birth ? record.birth : 'Không cung cấp';
        privatePhone.textContent = record && record.phone ? record.phone : 'Không cung cấp';
        privateEmail.textContent = record && record.email ? record.email : 'Không cung cấp';
        updateMobileDistance();
    }

    function openPrivateDialog(){
        privatePasswordStatus.textContent = '';
        privateDialog.hidden = false;
        document.body.style.overflow = 'hidden';
        window.setTimeout(function(){ privatePassword.focus(); }, 0);
    }

    function closePrivateDialog(){
        privateDialog.hidden = true;
        privatePassword.value = '';
        privatePasswordStatus.textContent = '';
        document.body.style.overflow = '';
        privateInfoButton.focus();
    }

    function lockPrivateInfo(){
        privateRecords = null;
        privateInfoPanel.hidden = true;
        privateBirth.textContent = '';
        privatePhone.textContent = '';
        privateEmail.textContent = '';
        privateInfoButton.textContent = 'Xem thêm thông tin';
        updateMobileDistance();
    }

    function updateProfile(index){
        var student = avt[index];
        name.textContent = student.name;
        slogan.textContent = student.slogan;
        fb.href = student.fb;

        if(student.ytb !== undefined){
            ytb.href = student.ytb;
            ytb_btn.style.display = 'flex';
        }else{
            ytb.removeAttribute('href');
            ytb_btn.style.display = 'none';
        }

        renderPrivateInfo();

        updateMobileDistance();
    }

    updateProfile(avt_main);

    privateInfoButton.addEventListener('click', function(){
        if(privateRecords){
            privateInfoPanel.hidden = !privateInfoPanel.hidden;
            privateInfoButton.textContent = privateInfoPanel.hidden ? 'Xem thêm thông tin' : 'Ẩn thông tin';
            renderPrivateInfo();
            updateMobileDistance();
            return;
        }
        openPrivateDialog();
    });

    privateDialogClose.addEventListener('click', closePrivateDialog);
    privateDialog.addEventListener('click', function(event){
        if(event.target === privateDialog){
            closePrivateDialog();
        }
    });
    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape' && !privateDialog.hidden){
            closePrivateDialog();
        }
    });
    privateLockButton.addEventListener('click', lockPrivateInfo);
    privateUnlockForm.addEventListener('submit', async function(event){
        event.preventDefault();
        var submitButton = privateUnlockForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        privatePasswordStatus.textContent = 'Đang kiểm tra...';
        try{
            privateRecords = await decryptPrivateRecords(privatePassword.value);
            privateInfoPanel.hidden = false;
            privateInfoButton.textContent = 'Ẩn thông tin';
            renderPrivateInfo();
            closePrivateDialog();
        }catch(error){
            privateRecords = null;
            privatePasswordStatus.textContent = error.message === 'Không tải được dữ liệu mã hóa.' || error.message === 'Trình duyệt không hỗ trợ giải mã an toàn.'
                ? error.message
                : 'Mật khẩu không đúng hoặc dữ liệu đã bị thay đổi.';
            privatePassword.select();
        }finally{
            submitButton.disabled = false;
        }
    });

    next.addEventListener('click', function(){
        var slide = document.querySelector('.slide');
        var avtShow = document.querySelectorAll('.avt');
        slide.appendChild(avtShow[0]);

        avt_right_idx = (avt_right_idx + 1) % avt.length;
        avt_left_idx = (avt_left_idx + 1) % avt.length;
        avt_main = (avt_right_idx - 2 + avt.length) % avt.length;

        avtShow[0].style.backgroundImage = avt[avt_right_idx].pic;
        updateProfile(avt_main);
    });

    prev.addEventListener('click', function(){
        var slide = document.querySelector('.slide');
        var avtShow = document.querySelectorAll('.avt');
        slide.prepend(avtShow[avtShow.length-1]);

        avt_right_idx = (avt_right_idx - 1 + avt.length) % avt.length;
        avt_left_idx = (avt_left_idx - 1 + avt.length) % avt.length;
        avt_main = (avt_right_idx - 2 + avt.length) % avt.length;

        avtShow[avtShow.length-1].style.backgroundImage = avt[avt_left_idx].pic;
        updateProfile(avt_main);
    });

    undone.forEach(function(undone) {
        undone.addEventListener('click', function() {
            document.querySelector(".notify").classList.add('hidden_notify');
            document.getElementById("notify_text").textContent = 'Tính năng đang được hoàn thiện, bạn chờ nhé <3';
            setTimeout(function() {
                document.getElementById("notify_text").textContent = '';
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

