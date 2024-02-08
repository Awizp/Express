import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>Server is running at Express</h1>\n<p>Hello world</p>")
})

app.get("/about", (req, res) => {
    res.send("<h1> About 😶 </h1>")
})

app.listen(4000, () => console.log("server up!"))