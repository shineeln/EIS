var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//array 
var arr = [12, 12];
var arr1 = ['str1', 'str2', 'sgrg'];
//tuple
var tuple = [12, 'sdf'];
var obj = {
    ner: 'str',
    nas: 21,
    email: 'str'
};
var users = [obj];
users.push({
    ner: 'sdfsdf',
    nas: 23,
    email: 'sdfsdfsd'
});
function blja(a, b) {
    //return [...b, ...a]
    //ene function yum butsaahgui bj bolno gwel void
    //functionii araas type zaaj blno :number[]
}
var fn;
fn = function (a) {
    return a;
};
var member = {
    ner: "",
    nas: 24,
    sayhi: function () {
        console.log('hi');
    }
};
var member1 = {
    ner: '',
    nas: 23,
    sayhi: function () {
        console.log('sdf');
    },
    hobbies: ['sdf', 'sdf']
};
var testObj = {
    ner: 'shine'
};
var testObj2 = {
    nas: 23
};
function concatObj(a, b) {
    return __assign(__assign({}, a), b);
}
var testObject = concatObj(testObj, testObj2);
