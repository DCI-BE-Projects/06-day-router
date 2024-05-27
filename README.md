# day06-router


**lastday**
  - we talked about middlewares.
  - started with the todo full stack app

**today**
  - we will talk about routers
  - continue with todo app

# Router in Express.js

- So far, we have handles routes like this:
    - app.get('/posts', <func>)
    - app.put('/posts', <func>)
    - app.post('/posts', <func>)
    - app.delete('/posts', <func>)

- Each of these functions could be 10+ lines of code
- A large application can have thousands of these
- We really don't want a file with tens of thousands of lines of code
- Routers in Express allow us to group endpoints into manageable sizes

## What is a Router?
- A Router is a mini Express application that only handles routes and middleware.
- It help us split an application into multiple route handling groups.
- It provides similar methods to the main app object (get, post, etc.)
- But with Router, we have more manageable and readable code.
- In your main server.js file, you might have some endpoints
    - That is kind of like your main router
    - Then you register other routers that contain the rest of your endpoints
    - Often these other routers are grouped by resource names
        - products.js
        - guestbook.js
        - feedback.js
    - Router files are commonly stored in a "routes" folder

## Creating a Router

- Use `express.Router()` to create a new router instance.
- Example:
    ```javascript
    const express = require('express');
    const router = express.Router();
    ```

## Mounting a Router:

- Use `app.use(<path>, <router>)` to mount the router on a path.
- Example:
    - `users-routes.js`
    ```js
    // 
    const express = require('express');
    const router = express.Router();

    router.get('/', (req, res) => {
        res.send('User list');
    });

    router.post('/', (req, res) => {
        res.send('Create User');
    });

    export default router;
    ```

    - `server.js`
    ```js
    const express = require('express');
    const app = express();
    import usersRoutes from './users-routes.js
  
    // Mount the router on the /products path
    app.use('/users', usersRoutes);
    ```