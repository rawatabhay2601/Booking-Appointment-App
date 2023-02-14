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
 +

// -------------------------------------------------------------------------------
// Storing name, date and email of the user

// creating li tags
btn.addEventListener('click',saving);

let ul = document.querySelector('#display');

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
    localStorage.setItem(email,objStr);

    // Appending data to li tag
    let li = document.createElement('li');
    let data = document.createTextNode(obj.name+' - '+obj.email+' - '+obj.date);
    li.appendChild(data);

    // creating delete button
    let del = document.createElement('button');
    let deleteData = document.createTextNode('Delete');
    del.type = 'button';
    del.className = 'delete';
    del.appendChild(deleteData);

    // deleting li tag
    del.onclick = (e) => {
        localStorage.removeItem(obj.email);
        ul.removeChild(e.target.parentElement);
    }

    // appending delete to li 
    li.appendChild(del);

    // appending to ul tag
    ul.appendChild(li);

}


