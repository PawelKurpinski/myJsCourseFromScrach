// // var x = 5;
// // var y = 5;
// //
// // document.write(x % y);
// //
// // var z = 8;
// // z = z + 4;
// //
// // document.write(z);
// //
// //
// // function doSomething(x,y){
// //     alert(x+y);
// // }
// // doSomething(1,3);
// //
// //
// // var a = 8;
// // var czyParzysta = (a % 2 === 0) ? true : false;
// // alert(czyParzysta);
// //
// //
// // var b = 12;
// // var czyWieksza = (a > b) ? "a większe od b" : "a mniejsze od b";
// // alert(czyWieksza);
// //
// // alert((b % 2 === 0) ? "b jest parzyste" : "b jest nieparzyste");
// //
// //
// // var dzienTygodnia = 12;
// //
// // switch (dzienTygodnia) {
// //     case 1:
// //         alert("dzisiaj jest poniedziałek");
// //         break;
// //     case 2:
// //         alert("dzisiaj jest poniedziałek");
// //         break;
// //     case 3:
// //         alert("dzisiaj jest poniedziałek");
// //         break;
// //     default:
// //         alert("błędny numer! ogarnij się!!")
// // }
// //
// // function sayIt(){
// //     alert("do it");
// // }
// // sayIt();
// //
// // var x = function sayAgain(word){
// //     alert(word)
// // }
// // x("test");
// //
// //
// //
// // var x = function sayAgain(word){
// //     alert(word)
// // }
// // x(function(){
// //     alert("something")
// // });
// //
// // function test(f){
// //     f();
// // }
// //
// // test(
// //     function(){
// //         alert("test");
// //     }
// // );
// //
// // /* jako argument przesyłam do funkcji drugą funkcję
// // Sam zaspis test( function...) oznacza niejako
// // var f = function(){ alert...}
// // Ale sam fakt przesłania wiele nie wnosi ponieważ potrzeba jeszcze wywołania teara z kolei funckji wcześniej przekazanej pod zmienną f a więc wywołania f();  */
// //
// // function test(f, y){
// //     f(10 + y);
// // }
// // test(
// //     function(x){
// //         alert("test"+ " "+ x);
// //     },
// //     20
// // );
// //
// // // tutaj poza powyżej widocznymi działaniami przekazuję jeszcze poza alertem wartość 20 jako drugi argument do funkcji test; co ważne jednak funkcja przekazywana do funkcji test ma argument x, który przy wywołaniu w linii 79 zostaję podstawiony lcizbą 10
// //
// // var h1 = function(type){
// //     if (type === "szef")
// //         return function(name){
// //             alert("cześć szefie," + name + " !");
// //         };
// //     else return function(name){
// //         alert("Cześć"+ name + " !");
// //     };
// //
// // };
// // var zwroconaFunkcja = h1("szef");
// //
// // zwroconaFunkcja("Paweł");
//
// //---------obiekty------------------------------------------->
//
// var clickButton = document.getElementById('test');
//
// function doIt(){
//     clickButton.innerHTML = ("ala ma kota");
// };
//
// var osoba = {
//     imie: "Paweł",
//     nazwisko: "Kurpinski",
//     pobierzInformacje: function(){
//         return this.imie + " " + this.nazwisko;
//      }
// }
//
// document.write = (osoba.imie);
// clickButton.innerHTML = (osoba.nazwisko = "Inne");
//
// var clickButton2 = document.getElementById('test2');
//
// function doItOneMoreTime(){
//     clickButton2.innerHTML = ("Milicjant ma...");
// };
//
// clickButton.innerHTML = osoba.pobierzInformacje();
//
// // Zapis I
//
// var czlowiek = {
//     imie: "Pawel",
//     nazwisko: "Kowalski",
//     metoda: function(){
//         return this.nazwisko + " " + this.imie;
//     }
// };
//
// // Zapis II
//
// var ja = new Object({
//     imie: "Piotr",
//     nazwisko: "Kowal",
//     metoda: function(){
//         return this.nazwisko + " " + this.imie;
//     }
// });
//
// // inna możliwość to funkcja konstruująca czyli odpowiednik klasy
//
// // Zapis III
//
// function person(name, surname){
//     this.imie = name,
//     this.nazwisko = surname,
//     this.toString = function(){
//         return this.name + " " + this.surname;
//     };
// }
//
// var x = new person("Paweł", "Kurpinski");
// var y = new person("Piort", "Kurpiński");
//
// x.newValue = 12;  /*to nowy klucz i wartość w obiekcie person */
//
// /*uwaga! zamiast dopisywać element w samej klasie czyli inaczej mówiąc samej funkcji konkstruktora można zrobić to też korzystając z prototypu*/
//
// person.prototype.specifiedValue = 12;
//
// /* kluczem jest fakt iż teraz zarówno x jaki i r otrzymują tęn klucz a nie tylko x lub y jak w konstrukcji z "new"*/


/*-----------Tablice-------------------------------*/

var produkty = [
    "PHP",
    "Mysql",
    "JS"
];

// alert(produkty[0]);
// alert(produkty.length); /* teraz 3 */
//
// // by dodać nową pozycję do obiektu tablicy można
// produkty[produkty.length] = "C++";
// alert(produkty[3]);
//
// alert(produkty.length); /* teraz już 4 */
//
// // inny sposób dodania na koniec tablicy
// produkty.push("C#");
// alert(produkty);
//
// // II sposób analogicznie do obiektów - ale nie jest polecany ze względu na mniejszą szybkość działania
// var produkty = new Array();
//
// // Ważne pojęcie to tablice asocjacyjne - przuporządkowujące klucz i wartosć; kluczem jest nazwa nie liczba
//
// var osoba = [];
//
// osoba["imie"] = "Pawel";
//
// alert(osoba["imie"]);
// // lub
// alert(osoba.imie);
//
// var ul = document.getElementById('kursyTworzeniaStronWww');
// var liArray = ul.getElementsByTagName("li");
//
// alert(liArray[1]);
// // by zobaczyć dokładną zawartość danej komórki tablicy można posłużyć się innerHTML
// alert(liArray[1].innerHTML);
//
// // ale w skrócie można też napisać tak

var liArray2 = document.getElementById("kursyTworzeniaStronWww").getElementsByTagName("li");
alert(liArray2[2].innerHTML);

var temp = ["MySQli", "Wanila JS"];

document.getElementById("rezultat").innerHTML = produkty.concat(temp);
// poprzez concat dodaję do siebie dwie tablice co widać na stronie w związku z wyświetleniem produktów

document.getElementById("rezultat").innerHTML += "<br>--------------------<br>";
// to ciekawy sposób na wstawienie linii przerywanej za pomocą metody innerHTML

document.getElementById("rezultat").innerHTML += produkty;
// w ten sposób wyświetlam na stronie zawartość tablicy czyli niejako dodaję do poprzez +=

document.getElementById("rezultat").innerHTML += produkty.join("-----x------");
// co ważne! join nie zmienia zawartości produktów tylko ta konkretna sytuacja wyświetla modyfikację

document.getElementById("rezultat").innerHTML += produkty.sort();

// document.getElementById("rezultat").innerHTML = produkty.shift();
// zapis pozwalający na usunięcie z wyśietlania pierwszego elementu z listy
