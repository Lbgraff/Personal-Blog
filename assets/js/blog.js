const blogArr = JSON.parse(localStorage.getItem("blogArr")) || [];
console.log(blogArr);

for (let i = 0; i < blogArr.length; i++ ) {
    const title = document.createElement('h1');
    const content = document.createElement('p');
    const username = document.createElement('p');

    title.textContent = blogArr[i].title;
    content.textContent = blogArr[i].content;
    username.textContent = `Posted by: ${blogArr[i].username}`;
   
    document.body.appendChild(title);
    document.body.appendChild(content);
    document.body.appendChild(username);
    }