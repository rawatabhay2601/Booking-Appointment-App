const btn = document.getElementById("btn");

// // var testing = function(){
// //     var msg = document.querySelector(".msg");
// //     msg.textContent = 'This will upload the details';
// //     setTimeout(()=> msg.textContent = '', 5000);
// // }

// // btn.addEventListener('mouseout', testing);

// // const cont = document.querySelector("#info");

// // var contact = function(){
// //     var contactDetails = document.querySelector(".info");
// //     contactDetails.textContent = "Customer Services : 9080765789";
// //     setTimeout(()=>contactDetails.textContent = "",4000);
// // }   
// // cont.addEventListener('mouseover', contact);

// // const reloadIssue = function(event){
// //     event.preventDefault();
// //     console.log(event.target.name.value);
// //     console.log(event.target.email.value);
// //     console.log(event.target.date.value);
// // }
//  +

// -------------------------------------------------------------------------------
// Storing name, date and email of the user

// creating li tags
btn.addEventListener('click',saving);

let ul = document.querySelector('#display');

function saving(){

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var date = document.getElementById('date');

    var obj = {
        'name':name.value,
        'email':email.value,
        'date':date.value
    };

    // // serialized object
    // let objStr = JSON.stringify(obj);
    // localStorage.setItem(email.value,objStr);

    // using axios to push data to CrudCrud
    axios.post('https://crudcrud.com/api/6a3d245342b24f23a1845882f066fa04/PersonalDetails',obj)
    .then( reponse => console.log("Posting data : ",reponse))
    .catch( err => {
        document.body.innerHTML = "<h2 style='color:red'>Something went wrong</h2>";
        console.error(err);
    })

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

    // creating edit button
    let edit = document.createElement('button');
    let editData = document.createTextNode('Edit');
    edit.type = 'button';
    edit.className = 'edit';
    edit.appendChild(editData);

    // edit functionality
    edit.onclick = (e) => {
        name.value = obj.name;
        email.value = obj.email;
        date.value = obj.date;
        localStorage.removeItem(obj.email);
        ul.removeChild(e.target.parentElement);
    }

    // deleting li tag
    del.onclick = (e) => {
        // localStorage.removeItem(obj.email);

        axios.get('https://crudcrud.com/api/6a3d245342b24f23a1845882f066fa04/PersonalDetails')
        .then( (response) =>{
            // iterating each data entry using for loop
            for(let i of response.data){
                if((i.email == obj.email) && (i.name == obj.name)){
                    axios.delete(`https://crudcrud.com/api/6a3d245342b24f23a1845882f066fa04/PersonalDetails/${i._id}`)
                    .then( () => alert(`${obj.name} has been deleted at ${new Date()}`))
                    .catch( (err) => console.error(err));
                };
            }
        })
        .catch( err => console.error(err));

        // deleting the tag
        ul.removeChild(e.target.parentElement);
    }

    // appending delete to li 
    li.appendChild(del);
    li.appendChild(edit);

    // appending to ul tag
    ul.appendChild(li);
}


// localStorage.clear()