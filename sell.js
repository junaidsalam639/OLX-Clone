function product() {
    var products = []
    let obg = {
        name: document.getElementById("input1").value,
        description: document.getElementById("input2").value,
        brands: document.getElementById("input3").value,
        image: document.getElementById("input4").value,
        price: document.getElementById("input5").value,
        location: document.getElementById("input6").value,
        profileName: document.getElementById("input7").value,
        ptofilePhone: document.getElementById("input8").value,
        phoneShow: document.getElementById("input9").value
    }
    console.log(obg);
    products = JSON.parse(localStorage.getItem("products")) ? JSON.parse(localStorage.getItem(
        "products")) : []
        products.push(obg)
        localStorage.setItem("products", JSON.stringify(products));
    }
    
    function product() {
        let input1 = document.getElementById("input1");
        let input2 = document.getElementById("input2");
        let input5 = document.getElementById("input5");
        let input6 = document.getElementById("input6");
        let input8 = document.getElementById("input8");
        let input9 = document.getElementById("input9");
        let prevStudents =  localStorage.getItem("NameNumber");//get from localStorage
        let mT = prevStudents ? JSON.parse(prevStudents) : [];
        let obj = {
            name1 : input8.value,
            number : input9.value,
        }
        mT.push(obj);
        let stringify = JSON.stringify(mT);
        localStorage.setItem("NameNumber" , stringify);

        let user = document.getElementById("user");

    if (input1.value != "" && input2.value != "" && input5.value != "" && input6.value != "" && input8.value != "" && input9.value != "") {
        document.getElementById("user").innerHTML += `
        <div class="style" id="style">
        <img src="${input6.value}" alt="" id="imgage">
        <h3 id="title-title" class="fw-bold">${"Title : "+input1.value}</h3>
        <h3 id="price-price" class="fw-bold">${"Price : "+input5.value}</h3>
        <h3 id="description" class="fw-bold">${"Description : "+input2.value}</h3>
        <button onclick="remove()">Buy Now</button></div>`;
        Swal.fire(
            'Data save sucsecfully',
            'Welcome to OLX website?',
            ''
            );
            input1.value = "";
            input2.value = "";
            input5 .value = "";
            input6.value = "";
            // input8.value = "";
            // input9.value = "";
            saveData();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Plese Fill the Input',
                text: ' Is Not In This',
            });
        }
    }
    

    function remove() {
        let input8 = document.getElementById("input8").value;
        let input9 = document.getElementById("input9").value;
      
        Swal.fire({
          title: "User Contact Me!",
          html: `<div><b>Name:</b> ${input8}<br>
                 <b>Number:</b> ${input9}<br></div>`,
          icon: "info",
          confirmButtonText: "OK"
        });
      
        saveData();
      }
      



document.getElementById("show").addEventListener("click" , function(){
    document.getElementById("field").innerHTML = `
    <h2 class="fw-bold">INCLUDES SOME DETAILS</h2>
        <h4 class="fw-bold">Add Title:</h4>
        <input type="text" class="fw-bold" placeholder="Add title" maxlength="10" id="input1"><br>
        <h4 class="fw-bold">Description:</h4>
        <input type="text" class="fw-bold" placeholder="description" maxlength="20" id="input2"><br>
        <hr>
        <h2 class="fw-bold">set a price</h2>
        <h4 class="fw-bold">Price:</h4>
        <input type="number" class="fw-bold" placeholder="price" maxlength="11" id="input5"><br>
        <hr>
        <h2 class="fw-bold">Paste Image link</h2>
        <h4 class="fw-bold">Link:</h4>
        <input type="text" class="fw-bold" placeholder="Image Link" id="input6"><br>
        <hr>
        <h2 class="fw-bold">Review your acount</h2>
        <h4 class="fw-bold">Name:</h4>
        <input type="text" class="fw-bold" placeholder="name" maxlength="15" id="input8"><br>
        <hr>
        <h2 class="fw-bold">Phone Number</h2>
        <h4 class="fw-bold">number:</h4>
        <input type="number" class="fw-bold" placeholder="number" maxlength="11" id="input9"><br>
        <hr>
        <button onclick="product()" class="fw-bold">Post Now</button>`;
});

document.getElementById("close").addEventListener("click" , function (){
    document.getElementById("field").innerHTML = "";
})

document.getElementById("home").addEventListener('click' , function(){
    window.location.href = "./index.html";
})



function saveData(){
    localStorage.setItem("userCard",  user.innerHTML);
}
function showTask(){
    user.innerHTML = localStorage.getItem("userCard");
}
showTask();
