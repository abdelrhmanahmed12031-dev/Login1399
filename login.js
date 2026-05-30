let input = document.getElementById('input');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let show = document.getElementById('show');
let submit = document.getElementById('sub');
let msg = document.getElementById('msg');


// show / hide password
show.onclick = function () {
   if (pass.type === "password") {
      pass.type = "text";
      show.innerHTML = "Hide Password";
   } else {
      pass.type = "password";
      show.innerHTML = "Show Password";
   }
}


// login
submit.onclick = function (e) {
   e.preventDefault();

   if (input.value == '' || email.value == '' || pass.value == '') {
      msg.innerHTML = "Please fill all fields";
      return;
   }

   if (!email.value.includes("@")) {
      msg.innerHTML = "Invalid email";
      return;
   }

   if (pass.value.length < 8) {
      msg.innerHTML = "Password too short";
      return;
   }

   if (pass.value.length > 12) {
      msg.innerHTML = "Password too long";
      return;
   }

   // حفظ الاسم
   localStorage.setItem("username", input.value);



   // نقل للصفحة التانية
   setTimeout(function () {
      window.location.href = "home.html";
   }, 1000);
}