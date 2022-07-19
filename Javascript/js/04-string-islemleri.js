let email = "melih@hotmail.com"
let uzunluk = email.length;
console.log(uzunluk)

console.log(email[0] + email[1])
let hepsiBuyuk = email.toUpperCase();
console.log(hepsiBuyuk.charAt(1))

//search aranan karakterin index ini dondurur.
let index = email.search("@");
//slice: baslangic ve bitiş adresine gore arasindaki degeri dondurur.
let isim = email.slice(0,index)
console.log(isim)
let domain = email.slice(index+1)
console.log(domain) //hotmail.com

//hotmail kısmını almak için
console.log(domain.slice(0,domain.indexOf(".")))

//hotmail kismi gmail olarak degissin replace
email = email.replace("hotmail","gmail")
console.log(email)

//includes
console.log(email.includes("@"))

//startswith
//endswith

let metin = "merhaba.sitemize.hos.geldiniz"
let dizi = metin.split(".")

dizi.forEach(element => {
    console.log(element)
    
});

//? Soru1  Aşağıdaki language değişkenin değerini JavaScript olarak değiştirin ve konsola yazdırın.
let url = "www.kodluyoruz.org";
let language = "Java";

language = language.replace("Java","JavaScript")
//language = language + "Script"
console.log(language)


//? Soru 2: Yukarıdaki url değişkenini kullanarak "www" olmadan domain (kodluyoruz.org) adında yeni bir değişken oluşturun ve konsola yazdırın.
let domain2 = null;
if(url.includes("w")){
    let index2 = url.lastIndexOf("w");
    domain2 = url.slice(index2+2)
}
console.log(domain2)