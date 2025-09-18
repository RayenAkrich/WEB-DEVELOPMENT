// Exercice 9 – Fetch + async/await
async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    const ul = document.getElementById('posts');
    posts.slice(0, 5).forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.title;
        ul.appendChild(li);
    });
}

fetchPosts();