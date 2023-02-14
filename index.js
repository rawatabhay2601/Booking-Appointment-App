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

// ------------------------------------------------------------------------------
// Storing name, date and email of the user

btn.addEventListener('click',saving);

function saving(e){

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var date = document.getElementById('date');

    localStorage.setItem('name',name.value);
    localStorage.setItem('email',email.value);
    localStorage.setItem('date',date.value);

    console.log(localStorage.getItem('name'));
    console.log(localStorage.getItem('email'));
    console.log(localStorage.getItem('date'));
}