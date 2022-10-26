/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */
function changeVerificationStatus(fields) {
  fetch('/api/verify', {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function seeVerificationStatus(fields) {
  fetch('/api/verify')
    .then(showResponse)
    .catch(showResponse);
}

function seeVerificationStatusOfOther(fields) {
  fetch(`/api/verify?username=${fields.username}`)
    .then(showResponse)
    .catch(showResponse);
}

