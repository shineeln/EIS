//array 
var arr:number[] = [12, 12];
var arr1:string[] = ['str1', 'str2', 'sgrg'];

//tuple
var tuple: [number, string] = [12, 'sdf'];

//object type
type MyObjectType = {
    ner : string;
    nas: number;
    email: string
}

var obj:MyObjectType = {
    ner : 'str',
    nas : 21,
    email : 'str'
}

var users : MyObjectType[] = [obj];

users.push( {
    ner : 'sdfsdf',
    nas : 23,
    email : 'sdfsdfsd'
})

function blja(a: number[], b:string[]):void {
    //return [...b, ...a]
    //ene function yum butsaahgui bj bolno gwel void
    //functionii araas type zaaj blno :number[]
}

var fn: (a:number) => number;
fn = function(a:number) {
    return a;
}

// tsc -w
// tsc --init

// interface - object type
interface customObjType {
    ner : string,
    nas : number,
    sayhi:()=> void
}

const member : customObjType = {
    ner : "",
    nas : 24,
    sayhi: function() {
        console.log('hi')
    }
}

interface NewType extends customObjType {
    hobbies : string[]
}

const member1: NewType = {
    ner :'',
    nas:23,
    sayhi:() => {
        console.log('sdf')
    },
    hobbies : ['sdf', 'sdf']
}

// interface neg {
//     ner : string,
//     nas : number,
//     email : string
// }

// interface hoyor extends neg {
//     hobbies : string[],
//     utas : number
// }

// const testObj:neg = {
//     ner : 'shine',
//     nas : 23,
//     email : 'test'
// }
// const testObj2:hoyor = {
//     ner : 'shine',
//     nas : 23,
//     email : 'test',
//     hobbies : ['sdf', 'sdfsf'],
//     utas : 32423
// }
// function concatArr(a : neg, b: hoyor) {
//     return [a, b]
// }

// var array = concatArr(testObj, testObj2)

interface neg {
    ner : string,
}
interface hoyor {
    nas : number
}
//interface guraw extends neg, hoyor{}
type guraw = neg & hoyor 
const testObj:neg = {
    ner : 'shine',
}
const testObj2:hoyor = {
    nas : 23,
}
function concatObj(a : neg, b: hoyor):guraw {
    return {...a, ...b}
}
function mergeObject (a : neg, b: hoyor):guraw {
    return Object.assign(a,b)
}
var testObject = concatObj(testObj, testObj2)

