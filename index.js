// Add your code here
const submitData = (name, email) => {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify ( {
            name: name, 
            email: email
        })
    })
        // .then(response => response.json())
        // .then(function(object) {
        //     document.body.innerText = object["id"]
        // })
        .then( function ( response ) {
            return response.json()
          } )
          .then( function ( object ) {
            document.body.innerHTML = object[ "id" ]
          } )
          .catch( function ( error ) {
            document.body.innerHTML = error.message
          } )

}