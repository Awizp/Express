const homeController = (req, res) => {

    const data = {
        name: "vishnu",
        age: 13
    }

    //sending our data into the EJS file

    // You don't need to import the views directory here bcoz EJS handled that already

    res.render("index", data)
}

export default homeController