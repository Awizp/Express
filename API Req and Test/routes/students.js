import express from "express"

const studentRouter = express.Router()

studentRouter.get("/get", (req, res) => {
    res.send("All students list")
})

studentRouter.post("/post", (req, res) => {
    res.send("Add student")
})

studentRouter.put("/put", (req, res) => {
    res.send("Update student")
})

studentRouter.delete("/delete", (req, res) => {
    res.send("Delete student")
})

export default studentRouter