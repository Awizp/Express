import express from "express"

// import router from "./routes/products.js"

const app = express()

// //Route params | parameters is known as the keywords of details of that particular item
// app.use("/products", router)

// we can provide seperate params also from the user like below
app.param("date", (req, res, next, date) => {
    console.log(`This product provided at this date ${date}`)
    next()
})

app.get("/products/:date", (req, res) => {
    res.send(`This product provided at ${req.params.date}`)
})

app.listen(4000, () => console.log("server up!"))
