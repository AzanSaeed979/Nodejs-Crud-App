const http = require('http');
const fs = require('fs'); 
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.statusCode = 200;
        const indexPage = fs.readFileSync('./index.html'); 
        res.end(indexPage.toString());
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('<h1>About page</h1>');
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.end('<h1>Contact page</h1>');
    } else if (req.url === '/home') {
        res.statusCode = 200;
        res.end('<h1>Home page</h1>');
    } else if (req.url === '/services') {
        res.statusCode = 200;
        res.end('<h1>Services page</h1>');
    } else if (req.url === '/products') {
        res.statusCode = 200;
        res.end('<h1>Products page</h1>');
    } else if (req.url === '/login') {
        res.statusCode = 200;
        res.end('<h1>Login page</h1>');
    } else if (req.url === '/signup') {
        res.statusCode = 200;
        res.end('<h1>Signup page</h1>');
    } else if (req.url === '/favicon.ico') {
        res.statusCode = 204;
        res.end(); // No content for favicon
    } else {
        res.statusCode = 404;
        res.end('<h1>404 - Page not found</h1>');
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
