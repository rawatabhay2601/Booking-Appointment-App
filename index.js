const btn = document.getElementById("btn");

// var testing = function(){
//     var msg = document.querySelector(".msg");
//     msg.textContent = 'This will upload the details';
//     setTimeout(()=> msg.textContent = '', 5000);
// }

// btn.addEventListener('mouseout', testing);

// const cont = document.querySelector("#info");

// var contact = function(){
//     var contactDetails = document.querySelector(".info");
//     contactDetails.textContent = "Customer Services : 9080765789";
//     setTimeout(()=>contactDetails.textContent = "",4000);
// }   
// cont.addEventListener('mouseover', contact);

// const reloadIssue = function(event){
//     event.preventDefault();
//     console.log(event.target.name.value);
//     console.log(event.target.email.value);
//     console.log(event.target.date.value);
// }

// -------------------------------------------------------------------------------
// Storing name, date and email of the user

btn.addEventListener('click',saving);

function saving(){

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;

    var obj = {
        'name':name,
        'email':email,
        'date':date
    };

    // serialized object
    let objStr = JSON.stringify(obj);
    localStorage.setItem("myObj",objStr);
    console.log(localStorage.getItem('myObj'));

    // deserialized object
    let objDestr = JSON.parse(localStorage.getItem("myObj"));
    console.log(objDestr);
}