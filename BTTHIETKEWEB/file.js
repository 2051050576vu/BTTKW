//Đăng kí
function signup(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        username : username,
        email : email,
        password : password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("Đăng ký thành công")
}

//Đăng nhập
function login(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    if(username == undefined){
        alert("Xin hãy nhập tài khoản và mật khẩu")
    }
    else if(username == "Nguyễn Hoàng Vũ" && email == "hoangvu125202@gmail.com" && password == "1111"){
        alert("Đăng nhập thành công")
        window.location.href="TrangChu.html"
    }
    else{
        alert("Đăng nhập không thành công")
    }
}

//Hiển thị mật khẩu
function showPassword(){
    var password = document.getElementById("password");

    if (password.type === "password"){
        password.type = "text";
    } else {
        password.type = "password";
    }
}

//Gửi email
function sendMail(){
    
    var params = {
        name:       document.getElementById("name").value,
        email:      document.getElementById("email").value,
        phone:      document.getElementById("phone").value,
    };
  
    const serviceID = "service_1gd0a31";
    const temlateID = "template_wmcnv1g";
  
    emailjs.send(serviceID, temlateID, params)
    alert("Your message sent successfully!");
  }

