import express from "express"

import { getHome, getContact, getAbout } from "./controllers/getMethod.js"
import userCredential from "./middleware/userCredential.js"

const app = express()

app.use(userCredential)

// These middlewares are used as a logic from user request to get the wanted progress in our website

// app.get("/", userCredential, getHome)
// app.get("/contact",userCredential, getContact)
// app.get("/about",userCredential, getAbout)

// we can provide middlewares to all of our routers by using app.use() method in our server

app.get("/", getHome)
app.get("/contact", getContact)
app.get("/about", getAbout)

// app.use("vishnu",userCredential) // we can give special domain name to access this middleware

app.listen(4000, () => console.log("server up!"))