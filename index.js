// Add your code here
const form = document.querySelector("form");
const nameInput = document.querySelector("input[name]");
const emailInput = document.querySelector(".email");
const info = document.querySelector(".info");

function submitData(url, meth, data) {
  const configObj = {
    method: meth,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  };
  fetch(url, configObj)
    .then(res => res.json())
    .then(data => {
      appendData(data);
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const url = "http://localhost:3000/users";
  const meth = "POST";
  const d = {
    name: nameInput.value,
    email: emailInput.value
  };
  submitData(url, meth, d);
});

function appendData(d) {
  console.log(d);
  const div = document.createElement("div");
  div.innerText = `${d.name} - ${d.email} - ${d.id}`;
  info.appendChild(div);
}
