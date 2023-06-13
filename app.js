var getItem = localStorage.getItem("UserData"); 
var mT;
if (getItem) {
  mT = JSON.parse(getItem);
} else {
  mT = [];
}
 //convert string ko arry me
var subMore = document.getElementById("subMore").addEventListener("click", function () {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var number = document.getElementById("number");

    var students = {
        nameUser: name.value,
        emailUser: email.value,
        passwordUser: password.value,
        numberUser: number.value,
    }

    mT.push(students);
    console.log(mT);
    var stringify = JSON.stringify(mT);  // convert array ko string me
    localStorage.setItem("UserData", stringify);
     if(name.value != "" && email.value != "" && password.value != "" && number.value != ""){
        Swal.fire(
            'Data save sucsecfully',
            'Welcome to OLX website?',
            ''
          );
          name.value = ""
          email.value = ""
          password.value = ""
          number.value = ""
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Plese Fill the Input',
            text: ' Is Not In This',
        });

    }
});













