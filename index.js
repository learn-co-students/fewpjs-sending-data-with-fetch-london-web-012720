// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })
// };

debugger
//     fetch("http://localhost:3000/dogs", configurationObject)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(object) {
//             console.log(object);
//         });
// document.addEventListener('DOMContentLoaded', function() {
//     
// })



function appendObj(obj) {
    document.body.innerHTML = obj
}



function submitData(name, email) {
    debugger
    const urls = "http://localhost:3000/users"

    const confObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },

        body: JSON.stringify({
            name,
            email
        })

    }
    return fetch(urls, confObj)
        .then(response => response.json())
        .then(obj => appendObj(obj["id"]))
        .catch(error => appendObj(error))
}




// A body with the name and email passed in as arguments to submitData. 
// These should be assigned to name and email keys within an object. This object should then be stringified