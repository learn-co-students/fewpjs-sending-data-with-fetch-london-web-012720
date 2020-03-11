//const submitData = (name,email) => {
function submitData(name,email){
  
 fetch("http://localhost:3000/users",{
    method:"POST",
    headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  })
 .then( function ( response ) {
    return response.json()
  })
 .then( function ( object ) {
  //  object.id = "686"
   document.body.innerHTML = object[ "id" ]
  })
  .catch( function ( error ) {
    document.body.innerHTML = error.message
  })

}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()

  const form = document.querySelector('form')
  const name = form.name.value
  const email = form.email.value
  
  submitData(name, email)
})