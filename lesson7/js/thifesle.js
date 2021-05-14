
let userName = prompt("Mời nhập tên đăng nhập", '');

if (userName == 'Admin') {
    alert("mời nhập mật khẩu");
    let Pass= prompt("mời nhập mật khẩu");
    if (Pass=="TheMaster")
    {
        alert("Welcome");
    }
    else  if( Pass==null)
    {
        alert("Cancel");
    }
    else {
        alert("Wrong password");
    }
} else if (userName == null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}