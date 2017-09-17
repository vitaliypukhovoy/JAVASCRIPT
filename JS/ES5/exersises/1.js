var str = 'hello';
str = str[0].toUpperCase() + str.substr(1);
alert(str);

var str = 'hello';
str = str.split('');
str[0] = str[0].toUpperCase();
var result = str.join('');
alert(result);


var str = '123456';
result = str.split('').reverse().join('');
alert(result);

var str = '3751';
arr = str.split('');
arr.sort();
var result = arr.join('');
alert(result);

var str = 'http://html';
if (str.substr(0, 7) == 'http://') {
    alert('Да');
} else {
    alert('Нет');
}

var str = 'index.html';
if (str.substr(-5) == '.html') {
    alert('Да');
} else {
    alert('Нет');
}