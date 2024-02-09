import express from "express"

import { getProduct, addProduct, updateProduct, deleteProduct } from "../controllers/controllers.js"

const router = express.Router()

// router.get("/get/:id", (req, res) => {
//     const { id } = req.params
//     res.send(id ? `Your product is this ${id} product` : "All products")
// })

// router.post("/post/:id", (req, res) => {
//     const { id } = req.params
//     res.send(id ? `Your product is ${id} is added` : "Add product")
// })

// router.put("/put/:id", (req, res) => {
//     const { id } = req.params
//     res.send(id ? `Your product ${id} is updated` : "Update product")
// })

// router.delete("/delete/:id", (req, res) => {
//     const { id } = req.params
//     res.send(id ? `Your product ${id} is deleted` : "Delete Product")
// })

// we can seperate these callback functions as known as controllers to seperate file in big files and look like below

router.param("id", (req, res, next, id) => {
    console.log(`Your product id is ${id}`)
    next()
})

router.get("/get/:id", getProduct)

router.post("/post/:id", addProduct)

router.put("/put/:id", updateProduct)

router.delete("/delete/:id", deleteProduct)

export default router