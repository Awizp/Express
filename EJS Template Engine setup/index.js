import express from "express"

import router from "./routes/route.js"

const app = express()

app.set("view engine", "ejs")

app.use("/", router)

app.listen(4000, () => console.log("server up!"))