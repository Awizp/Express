import express from "express"

import { products } from "./db/products.js"

const app = express()

app.get("/products", (req, res) => {
    res.json(products)
})

app.listen(4000, () => console.log("server up!"))