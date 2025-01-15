# Next.js Client-Side Router Error

This repository demonstrates a common error encountered when using the Next.js router: attempting to push to a route that does not exist. While Next.js handles missing routes gracefully on the server, it throws an error on the client, leading to a poor user experience.  The solution explores methods to prevent this client-side error.

## Bug

The `bug.js` file contains a component that attempts to navigate to a nonexistent route using `router.push()`. This will throw a client-side error if the route is not found.

## Solution

The `bugSolution.js` file presents multiple solutions to handle this issue and prevent the client-side error.  These solutions include using error boundaries and implementing route checks before navigation.