//Trang dang ky
function formValidate(dk){
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailReg.test(dk.email.value) == false){
        alert("Vui lòng nhập Email hợp lệ")
        dk.email.focus();
        return false;
    }
    if(dk.psw.value.length < 8){
        alert("Mật khẩu phải trên 8 ký tự");
        dk.psw.focus();
        return false;
    }
    if(dk.psw2.value.length < 8){
        alert("Mật khẩu phải trên 8 ký tự");
        dk.psw2.focus();
        return false;
    }
    if(dk.psw.value != dk.psw2.value){
        alert("Mật khẩu và nhập lại mật khẩu không trùng nhau");
        dk.psw2.focus();
        return false;
    }
    alert("Đã gửi dữ liệu Đăng ký");
    return true;
}
//Trang dang nhap
function formValidate(dn){
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailReg.test(dn.email.value) == false){
        alert("Email không đúng định dạng")
        dn.email.focus();
        return false;
    }
    if(dn.psw.value.length < 8){
        alert("Mật khẩu phải có ít nhất 8 ký tự")
        dn.psw.focus();
        return false;
    }
    alert("Đã gửi dữ liệu Đăng nhập")
    return true;
}
//Lien he
function formValidate(lh){
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(lh.name.value.length < 4){
        alert("Họ tên phải có độ dài tối thiểu là 4 ký tự");
        lh.name.focus();
        return false;
    }
    if(emailReg.test(lh.email.value) == false){
        alert("Vui lòng nhập Email đúng định dạng")
        lh.email.focus();
        return false;
    }
    if(lh.details.value.length < 10){
        alert("Nội dung liên hệ phải có độ dài tối thiểu là 10 ký tự");
        lh.details.focus();
        return false;
    }
    alert("Đã gửi thông tin thành công")
    return true;
}