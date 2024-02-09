import express from "express"

const router = express.Router()

router.get("/:category/:id/:date", (req, res) => {
    const { category, id } = req.params // Here we can destructure the params from the user request
    res.send(`User wants ${category} with product id of ${id}`)
})

export default router