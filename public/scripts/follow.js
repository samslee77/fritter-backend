/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewFollowers(fields) {
  fetch('/api/Follow/followers')
    .then(showResponse)
    .catch(showResponse);
}

function viewFollowing(fields) {
  fetch('/api/Follow/following')
    .then(showResponse)
    .catch(showResponse);
}

function follow(fields) {
  fetch('/api/Follow', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function unfollow(fields) {
  fetch('/api/Follow', {method: 'DELETE', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function removeFollower(fields) {
  fetch('/api/Follow/remove', {method: 'DELETE', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

