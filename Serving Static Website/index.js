import express from "express"
import path from "path"

const app = express()

app.use(express.static("./public")) // express.static() is default method in express to get the static files like middleware

app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "./public/index.html"))
})

app.listen(4000, () => console.log("server up!"))