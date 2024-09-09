/*
    Node.js and its runtime
    -----------------------

    1. What is ECMAScript?
        - ECMAScript (ES) is a scripting language specification that standardizes JavaScript.
        - It defines the core features of JavaScript and its syntax. 
        - ECMAScript is maintained by ECMA International, and its versions (like ES5, ES6/ES2015, etc.) introduce new features to the JavaScript language.
        - ECMAScript 6 (also known as ES6 or ECMAScript 2015) was a significant update that added many modern JavaScript features like arrow functions, classes, and modules.

    2. What is JavaScript?
        - JavaScript (JS) is a high-level, dynamic programming language primarily used for web development to create interactive web pages. 
        - Initially designed for client-side scripting, JavaScript is now used on both the client and server side. 
        - It supports event-driven, functional, and imperative programming styles.
        - JavaScript is the language that follows the ECMAScript specification.

    3. What is Node.js?
        - Node.js is a 'JavaScript runtime' built on Chrome's V8 JavaScript engine. 
        - It allows developers to run JavaScript on the server side. 
        - Node.js is known for its event-driven, non-blocking I/O model, making it efficient for building scalable network applications, APIs, real-time applications, and microservices. 
        - Node.js has an extensive package ecosystem, npm (Node Package Manager), which makes it easier to include libraries in your projects.

    4. What is Bun?
        - Bun is a modern JavaScript runtime similar to Node.js but optimized for performance. 
        - It is designed to be faster and more efficient in terms of startup times and handling certain operations, like file I/O and bundling. 
        - Bun comes with a built-in bundler, transpiler, task runner, and npm-compatible package manager, making it an all-in-one tool for modern JavaScript/TypeScript applications. 
        - It’s designed to work well with web standards and enhance the developer experience, with a focus on speed.

 */

/*
    -> What can we do with Node.js ?
        - Create a CLI (command line interface).
        - Create a video player.
        - Create a game.
        - Create a HTTP Server.

    -> What is an HTTP server ?
        - A protocol that is defines for machines to communicate.
        - Specially for websites, it is the most common way for it's frontend to talk to the backend.

    => Things client needs to worry about before sending a request to the server:
        1. Protocol (http/https)
        2. Address (URL/IP/Port)
        3. Route
        4. Headers, Body, Query, Params
        5. Method
    
    => Things server need to worry about:
        1. Response headers.
        2. Response body.
        3. Status codes.

    => Usually communication will happen like this:
            
            Https://chat.openai.com/backend-api/conversation
            ⬆              ⬆        ⬆
        Protocol        URL     Route

        Header - cookie -> 123@Eads23/23dsdc
        Body -> What is 2 + 2 (usually JSON)
        Method : POST

    => Some common methods:
        1. GET
        2. POST
        3. PUT
        4. DELETE
    
    => Some common status codes:
        1. 200 - Everything is ok.
        2. 404 - Page/route not found.
        3. 403 - Authentication issues.
        4. 500 - Internal server error.
    
        
 */