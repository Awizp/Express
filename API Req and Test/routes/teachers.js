import express from "express"

const teacherRouter = express.Router()

teacherRouter.get("/get", (req, res) => {
    res.send("All Teachers list")
})

teacherRouter.post("/post", (req, res) => {
    res.send("Add Teacher")
})

teacherRouter.put("/put", (req, res) => {
    res.send("Update Teacher")
})

teacherRouter.delete("/delete", (req, res) => {
    res.send("Delete Teacher")
})

export default teacherRouter
