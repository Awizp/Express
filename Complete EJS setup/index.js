import express from "express"
import path from "path"

import router from "./routes/router.js"

const app = express()

// First you need to define engine to use EJS
app.set("view engine", "ejs")

// Here we can't use style sheets directly to EJS so we have to define where our style sheets from our Express
//path.join is a node default func used to joining the path and process.cwd() used to get the current working directory
app.use(express.static(path.join(process.cwd(), "/public")))

// I used router and controller specific seperate file to use this
app.use("/", router)

app.listen(4000, () => console.log("This server is running on port 4000"))