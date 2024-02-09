import express from "express"

import products from "./Routes/products.js"

const app = express()

app.use("/products", products)

app.listen(4000, () => console.log("server up!"))