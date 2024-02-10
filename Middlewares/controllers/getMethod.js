const getHome = (req, res) => {
    res.send("<h1>Hello world</h1>")
}
const getContact = (req, res) => {
    res.send("<h1>HContact section</h1>")
}
const getAbout = (req, res) => {
    res.send("<h1>About section</h1>")
}

export {
    getHome,
    getContact,
    getAbout
}