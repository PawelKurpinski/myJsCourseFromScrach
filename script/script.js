// var x = 5;
// var y = 5;
//
// document.write(x % y);
//
// var z = 8;
// z = z + 4;
//
// document.write(z);
//
//
// function doSomething(x,y){
//     alert(x+y);
// }
// doSomething(1,3);
//
//
// var a = 8;
// var czyParzysta = (a % 2 === 0) ? true : false;
// alert(czyParzysta);
//
//
// var b = 12;
// var czyWieksza = (a > b) ? "a większe od b" : "a mniejsze od b";
// alert(czyWieksza);
//
// alert((b % 2 === 0) ? "b jest parzyste" : "b jest nieparzyste");
//
//
// var dzienTygodnia = 12;
//
// switch (dzienTygodnia) {
//     case 1:
//         alert("dzisiaj jest poniedziałek");
//         break;
//     case 2:
//         alert("dzisiaj jest poniedziałek");
//         break;
//     case 3:
//         alert("dzisiaj jest poniedziałek");
//         break;
//     default:
//         alert("błędny numer! ogarnij się!!")
// }
//
// function sayIt(){
//     alert("do it");
// }
// sayIt();
//
// var x = function sayAgain(word){
//     alert(word)
// }
// x("test");
//
//
//
// var x = function sayAgain(word){
//     alert(word)
// }
// x(function(){
//     alert("something")
// });
//
// function test(f){
//     f();
// }
//
// test(
//     function(){
//         alert("test");
//     }
// );
//
// /* jako argument przesyłam do funkcji drugą funkcję
// Sam zaspis test( function...) oznacza niejako
// var f = function(){ alert...}
// Ale sam fakt przesłania wiele nie wnosi ponieważ potrzeba jeszcze wywołania teara z kolei funckji wcześniej przekazanej pod zmienną f a więc wywołania f();  */
//
// function test(f, y){
//     f(10 + y);
// }
// test(
//     function(x){
//         alert("test"+ " "+ x);
//     },
//     20
// );
//
// // tutaj poza powyżej widocznymi działaniami przekazuję jeszcze poza alertem wartość 20 jako drugi argument do funkcji test; co ważne jednak funkcja przekazywana do funkcji test ma argument x, który przy wywołaniu w linii 79 zostaję podstawiony lcizbą 10
//
// var h1 = function(type){
//     if (type === "szef")
//         return function(name){
//             alert("cześć szefie," + name + " !");
//         };
//     else return function(name){
//         alert("Cześć"+ name + " !");
//     };
//
// };
// var zwroconaFunkcja = h1("szef");
//
// zwroconaFunkcja("Paweł");

//---------obiekty------------------------------------------->

var clickButton = document.getElementById('test');

function doIt(){
    clickButton.innerHTML = ("ala ma kota");
};

var osoba = {
    imie: "Paweł",
    nazwisko: "Kurpinski",
    pobierzInformacje: function(){
        return this.imie + " " + this.nazwisko;
     }
}

document.write = (osoba.imie);
clickButton.innerHTML = (osoba.nazwisko = "Inne");

var clickButton2 = document.getElementById('test2');

function doItOneMoreTime(){
    clickButton2.innerHTML = ("Milicjant ma...");
};

clickButton.innerHTML = osoba.pobierzInformacje();
