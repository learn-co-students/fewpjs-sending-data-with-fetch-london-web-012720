// Add your code here

const API = "http://localhost:3000/users"

const submitData = (name, email) => {
        return fetch( API, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify( {
              name,
              email
            } )
          } )
          .then(resp => resp.json())
          .then(object => document.body.innerHTML = object[ "id" ])
          .catch( error => document.body.innerHTML = error.message )
      }

