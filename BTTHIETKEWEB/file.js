//Hiển thị mật khẩu
function showPassword(){
    var password = document.getElementById("input-password");

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

