console.log("Namaste");
console.log("JavaScript");
console.log("Season 2");
// Output:
// Namaste
// JavaScript
// Season 2

// PROMISE
function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('User data received'), 1000);
    });
}

function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Posts data received'), 500);
    });
}

fetchUserData()
    .then((userData) => {
        console.log(userData);
        return fetchPosts();
    })
    .then((postsData) => {
        console.log(postsData);
    })
    .catch((error) => {
        console.error(error);
    });

    // ASYNC AWAIT
    async function getUserAndPosts() {
        try {
            const userData = await fetchUserData();
            console.log(userData);
    
            const postsData = await fetchPosts();
            console.log(postsData);
        } catch (error) {
            console.error(error);
        }
    }
    getUserAndPosts();

    // FETCH
    // Function to fetch GitHub user data
function getGitHubUser(username) {
    const url = `https://api.github.com/users/${username}`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`User not found: ${response.status}`);
        }
        return response.json(); 
      })
      .then(userData => {
        console.log("User data:", userData);
      
      })
      .catch(error => {
        console.error("Error fetching user:", error);
      });
  }
  
  getGitHubUser("Ankit7rma");
   