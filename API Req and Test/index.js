import express from "express"

import studentRouter from "./routes/students.js"
import teacherRouter from "./routes/teachers.js"

const app = express()

app.get("/", (req, res) => {
    res.send("Go to students in search bar")
})

// app.get("/students", (req, res) => {
//     res.send("All Students")
// })

// app.post("/students", (req, res) => {
//     res.send("Add a new student")
// })

// app.put("/students", (req, res) => {
//     res.send("Update the student")
// })

// app.patch("/students", (req, res) => {
//     res.send("Update the details about existing student")
// })

// app.delete("/students", (req, res) => {
//     res.send("Delete student")
// })

// Here we gave all crud methods in detaisl to test that we go to postman api to check how its work

// we have to refactor the above code to avoid repeatation

// app.route("/students")
//     .get((req, res) => res.send("All students"))
//     .post((req, res) => res.send("Add student"))
//     .put((req, res) => res.send("Update student"))
//     .delete((req, res) => res.send("Delete student"))

// we can refactor this further more into seperate file

app.use("/students", studentRouter) // we can use .use() method to get all the routes from that file to configure the route
app.use("/teachers", teacherRouter)

app.listen(4000, () => { console.log("server up!") })
