const express = require('express');

const app = express();

// app.use(middleware1);
// app.use(middleware2)


// function middleware2(req res, next) {
//     console.log("I am middleware 2");
//     next();
// }

// function middleware3(req, res, next) {
//     console.log("I am middleware 3");
//     next();
// }
// function startExpessCallback(req, res, next) {
//     console.log("I am the standard Express function");
//     res.send("<h1>Hello world</h1>")

// }


function middleware(req, res, next) {
    console.log("I am middleware 1");
    // const errObj = new Error('I am an err');
    // next(errObj);
    req.customProperty = 100
    next();
}

function middleware2(req, res, next) {
    console.log(' Custom property = ', req.customProperty);
    req.customProperty = 600;
    next();
}

function errorHandler(err, req, res, next) {
    if (err) {
        res.send('<h1>There was an error, please try again!')
    }
}
app.use(middleware);
app.use(middleware2);

app.get('/', (req, res, next) => {
    console.log("I am the standard Express function");
    res.send("<h1>Hello world</h1>")

}
);
app.use(errorHandler);


app.listen(3000)