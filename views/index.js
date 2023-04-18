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
        'name': name.value,
        'email': email.value,
        'date': date.value
    };

    // // serialized object
    // let objStr = JSON.stringify(obj);
    // localStorage.setItem(email.value,objStr);

    // using axios to push data to CrudCrud
    axios.post('http://localhost:4000/bookingApp/postData',obj)
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
        axios.get('http://localhost:4000/bookingApp/postData')
        .then( (response) =>{
            let dataStr = e.target.parentElement.textContent;
            let strName = dataStr.substring(0,dataStr.indexOf('-')-1);

            for(let i of response.data){
                if(i.name == strName){
                    name.value = obj.name;
                    email.value = obj.email;
                    date.value = obj.date;
                    axios.delete(`http://localhost:4000/bookingApp/postData/${i._id}`)
                    .then( () => alert(`${obj.name} has been deleted at ${new Date()}`))
                    .catch( (err) => console.error(err));
                    ul.removeChild(e.target.parentElement);
                }
            }
        })
        .catch( err => console.error(err));
        // ul.removeChild(e.target.parentElement);
    }

    // deleting li tag
    del.onclick = (e) => {
        // localStorage.removeItem(obj.email);

        axios.get('https://crudcrud.com/api/7a11109289a44c1687031906df792307/PersonalDetails')
        .then( (response) =>{
            // iterating each data entry using for loop
            for(let i of response.data){
                if((i.email == obj.email) && (i.name == obj.name)){
                    axios.delete(`https://crudcrud.com/api/7a11109289a44c1687031906df792307/PersonalDetails/${i._id}`)
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

window.addEventListener("DOMContentLoaded", () => {
    // creating a GET request
    axios.get('https://crudcrud.com/api/7a11109289a44c1687031906df792307/PersonalDetails')
    .then( (response) => {

        // for loop for each object
        for(let i of response.data){

            // creating li tag
            let li = document.createElement('li');
            let data = document.createTextNode(i.name+' - '+i.email+' - '+i.date);
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

            // appending delete to li 
            li.appendChild(del);
            li.appendChild(edit);

            // appending to ul tag
            ul.appendChild(li);

            // delete button functionality
            del.onclick = (e) => {
                
                // click delete
                let serverName = i.name;
                axios.delete(`https://crudcrud.com/api/7a11109289a44c1687031906df792307/PersonalDetails/${i._id}`)
                .then( () => alert(`${serverName} has been deleted at ${new Date()}`))
                .catch( (err) => console.error(err));                    
                
                ul.removeChild(e.target.parentElement);
            }


            // editing button functionality
            edit.onclick = (e) => {
                // getting data to the login
                let name = document.getElementById('name');
                let email = document.getElementById('email');
                let date = document.getElementById('date');

                date.value = i.date;
                name.value = i.name;
                email.value = i.email;

                // deleting data from CRUDCRUD
                axios.delete(`https://crudcrud.com/api/7a11109289a44c1687031906df792307/PersonalDetails/${i._id}`)
                .then( () => alert(`${name.value} has been deleted at ${new Date()}`))
                .catch( (err) => console.error(err));                    
            
                ul.removeChild(e.target.parentElement);
            }
        }
    })
    .catch((err) => console.error(err))
})