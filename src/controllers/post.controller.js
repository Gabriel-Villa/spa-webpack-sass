import views from '../views/posts.html';

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await res.json();
}


export default async () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = views; 
    const total = divElement.querySelector('#total');
    const postsElements = divElement.querySelector('#posts');

    const posts = await getPosts();
    total.innerHTML = posts.length;
    posts.forEach((post) => {
        postsElements.innerHTML +=`
            <li class="p-4 list-group-item border-primary bg-dark text-white">
                <p>${post.title}</p>
                <h5>${post.body}</h5>
            </li>
        `
    })

    return divElement;
}