const form = document.querySelector("form");
let fullName = document.getElementById("name");
let EmailId = document.getElementById("email");
let Number = document.getElementById("number");
let Subject = document.getElementById("subject");
let Message = document.getElementById("message");

function sendEmail(){
    let UsersMessage = `Full Name: ${fullName.value}<br> Email: ${EmailId.value}<br> Phone No.: ${Number.value}<br> Message: ${Message.value}`;
    Email.send({
        SecureToken : "49b5c832-69cb-4a26-a1ca-7a9cef5bc73a",
        // Host : "smtp.elasticemail.com",
        // Username : "vikasgupta93701@gmail.com",
        // Password : "4EE546AFE27FA2D0089987EF4A1785474A6D",
        To : 'vikasgupta93701@gmail.com',
        From : "vikasgupta93701@gmail.com",
        Subject : Subject.value,
        Body : UsersMessage
    }).then(
      message => {
        if(message === 'OK'){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });

        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});