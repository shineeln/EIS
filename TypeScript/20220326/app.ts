var num:number = 12;
num = 23;
// tsc app.ts typescriptiig js bolgon compile hiij baina
var str:string = "dvsv";
str = "dsv";

var testBoolean:boolean = false;
var falsy:null = null;
var falsy1:undefined = undefined;

var nas:number;
var on:number = 2000;

// custom type name type zarlah
type too = number;
var x:too = 2022;

nas = 2022 - on;

// union type |
var y:number|string = 23;
y = "jn";

var bla:any = 123;
bla = [];
bla = {};
bla = "hhkj";

// 1. 5м урттай, 3м өргөнтэй тэгш өнцөгтийн талбай болон периметрийг ол
var urt:number = 5;
var orgon:number = 3;
var talbai:number = urt * orgon;
var pr:number = (urt + orgon) * 2
// 2. 5м радиустай тойргийн урт болон талбайг ол. (pi = 3.14)

var radius:number = 5;
var pi:number = 3.14;
var L:number = 2 * pi * radius;
var S:number = pi*(radius**2);