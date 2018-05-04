# Review Questions

## What is Node.js?

### Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.

## What is Express?

### Express is a Node framework used to abstract away some of the difficult pieces of setting up a Node server. It is THE most popular Node framework out there. Express gives us, (the developer), the ability to write clean, efficient code, and it also allows us to rapidly build out a web server.

## Mention two parts of Express that you learned about this week.

### Body-parser as middleware and the ability to create servers using CRUD commands.

## What is Middleware?

### A function that is invoked by the Express routing layer before the final request handler, and thus sits in the middle between a raw request and the final intended route.

## What is a Resource?

### A "resource" is simply an object, which defines one of more of the supported "actions" listed below:

### server.get = function(req, res) {
###  res.json('users');
### };

## What can the API return to help clients know if a request was successful?

### The API returns a status query ranging in number from 200 to 500. Specific ranges throw out different statuses based on the error presented that pops up.

## How can we partition our application into sub-applications?

### We can do this by creating separate routes and using `module.exports` to export those routes to be used in our server.js file. This keeps the code clean and compartmentalized, similar to the way we'd route server components in Redux.

## What is CORS and why do we need it?

### CORS stands for `cross-origin request`. Allowing cross-origin requests is helpful, as many websites today load resources from different places on the Internet. CORS allows servers to specify which origins can access the assets on the server.