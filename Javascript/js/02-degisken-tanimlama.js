// //eskiden kullanılan yontemdir.
// // var serverName = "kodluyoruz.org";
// // console.log(serverName); 

// //Yeni kullanilan tanimlama

// let serverName;
// serverName = "kodluyoruz.org";

// console.log(serverName)


// let password = "1234";
// console.log(password)

// //let ile hatali kullanımlari uyari olarak veriyor.

// const SERVER_PASSWORD = "1asf4";
// //serverPassword = "1asfag5";  const ile tanimlandigi icin degistirilemez.
// console.log(SERVER_PASSWORD)
// let price = 100;
// let tax = 0.18;
// let priceTax = price * tax;
// let total = priceTax+price;

// console.log("Fiyat: " + price + 
//             " KDV: "+ tax + 
//             " ürün: "+ priceTax + 
//             " Son tutar : " + total);

// let counter = 0;

// // console.log(0**0) //1

// for (let index = 0; index < 5; index++) {
//     console.log(index ** index)
// }

// console.log("\n")
// console.log(Math.floor(1.7))
// console.log(Math.ceil(1.7))
// console.log(Math.round(1.4))
// console.log("\n")

// let stringNumber = "111"
// let number1 = Number(stringNumber)
// console.log("number " + number1)

////İçinde değer barındıran tüm ifadeler true'tur. Asagidaki deger false dondurur.
let a; 
console.log(Boolean(a));

let userName;
let isUserName = Boolean(userName);
console.log("Kullanıcı var mı? " + isUserName)
////Asagidaki degerler true olarak donecektir
console.log(Boolean(1n));
console.log(Boolean(-1n));
console.log(Boolean(Infinity));
console.log(Boolean({}));
console.log(Boolean(Symbol()));

var x = 10 /'a'
console.log(Boolean(x))

console.log(typeof x) //type of ile degiskenleri tanima
console.log(typeof userName)

let sayi2 = "44px"  //basinda olmadigi surece integer donusumu yapar
sayi2 = parseInt(sayi2)

console.log(sayi2)

let sayi3 = "44.4px"  //basinda olmadigi surece float donusumu yapar
sayi3 = parseFloat(sayi3)

console.log(sayi3)

sayi2 = sayi2.toString()
console.log(sayi2 + " : " + typeof sayi2)

String(123) // “123” explicit
123 + '' // “123”    implicit

//Symbol’de durum biraz farklıdır, çünkü dönüşüm sadece explicit bir şekilde yapılabilir, implicit bir şekilde yapılamaz.

String(Symbol('my symbol')) // 'Symbol(my symbol)'
//'' + Symbol('my symbol') // TypeError is thrown

var c = 0 ||  ""  ||  "123" || 4 ; // ”123” dolu string true dönecektir
console.log(c)

console.log(true+false)



