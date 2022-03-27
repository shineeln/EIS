async function getResult() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const results = await response.json();
        results.forEach((user, index) => {
            document.body.insertAdjacentHTML('beforeend', `
                <h1 class="user" id="user${user.id}" onClick="getPost('${user.id}')">${index + 1}. ${user.name}</h1>
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
        const userPost = document.querySelector('#user' + id);
        const userPosts = document.querySelectorAll('h1.user');
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

function postReq() {
    const post = {
        userId: 1,
        title:"new post",
        body : "body of post"
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then(response => response.json)
    .then(result => console.log(result))
    .catch(err => console.log(err.message));
}

async function testAxios() {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // console.log(response.data);
    console.log('loading')
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
    if(data) {
        console.log(data);
        console.log('loading done');
    }
}