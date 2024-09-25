


var btn = document.getElementById("button");
var users = [];


btn && btn.addEventListener('click', function () {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var birthDay = document.getElementById("birthdayDate");
    var phoneNumber = document.getElementById("phoneNum");
    var password = document.getElementById("password");
    var emailAddress = document.getElementById("emailAddress");
    if (!firstName.value || !lastName.value || !birthDay.value || !phoneNumber.value || !password.value || !emailAddress.value) {
        alert("Please fill in all fields.");
        return;
    }
    var userobj = {
        name: firstName.value,
        lastName: lastName.value,
        birthday: birthDay.value,
        phoneNumber: phoneNumber.value,
        emailAddress: emailAddress.value,
        password: password.value
    };
    var users = JSON.parse(localStorage.getItem("usersData"))
    users.push(userobj);
    localStorage.setItem('usersData', JSON.stringify(users));
    firstName.value = "";
    emailAddress.value = "";
    phoneNumber.value = "";
    birthDay.value = "";
    lastName.value = "";
    password.value = "";
    window.location.href = "login.html"
    console.log(users)

});

var login = document.getElementById("login")
login && login.addEventListener('click', function () {
    var users = JSON.parse(localStorage.getItem("usersData")) //array of object
    var loginEmail = document.getElementById("form3Example3")
    var loginPass = document.getElementById("form3Example4")
    var userFound = false
    for (var user of users) {
        if (user.emailAddress == loginEmail.value && user.password == loginPass.value) {
            swal({
                title: "Sweet!",
                text: "welcom" + user.name + "login successfully",
                imageUrl: "images/thumbs-up.jpg"
            });
            userFound = true
            break;
        }
    }
    if (!userFound) {
        swal({
            title: "Sweet!",
            imageUrl: "images/360_F_489394725_Oox6jg48u2K0FSk4RlPCzqkU7Qvu2BSu.jpg",
            text: "welcome new user",
            timer: 4000
        });

    }

    // for (var user of users) {
    //     if (user.emailAddress == loginEmail.value && user.password == loginPass.value) {
    //         swal({
    //             title: "Sweet!",
    //             text: "login successfully",
    //             imageUrl: "images/thumbs-up.jpg"
    //         });

    //     } else {
    //         if(user.emailAddress != loginEmail.value && user.password != loginPass.value){
    //             swal({

    //                 text: "welcome" + user.name,
    //                 timer: 2000
    //             });
    //         }

    //     }
    // }

})


