const userCredential = (req, res, next) => {
    console.log("User : (Vishnu)")
    console.log("Age : (26)")
    console.log("Educated : (none)")
    next()
}

// Middleware is a simple function we can used as in middle of router and route and can give simple logic by using user request

export default userCredential