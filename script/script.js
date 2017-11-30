var x = 5;
var y = 5;

document.write(x % y);

var z = 8;
z = z + 4;

document.write(z);


function doSomething(x,y){
    alert(x+y);
}
doSomething(1,3);


var a = 8;
var czyParzysta = (a % 2 === 0) ? true : false;
alert(czyParzysta);


var b = 12;
var czyWieksza = (a > b) ? "a większe od b" : "a mniejsze od b";
alert(czyWieksza);

alert((b % 2 === 0) ? "b jest parzyste" : "b jest nieparzyste");


var dzienTygodnia = 12;

switch (dzienTygodnia) {
    case 1:
        alert("dzisiaj jest poniedziałek");
        break;
    case 2:
        alert("dzisiaj jest poniedziałek");
        break;
    case 3:
        alert("dzisiaj jest poniedziałek");
        break;
    default:
        alert("błędny numer! ogarnij się!!")
}

function sayIt(){
    alert("do it");
}
sayIt();

var x = function sayAgain(word){
    alert(word)
}
x("test");

var x = function sayAgain(word){
    alert(word)
}
x(function(){
    alert("something")
});
