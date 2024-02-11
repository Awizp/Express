import express from "express"

import homeController from "../controllers/controller.js"

// Define the router method
const router = express.Router()

router.get("/", homeController)

export default router