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