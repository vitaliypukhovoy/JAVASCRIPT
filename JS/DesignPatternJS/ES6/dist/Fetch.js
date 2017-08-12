'use strict';

var root = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

fetch(root, { method: 'GET' }).then(function (response) {
    console.log(response);
    return response.json();
}).then(function (json) {
    return console.log(json);
});