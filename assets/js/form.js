const formEl = document.getElementById("blog-form");

function handleFormSubmit(event) {
    event.preventDefault();
    console.log('hello');
    const blogArr = JSON.parse(localStorage.getItem("blogArr")) || [];

    const usernameInput = document.querySelector('#username-text').value;
    const titleInput = document.querySelector('#title-text').value;
    const contentInput = document.querySelector('#content-text').value;
    if (!usernameInput || !titleInput || !contentInput) {
        alert("Please fill out all form fields");
        return;
    }
    const blog = {
        username: usernameInput,
        title: titleInput,
        content: contentInput
    }

    blogArr.push(blog);
    localStorage.setItem("blogArr", JSON.stringify(blogArr));

    location.href= "./blog.html";
}

formEl.addEventListener("submit", handleFormSubmit);