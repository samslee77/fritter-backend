/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */
function changeVerificationStatus(fields) {
  fetch('/api/verification', {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function seeVerificationStatus(fields) {
  fetch('/api/verification')
    .then(showResponse)
    .catch(showResponse);
}

function seeVerificationStatusOfOther(fields) {
  fetch(`/api/verification?username=${fields.username}`)
    .then(showResponse)
    .catch(showResponse);
}

