var str = 'hello';
str = str[0].toUpperCase() + str.substr(1);
console.log(str);

var str = 'hello';
str = str.split('');
str[0] = str[0].toUpperCase();
var result = str.join('');
console.log(result);


var str = '123456';
result = str.split('').reverse().join('');
console.log(result);

var str = '3751';
arr = str.split('');
arr.sort();
var result = arr.join('');
console.log(result);

var str = 'http://html';
if (str.substr(0, 7) == 'http://') {
    console.log('yes');
} else {
    console.log('no');
}

var str = 'index.html';
if (str.substr(-5) == '.html') {
    console.log('yes');
} else {
    console.log('no');
}