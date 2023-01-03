var getUserRepos = function(user) {

    // Format the github API URL
    var apiUrl = 'https://api.github.com/users/' + user + '/repos';

    // Make a request to the URL
    fetch(apiUrl).then(function(response) {
        console.log(response)
        response.json().then(function(data) {
            console.log(data)
        })
    })
}   

getUserRepos('facebook');