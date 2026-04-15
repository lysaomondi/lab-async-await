// Write your code here!
const postList = document.getElementById("post-list");
function displayPosts(posts) {
  posts.forEach(post => {
    const li = document.createElement("li");
    const title = document.createElement("h1");
    const body = document.createElement("p");
 title.textContent = post.title;
    body.textContent = post.body;
    li.appendChild(title);
    li.appendChild(body);
    postList.appendChild(li);
  });
}
async function getPosts() {
  try { const response = await fetch("https://jsonplaceholder.typicode.com/posts");
 const posts = await response.json();
console.log(posts);
 displayPosts(posts);

  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
getPosts();