function emailSend(){

   var userName = document.getElementById('name').value;
   var phone = document.getElementById('phone').value;
   var email = document.getElementById('email').value;
   var message = document.getElementById('mesage').value;

   var messageBody = "Name " + userName +
   "<br/> Phone " + phone +
   "<br/> Email " + email;
   Email.send({
   Host : "smtp.elasticemail.com",
   Username : "effahaboagye8888@gmail.com",
   Password : "FF4641995F0E1A7B7429AE69896EE6C6865D",
   To : 'effahaboagye8@gmail.com',
   From : "effahaboagye8888@gmail.com",
   Subject : "This is the subject",
   Body : messageBody
}).then(
 message => {
     if(message=='OK'){
         swal("Secussful", "You clicked the button!", "success");
     }
     else{
         swal("Error", "You clicked the button!", "error");
     }
 }
);
}
