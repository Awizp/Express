import express from "express"

const app = express()

// we can give more callback func by arguements in below

const cb1 = (req, res, next) => {
    console.log("Callback func 1")
    next() //this func is used to jump this func to next function
}

const cb2 = (req, res, next) => {
    console.log("Callback func 2")
    next()
}

app.get("/", [cb1, cb2], (req, res, next) => { // I gave callback functions with array and jjust another one
    console.log("Callback func 3")
    next()
}, (req, res) => {
    console.log("Callback func 4")
    res.send("This will work in port 4000")
})

app.listen(4000, () => { console.log("server up!") })