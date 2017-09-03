
var foo = 1;
function bar() {
    if (!foo) {
        foo = 10;
    }
    alert(foo);
}
bar();


var a = 1;
function b() {
    a = 10;
     return;
    function a() {}
}
b();
alert(a);