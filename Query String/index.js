import express from "express"

const app = express()

app.get("/products", (req, res) => {
    const { category, id } = req.query
    res.send(`Your product ${category} with id of ${id} will delivered soon`)
})

// if we search for query in products it will provide the category and id values in backend from client
app.listen(4000, () => console.log("server up!"))