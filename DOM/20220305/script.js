const sentence = "My name is Narada. My favorite color is color. Is it sunday? His name is Bold 123";
const jijiguseg = /[a-z]/g;
const tomuseg = /[A-Z]/g;
const too = /[0-9]/g;
console.log(sentence.match(jijiguseg).length > 0)
console.log(sentence.match(tomuseg).length > 0);
console.log(sentence.match(too).length > 0);

const url = "https://www.google.com/search?q=special+character+url+encoding&rlz=1C5CHFA_enMN992MN992&oq=special+character+url+&aqs=chrome.0.0i512j69i57j0i10i22i30j0i22i30j0i10i22i30l2j0i22i30l2j0i10i22i30l2.6988j0j7&sourceid=chrome&ie=UTF-8"
const specialChar = /[^a-zA-z0-9_]/g;
console.log(url.match(specialChar));