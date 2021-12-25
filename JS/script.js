// 1. 10 улсын нэрийг массив дотор хадгалаад, бүх А үсгээр эхлэсэн улсуудын нэрийг консолд хэвлэ
var countries = ["Australia", "Austria", "Barbados", "Brazil", "Canada", "Cuba", "Egypt", "Finland", "Ghana", "Haiti", "India", "Iceland", "Ireland"];
for (var i = 0; i < countries.length; i++) {
    if (countries[i].charAt(0) == "A") {
        console.log("А үсгээр эхлэсэн улс : " + countries[i])
    }
}
// 2. Массив үүсгээд дотор нь тоо стринг бүүлеан утгуудыг хадгалж бүх тоон өгөгдлүүдийн нийлбэрийг ол. / 10-s deesh ogogdol baih / 
var array2 = [1, 5, 18, true, null, undefined, false, "test", "324", 15];
var sum2 = 0;
for (var i = 0; i < array2.length; i++) {
    if (typeof array2[i] == 'number') {
        sum2 += array2[i];
    }
}
console.log("бүх тоон өгөгдлүүдийн нийлбэр : " + sum2)

// 3. Массив үүсгээд дотор нь тоо стринг бүүлеан утгуудыг хадгалж стринг төрлийн өгөгдөл хэдэн ширхэг байгааг тоож харуул.
var array3 = [1, 5, 18, , "test", true, null, undefined, false, "test", "324", 15, "test"];
var sum3 = 0;
for (var i = 0; i < array3.length; i++) {
    if (typeof array3[i] == 'string') {
        sum3 += 1;
    }
}
console.log("стринг төрлийн өгөгдөл : " + sum3)
// 4. Массив үүсгээд дотор нь тоо стринг бүүлеан утгуудыг хадгалж бүх бүүлеан өгөгдлүүдийг устга
var array4 = [1, 5, 18, "test", true, null, undefined, false, "test", "324", 15, "test", true];
for (var i = 0; i < array4.length; i++) {
    if (typeof array4[i] == 'boolean') {
        array4.splice(i, 1);
    }
}
console.log("бүүлеан өгөгдлүүдийг устгаx : " + array4)
// 5. Массив үүсгээд дотор нь тоо стринг бүүлеан утгуудыг хадгалж, тоо стринг бүүлеан утгуудыг тус тусад нь шинэ массив дотор ангилан хадгал. str = [] , nums = [] , bools = []
var array5 = [1, 5, 18, "test", true, null, undefined, false, "test", "324", 15, "test", true];
var nums = [];
var strs = [];
var bools = [];
for (var i = 0; i < array5.length; i++) {
    if (typeof array5[i] == 'boolean') {
        bools.push(array5[i])
    }
    if (typeof array5[i] == 'string') {
        strs.push(array5[i])
    }
    if (typeof array2[i] == 'number') {
        nums.push(array5[i])
    }
}
console.log("boolean : " + bools)
console.log("string : " + strs)
console.log("number : " + nums)