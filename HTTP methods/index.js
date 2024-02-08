import express from "express"

const app = express()

// HTTP methods
// GET 👉 It will retrieve the data
// POST 👉 Create/Insert the data
// PUT 👉 Completely update data
// PATCH 👉 Partially update data
// DELETE 👉 Delete data
// ALL 👉 Any HTTP request data

app.get("/", (req, res) => {
    res.send("Hello world")
})

// Advanced routing
app.get("/products/apple", (req, res) => {
    res.send("It will only work when we type the exact domain name in the search bar")
})

// String path
app.get("/ab?cd", (req, res) => {
    res.send("This will work when user types in domain (abcd) or (acd)")
})

// Regular Expression
app.get(/x/, (req, res) => {
    res.send("This will work when user types in domain with x word")
})

app.get(/^\/users\/[0-9]{5}$/, (req, res) => { // This is Regular expression (/^\/users\/[0-9]{5}$/)
    res.send("This will work when user types users/5 numbers in domain")
})

app.listen(4000, () => console.log("server up!"))