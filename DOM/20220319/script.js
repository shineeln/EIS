// JS Promise
// alert()
// alert()
// alert() // => callback
// alert()
// alert()

// request
// response

// fetch('https://randomuser.me/api/?results=50')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(result){
//         console.log(result.results)
//     })
//     .catch(function(err){
//         console.log(err.message)
//     })


function testPromise(nas) {
    return new Promise(function (amjilttai, amjiltgui) {
        if (nas >= 18) {
            amjilttai("promise testamjilttai bolloo")
        } else {
            amjiltgui("Failed...")
        }
    })
}

// asynchronous js

// testPromise(10)
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err)
//     })

// try catch
async function getResult() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const results = await response.json();
        results.forEach((user, index) => {
            document.body.insertAdjacentHTML('beforeend', `
                <h1 id="user${user.id}" onClick="getPost('${user.id}')">${index + 1}. ${user.name}</h1>
            `)
        })
    } catch (err) {
        console.log(err)
    }
}

async function getPost(id) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id);
        const results = await response.json();
        const userPost = document.querySelector('#user' + id)
        results.forEach((post, index) => {
            userPost.insertAdjacentHTML('beforeend', `
                <div class="postBox">
                    <div class="postTitle">${index + 1}) ${post.title}</div>
                    <small class="postBody">${post.body}</small>
                </div>               
            `)
        })
    } catch (err) {
        console.log(err)
    }
}
// console.log('hi')

// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/posts?userId=5