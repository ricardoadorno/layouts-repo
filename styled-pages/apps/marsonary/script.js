// Set up variables
let page = 1;
let isLoading = false;

// Function to load more content
function loadMore() {
  isLoading = true;

  // Send AJAX request to server to get more content
  fetch(`https://jsonplaceholder.typicode.com/todos/${page}`)
    .then((response) => response.text())
    .then((data) => {
      // Append new content to existing content
      const container = document.querySelector(".parent");
      const newChild = document.createElement("div");
      newChild.classList.add("child");
      newChild.insertAdjacentHTML(
        "beforeend",
        `<img src="https://placehold.it/300x400" alt="" /> `
      );
      newChild.insertAdjacentHTML("beforeend", JSON.parse(data).title);
      container.appendChild(newChild);

      // Increment page number and set isLoading to false
      page++;
      isLoading = false;
    })
    .catch((error) => {
      // Handle error
      console.error("Error loading more content:", error);
      isLoading = false;
    });
}

// Event listener for scrolling
window.addEventListener("scroll", () => {
  const container = document.querySelector(".parent");
  const loading = document.querySelector(".loading");

  const containerHeight = container.offsetHeight;
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;

  // Check if user has scrolled to the bottom of the container
  if (scrollTop + windowHeight >= containerHeight && !isLoading) {
    loadMore();
  }
});

// Load initial content on page load
loadMore();
